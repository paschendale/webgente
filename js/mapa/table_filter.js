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
    		     
            }
    });
}


function apagaLayers(layer){

	myMapa.getMapa().removeLayer(layer);

}

