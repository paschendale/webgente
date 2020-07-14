var tabela= "";
var layerF;
var vetorLayer= new Array();
var link="";

function fecharTabela(){
    var tabelaExibicao = document.getElementById("consultaPesquisa");
    tabelaExibicao.innerHTML = "";
}
function link_shp (i){
    var response= tabela.features[i];
    response.properties= restrictedAtributes(response.properties,layerF.layers);
    var chaves = Object.keys(response.properties);  
    

    var cql_filtro = filtro(layerF,response.properties);
    var defaultParameters = {
        service : 'WFS',
        version : '1.0.0',
        request : 'GetFeature',
        typeName :  layerF.layers,
        outputFormat : 'shape-zip',
        format_options : 'callback:getJson',
       // propertyName:  chaves,
        SrsName : 'EPSG:4326',
        cql_filter: cql_filtro
        //Cql filter adicionado também na requisição wfs
    };

    var parameters = L.Util.extend(defaultParameters);
    var URL = "https://geoserver.genteufv.com.br/geoserver/ows" + L.Util.getParamString(parameters);
   window.open(URL);
    
    }

function exibe_propriedades_tabela(i){
    var response=tabela.features[i];
	var tabelaExibicao = document.getElementById("conteudo");
    tabelaExibicao = "";
	//variaveis que o tipo de usuário não pode ter acesso são excluídas com o método abaixo
	response.properties= restrictedAtributes(response.properties,layerF.layers);
    var chaves = Object.keys(response.properties);
    var colunas="";
	var linhas="";
    
	for( campos of chaves ){
        colunas+= `<th>`+campos+`</th>`;   
        colunas+=`\n`;
    	linhas+=`<td>`+response.properties[campos]+`</td>`;	
    	linhas+=`\n`;	
	}	
//'<td><img src="img/lupa.png" onclick="buscaVia('+i+'); exibe_propriedades_tabela(tabela.features['+i+'])"></td></tr>';
    /*tabelaExibicao.innerHTML = `
		<div class="row">
			<div class="modal-dialog" role="dialog" id="propriedades">
				<div class="modal-content">
					<div class="modal-body" id="tabela_propriedades"><div id="img_fechar"><img src="img/botao-fechar.jpg" onclick="fecharTabela()"></div>
					    <table id="tabela-rua">
					    	<tr>
					      		`+colunas+`
                                <th> Donwload </th>
					      	</tr>
					      	<tr>
						      `+linhas+`
                               <td> <img src="img/donwload.png" onclick="link_shp(`+i+`)"></td>  
					      	</tr>
						</table>
					</div>
				</div>
			</div>
	   </div>
	`;*/
    tabelaExibicao.innerHTML = `
        <div class="row">
            <div id="propriedades">
                <table id="tabela-rua">
                <div id="img_fechar"><img src="img/botao-fechar.jpg" onclick="opcoes(-1)"></div>
                    <tr>
                        `+colunas+`
                        <th> Donwload </th>
                    </tr>
                    <tr>
                    `+linhas+`
                    <td> <img src="img/donwload.png" onclick="link_shp(`+i+`)"></td>  
                    </tr>
                </table>
            </div>
       </div>
    `;
}

function coordFail(coord){
	//função recursiva que extrai uma matriz de coordenadas
	if(coord.length>1){
		return coord;
	}else{
		return coordFail(coord[0]);
	}
}

function buscaVia(posicao){
    //Usa a posição para retornar o objeto que vai ser filtrado e destacado
	var coord= (tabela.features[posicao].geometry.coordinates[0]);
	var lalo;
	if(coord[0].length>1){
	lalo= L.GeoJSON.coordsToLatLngs(coordFail(coord));
	myMapa.getMapa().fitBounds(lalo).setZoom(17);
	}else{ 
		lalo= L.GeoJSON.coordsToLatLng(coordFail(coord));
		myMapa.getMapa().setView(lalo,17); 
	}

	var cql_filtro = filtro(layerF,tabela.features[posicao].properties);
	source = L.WMS.source(overlayHost, {
		            opacity: 1,
		            tiled: true,
		            maxZoom: 25,
		            "info_format": "application/json",
		            transparent: true,
		            format: 'image/png',
                    output_format:'shape-zip',
		            cql_filter:cql_filtro,
		            styles:'selecao'
		        });
	vetorLayer.unshift(source.getLayer(layerF.layers));
     vetorLayer[0].addTo(myMapa.getMapa());
    


}


function filtro (camadaFiltrada, objPesquisa){
//Recebe a camada de pesquisa e concatena uma string com o conteúdo do cql_filter 
    var cql_filtro="";
    for(campo of camadaFiltrada.prop_query){


        var tipo_texto= document.getElementById(campo).value;

        //Possíveis variações que o usuário pode digitar
        if(tipo_texto == 'praça' || tipo_texto == 'praca' || tipo_texto == 'Praca' || tipo_texto == 'Praça' || tipo_texto == 'PRACA' || tipo_texto == 'PRAÇA'){
            tipo_texto = 'pca'
        }
        else if(tipo_texto == 'avenida' || tipo_texto == 'Avenida' || tipo_texto == 'AVENIDA'){
            tipo_texto = 'avn'
        }
        
        var resp =(objPesquisa==null)? tipo_texto : objPesquisa[campo];


       cql_filtro+=(resp!="" & cql_filtro!="")? " and ": "";
        if(camadaFiltrada.numeric.indexOf(campo)==-1){
            cql_filtro+=(resp!="")?("("+campo+" LIKE "+ " '%"+(resp.toLowerCase())+"%' or "+campo+" LIKE "+ " '%"+(resp.toUpperCase())+"%') " ):"";
       }else{
            cql_filtro+=(resp!="")?(campo+" = "+ ""+resp+" "):"";
        }
	}
return cql_filtro;

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
		var cql_filtro=filtro(camadaFiltrada,null);    
      
    //Requisição WFS para buscar os dados a serem mostrados na tabela
    var defaultParameters = {
        service : 'WFS',
        version : '1.0.0',
        request : 'GetFeature',
        typeName :  layerF.layers,
        outputFormat : 'text/javascript',
        format_options : 'callback:getJson',
        SrsName : 'EPSG:4326',
        cql_filter: cql_filtro
        //Cql filter adicionado também na requisição wfs
    };

    var parameters = L.Util.extend(defaultParameters);
    var URL = "https://geoserver.genteufv.com.br/geoserver/ows" + L.Util.getParamString(parameters);
    var xhr = $.ajax({
        url: URL,
        dataType: 'jsonp', 
        cache: false, 
        jsonpCallback: 'getJson',
            success: function (response){
            	//Transforma o response em variavel global por meio da variavel tabela
                tabela=response;

                    var consulta = document.getElementById("conteudo");
                    var coluna="";
                    for (campos of layerF.prop_query){
                          coluna+= `<th>`+layerF.prop_alternative[layerF.prop_query.indexOf(campos)]+`</th>`
                          coluna+=`\n`;
                    }    

    				var consulta_html_01 = `
    				<div id="resultado_pesquisa">
    				<div id="img_fechar"><img src="img/botao-fechar.jpg" onclick="opcoes(-1)"></div>
    					<table id="tabela_pesquisa">
    						<tr>
    					      	`+coluna+`
                                <th>Ver</th>
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
                        consulta_td += '<td><img src="img/lupa.png" onclick="buscaVia('+i+'); exibe_propriedades_tabela('+i+')"></td></tr>'; 
                        
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

