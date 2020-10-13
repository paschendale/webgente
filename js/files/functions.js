//Gera campos pesquisaveis de acordo com os atributos definidos no vetor prop_query
//e envia  camada a ser exibida
function opcoes(){
	var n = document.getElementById('barraPesquisa').value;
	var opcao = document.getElementById("conteudo");
	var camposPesquisaveis = ""; 
	for (campos of vetorOverlay[n].prop_query){
		var nome_alternativo= vetorOverlay[n].prop_alternative[vetorOverlay[n].prop_query.indexOf(campos)];
		camposPesquisaveis+=` <input type="text" id="`+campos+`" name="`+ campos +`" placeholder="`+nome_alternativo+`">`
	}

	opcao.innerHTML = `
		<style> 
			input[type=text] {
			  margin: 2px 2px 2px 2px;
			  box-sizing: border-box;
			  border-radius: 4px;
			  border-style: solid;
			  box-shadow: inset 0px 0px 0px 0px red;
			  border: solid lightgrey 2px;
			}
			input[type=text]:hover {
			  background: #e6e6e6;
			}
		</style>
		<form action="" method="POST">`
	    	+camposPesquisaveis+
	    	`<input type="button" id="botao-ok" value="Ok" onclick="consultaFiltro(vetorOverlay[`+n+`])"> 
	    </form>`
}

var getJson = "";

function gerarTXT(){
    var textFile = null,
    makeTextFile = function (text){
        var data = new Blob([text], {type: 'text/plain'});
      
        if (textFile !== null) {
            window.URL.revokeObjectURL(textFile);
        }
        textFile = window.URL.createObjectURL(data);
        return textFile;
    };

    var create = document.getElementById('create');

    create.addEventListener('click', function (){
        var link = document.getElementById('downloadlink');
      
        link.href = makeTextFile(getJson);
       link.style.display = 'block';
    }, false);
}





var tabela= "";
var layerF;
var vetorLayer= new Array();
var link="";
var filtrado=new Array();
var chaves= "";

function fecharTabela(){
    var tabelaExibicao = document.getElementById("conteudo");
    tabelaExibicao.innerHTML = "";
}

function link_shp (i, formato){
//Exportar resultar em shp, gml e scv
	chaves.unshift("geom");
    var defaultParameters = {
        service : 'WFS',
        version : '1.0.0',
        request : 'GetFeature',
        typeName :  layerF.layers,
        outputFormat : formato,
        format_options : 'callback:getJson',
        propertyName: chaves,
        SrsName : 'EPSG:4326',
        cql_filter: filtrado[i]
    };
 
    var parameters = L.Util.extend(defaultParameters);
   var URL = "https://geoserver.genteufv.com.br/geoserver/ows" + L.Util.getParamString(parameters);
 
   window.open(URL);
   chaves.splice(0,1);
  
    
    }

function exibe_propriedades_tabela(i){
	
    var response=tabela.features[i];
	var consulta = document.getElementById("conteudo");

	//variaveis que o tipo de usuário não pode ter acesso são excluídas com o método abaixo
	
    var colunas="";
	var linhas="";
    
	for( campos of chaves ){
        colunas+= `<th>`+campos+`</th>`;   
        colunas+=`\n`;
        if(campos == 'path_folder'){
        	linhas+=`<td> <img src="img/folder.png" onClick="window.open('`+response.properties[campos]+`')"</td>`;
        }else{

        	linhas+=`<td>`+response.properties[campos]+`</td>`;	
        }
    	
    	linhas+=`\n`;	
	}	

    consulta.innerHTML = `
        <div id="img_fechar"><img src="img/left-arrow.png" alt="Voltar ao painel de pesquisas" onclick="opcoes(-1)"></div>
            <table id="tabela_propriedades">
                <tr>
                    `+colunas+`
                    
                </tr>
                <tr>
                    `+linhas+`
                   
                </tr>
            </table>
        </div>
            
    `;  
}

function coordFail(coord){
	//função recursiva que extrai uma matriz de coordenadas
	if(coord.length>1 && coord[0].length>1 || coord.length>1 && coord[0].length==undefined ){
       
		return coord;
	}else{
       
		return coordFail(coord[0]);
	}
}

function buscaVia(posicao){
    //Usa a posição para retornar o objeto que vai ser filtrado e destacado
   
	var coord=coordFail (tabela.features[posicao].geometry.coordinates);
  

	var lalo;
	if(coord[0].length>1){ 
	lalo= L.GeoJSON.coordsToLatLngs(coord);
	myMapa.getMapa().fitBounds(lalo);
	}else{ 
        
		lalo= L.GeoJSON.coordsToLatLng(coord);
		myMapa.getMapa().setView(lalo,17); 
	}
	var selecao='';
	
	//De acordo com o tipo de geometria seleciona um estilo específico
	switch(tabela.features[posicao].geometry['type']){
		case 'Polygon':
		case 'MultiPolygon':
		selecao='poligono_selecao';
		break;
		case 'MultiPoint':
		case 'Point':
		selecao='ponto_selecao';
		break; 
		case 'MultiLineString':
		case 'LineString':
		selecao='linha_selecao';
		break;
		default:
		selecao='selecao';
	}


	
	source = L.WMS.source(overlayHost, {
		            opacity: 1,
		            tiled: true,
		            maxZoom: 25,
		            "info_format": "application/json",
		            transparent: true,
		            format: 'image/png',
		            cql_filter:filtrado[1],
		            styles: selecao
		        });

	
	vetorLayer.unshift(source.getLayer(layerF.layers));
     vetorLayer[0].addTo(myMapa.getMapa());
   

}


function filtro ( objPesquisa){
//Recebe a camada de pesquisa e concatena uma string com o conteúdo do cql_filter 
    var cql_filtro="";
 
 	 
   
   if(objPesquisa==null){
    for(campo of layerF.prop_query){
    	var tipo_texto=document.getElementById(campo).value;
        //Possíveis variações que o usuário pode digitar
        if(tipo_texto == 'praça' || tipo_texto == 'praca' || tipo_texto == 'Praca' || tipo_texto == 'Praça' || tipo_texto == 'PRACA' || tipo_texto == 'PRAÇA'){
            tipo_texto = 'pca'
        }
        else if(tipo_texto == 'avenida' || tipo_texto == 'Avenida' || tipo_texto == 'AVENIDA'){
            tipo_texto = 'avn'
        }
        
        var resp =tipo_texto ;
        
       
       cql_filtro+=(resp!="" & cql_filtro!="")? " and ": "";
        if(layerF.numeric.indexOf(campo)==-1){
        
            cql_filtro+=(resp!="" && resp!=null)?("("+campo+" LIKE "+ " '%"+resp+"%' or "+campo+" LIKE "+ " '%"+(resp.toLowerCase())+"%' or "+campo+" LIKE "+ " '%"+(resp.toUpperCase())+"%') " ):"";
       }else{
        
          
        cql_filtro+=(resp!="")? (isNaN(resp))? (campo+" = 000"):(campo+" = "+ ""+resp+" "):"";
           
        }
        }
	
	filtrado[0]=cql_filtro;
}else{
		cql_filtro+="id = "+  tabela.features[objPesquisa].properties['id'];
		filtrado[1]=cql_filtro;

	}
	


}



function consultaFiltro (camadaFiltrada){

    var loading = document.getElementById('barra-loading');
    loading.innerHTML = `<button class="btn btn-primary" type="button" disabled>
                          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                          Carregando camada
                        </button>`;


 if(vetorLayer.length > 0){
        controle = false;
        vetorLayer.forEach(apagaLayers);
    	vetorLayer=[];
    }

    //Chama a camada como wms normal usando a classe wmsCamada criada no arquivo classes.js
        source = L.WMS.source(overlayHost, {
                opacity: 1,
                tiled: true,
                maxZoom: 25,
                "info_format": "application/json",
                transparent: true,
                format: 'image/png'
            });

        layerF=camadaFiltrada;
        vetorLayer.unshift(source.getLayer(layerF.layers));
        vetorLayer[0].addTo(myMapa.getMapa());
		filtro(null);    
     
    //Requisição WFS para buscar os dados a serem mostrados na tabela
    var defaultParameters = {
        service : 'WFS',
        version : '1.0.0',
        request : 'GetFeature',
        typeName :  layerF.layers,
        outputFormat : 'text/javascript',
        format_options : 'callback:getJson',
        SrsName : 'EPSG:4326',
        cql_filter: filtrado[0]
        //Cql filter adicionado também na requisição wfs
    };

    

    var parameters = L.Util.extend(defaultParameters);
    var URL = "https://geoserver.genteufv.com.br/geoserver/ows" + L.Util.getParamString(parameters) ;
    var xhr = $.ajax({
        url: URL,
        dataType: 'jsonp', 
        cache: false, 
        jsonpCallback: 'getJson',
            success: function (response){
            	//Transforma o response em variavel global por meio da variavel tabela
                tabela=response;
                chaves = (response.features.length == 0)?" ":Object.keys(restrictedAtributes(tabela.features[0].properties,layerF.layers));
               
                    var consulta = document.getElementById("conteudo");
                    var coluna="";
                    for (campos of layerF.prop_query){
                          coluna+= `<th>`+layerF.prop_alternative[layerF.prop_query.indexOf(campos)]+`</th>`
                          coluna+=`\n`;
                    }    
                    
                    
    				var consulta_html_01 = `
    				<div id="resultado_pesquisa">
    				<div id="img_fechar"><img src="img/left-arrow.png" alt="Voltar ao painel de pesquisas" onclick="opcoes(-1)"></div>
    				<button type="button" class="btn " onclick="link_shp(0,'shape-zip')" ><strong>SHP</strong></button>
    				<button type="button"  class="btn " onclick="link_shp(0, 'csv' ) "><strong>CSV</strong></button>
    				<button type="button"  class="btn " onclick="link_shp( 0,'GML3') "><strong>GML</strong></button>
    				
    					<table id="tabela_pesquisa">
    						<tr>
    					      	`+coluna+`
                                <th>Ver</th>
                                <th>Download</th>
    					    </tr>
    				</div>
    				`;
    	
    				var consulta_td = "";	      					
                    for(var i=0; i<response.features.length; i++){
                             consulta_td+="<tr>"; 
                            var linhas="";
                            for (campos of layerF.prop_query){
                                linhas+="<td>" + response.features[i].properties[campos] + "</td>";  
                
                                 linhas+=`\n`;   
                            } 
                                            
                        
                        consulta_td  += linhas;

                        //Onclick chama duas funções
                        consulta_td += '<td><img src="img/lupa.png" onclick="filtro('+i+');buscaVia('+i+'); exibe_propriedades_tabela('+i+')"></td>'; 
                        consulta_td+= `<td> <img src="img/donwload.png" onclick="filtro(`+i+`);link_shp(`+1+`,'shape-zip')"></td> </tr>`;

                    }
                    
                    var consulta_html_02  =`</table>
                                    </div>
    					    	</div>
    					   	</div>
    					</div>
    				`; 

    				consulta.innerHTML = consulta_html_01 + consulta_td + consulta_html_02;  

                     if(response.features.length == 0){
                        consulta_td += "<td></td><td> ERRO: NENHUM RESULTADO</td><td></td>";
                    consulta.innerHTML = consulta_html_01 + consulta_td + consulta_html_02;  
                    }
    		  loading.innerHTML = '';
            }
    });
}


function apagaLayers(layer){

	myMapa.getMapa().removeLayer(layer);

}


// getfeatureinfo

function objects2div (objeto){

    div_init = '<div';

    div_final = '</div>';

    div_data = '';

    i = 0;

    css = '<style>a {font-weight: bold; color: inherit;}</style>';

    for (var property in objeto) {
    if (!objeto.hasOwnProperty(property)) continue;

        div_id = 'tabela'+i;

        title = (objeto[property].id).split('.');

        id = objeto[property].properties.id;

        div_content = '<div style="width:270px;"><p><a style="font-weight: bold; color: inherit;" data-toggle="collapse" href="#'+div_id+'">'+title[0]+': '+id+'</a></p></div><div id="'+div_id+'" class="panel-collapse collapse"><div class="panel-body" style="height: 120px; overflow-y: auto; overflow-x: hidden;">'+properties2table(objeto[property].properties)+'</div></div>'

        div_data = div_data + div_content + '<p></p>';

        i++;

    }

    div_data = '<div>' + div_data + css + '</div>';

    return div_data;

};

function properties2table (objeto){
    tb_init = '<table><tr><th>Atributo</th><th>Valor</th></tr>';

    tb_data_acum = '';

    for (var property in objeto) {
    if (!objeto.hasOwnProperty(property)) continue;

    if (property == 'path_folder') {
        tb_data = '<tr><td>Arquivos associados</td><td><a href="'+ objeto[property]+'" target="_blank"><img alt="Acessar o sistema Alfresco" src="img/folder.png"></a></td></tr>';
    } else {
        tb_data = '<tr><td>'+property+'</td><td>'+objeto[property]+'</td></tr>';
    }

    tb_data_acum = tb_data_acum+tb_data;     
        
    };

    css_table = '<style>table {width:250px;text-align:left;vertical-align:center;padding: 15px;border-bottom: 1px solid #ddd;font-family: Tahoma, Geneva, sans-serif;}td,th {border-bottom: 1px solid #ddd;padding: 2px;}tr:hover {background-color: #f5f5f5;}th {background-color: #f5f5f5;}</style>'

    tb_final = '</table>';

    tb = css_table+tb_init+tb_data_acum+tb_final;

    return tb;
};
