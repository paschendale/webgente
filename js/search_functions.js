/* -------- Funções para os usuários pesquisarem, na "Barra de Pesquisa" da interface do WebGENTE, os atributos desejados das camadas 
selecionadas -------- */



/* Variáveis necessárias para a criação de funções pesquisáveis */ 
var tabela= "";
var layerF;
var vetorLayer= new Array();
var link="";
var filtrado=new Array();
var chaves= "";


//Gera campos pesquisaveis de acordo com os atributos definidos no vetor prop_query
//e envia  camada a ser exibida
/* Essa função gera todos os campos pesquisáveis de acordo com os atributos que foram definidos anteriormente a aparecer quando o usuário
clicar na barra de pesquisas. Depois de gerar esses campos, a camada a ser exibida e suas informações serão enviadas */
function opcoes(){
	var n = document.getElementById('barraPesquisa').value;
	var opcao = document.getElementById("conteudo");
	var camposPesquisaveis = ""; 
	for (campos of vetorOverlay[n].prop_query){
		var nome_alternativo= vetorOverlay[n].prop_alternative[vetorOverlay[n].prop_query.indexOf(campos)];
		camposPesquisaveis+=` <input type="text" id="`+campos+`" name="`+ campos +`" placeholder="`+nome_alternativo+`">`
	}

    /* Estilo em HTML dos campos pesquisáveis que aparecerão na barra de pesquisas */
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


/* Função de fechar a tabela de pesquisa quando o usuário terminar de usá-la, ou seja, quando o usuário desabilitá-la. */
function fecharTabela(){
    var tabelaExibicao = document.getElementById("conteudo");
    tabelaExibicao.innerHTML = "";
}

/* Função para exportar os resultados da pesquisa realizada pelo usuário em formatos shapefile, gml e scv. Os resultados são obtidos através 
do GeoServer, logo torna-se necessário apresentar a overlayHost no final do código, caso contrário não será exportado nenhuma informação. */
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
   var URL = overlayHost.substring(0,overlayHost.length-1)+ L.Util.getParamString(parameters);
 
   window.open(URL);
   chaves.splice(0,1);
  
    
    }

/* Função para exibir as propriedades das camadas, ou seja, os atributos presentes nelas. Mas essa exibição restringe os atributos que 
não podem ser visualizados pelo usuário anônimo, atributos esses que foram inseridos no arquivo conf > anon > overlay.. */
function exibe_propriedades_tabela(i){
	
    var response=tabela.features[i];
	var consulta = document.getElementById("conteudo");

	//variaveis que o tipo de usuário não pode ter acesso são excluídas com o método abaixo:
	
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

    /* Código HTML para o estilo para consulta de atributos que o usuário irá realizar */
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

/* Função feita para pesquisar e selecionar uma via que o usuário deseja. É atribuído a ela um estilo de seleção no GeoServer para destacar
sua seleção*/
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
	
    //De acordo com o tipo de geometria seleciona um estilo específico que foi criado antes no GeoServer. Isso é feito para que a seleção seja 
    //feita de maneira perceptível ao usuário.
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


	/* Aplica o estilo de seleção na camada e atributos pesquisáveis pelo usuário */
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


/* Função receber a camada que o usuário deseja pesquisar e o que ele digitar no campo de pesquisar para retornar os possíveis resultados */
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


/* Função que analisa/consulta a camada que vai ser filtrada na pesquisa. */
function consultaFiltro (camadaFiltrada){

    /* Estilo em HTML da pesquisa enquanto estiver carregando a camada escolhida pelo usuário */
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

    console.log();

    var parameters = L.Util.extend(defaultParameters);
   var URL = overlayHost.substring(0,overlayHost.length-1)+ L.Util.getParamString(parameters) ;
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

