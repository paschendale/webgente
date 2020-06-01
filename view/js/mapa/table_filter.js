var tabela= "";
var layerF;
var vetorLayer= new Array();


function fecharTabela(){
    var tabelaExibicao = document.getElementById("consultaPesquisa");
    tabelaExibicao.innerHTML = "";
}


function exibe_propriedades_tabela(response){
	var tabelaExibicao = document.getElementById("consultaPesquisa");
	response.properties= restrictedAtributes(response.properties);
    var chaves = Object.keys(response.properties);
    var colunas="";
	var linhas="";

	for( campos of chaves ){
        colunas+= `<th>`+campos+`</th>`;   
        colunas+=`\n`;
    	linhas+=`<td>`+response.properties[campos]+`</td>`;	
    	linhas+=`\n`;	
	}	

    tabelaExibicao.innerHTML = `
		<div class="row">
			<div class="modal-dialog" role="dialog" id="propriedades">
				<div class="modal-content">
					<div class="modal-body" id="tabela_propriedades"><img src="img/botao-fechar.jpg" id="imagem-fechar" onclick="fecharTabela()">
					    <table id="tabela-rua">
					    	<tr>
					      		`+colunas+`
					      	</tr>
					      	<tr>
						      `+linhas+`
					      	</tr>
						</table>
					</div>
				</div>
			</div>
	   </div>
	`;
}


function buscaVia(posicao){
    //usa a posição para identificar qual via deve ser exibida

	var long=tabela.features[posicao].geometry.coordinates[0][0][0];
	var lat=tabela.features[posicao].geometry.coordinates[0][0][1];

	myMapa.getMapa().setView([lat,long],20);

	var cql_filtro = filtro(layerF,tabela.features[posicao].properties);
	source = L.WMS.source(overlayHost, {
		            opacity: 1,
		            tiled: true,
		            maxZoom: 25,
		            "info_format": "application/json",
		            transparent: true,
		            format: 'image/png',
		            cql_filter:cql_filtro,
		            styles:'quadras_sabrina'
		        });
	vetorLayer.unshift(source.getLayer(layerF.layers));
     vetorLayer[0].addTo(myMapa.getMapa());
}


function filtro (camadaFiltrada, objPesquisa){
//Recebe a camada de pesquisa e concatena uma string com o conteúdo do cql_filter 
		 var cql_filtro="";
    for(campo of camadaFiltrada.prop_query){
        var resp =(objPesquisa==null)? document.getElementById(campo).value:objPesquisa[campo];
       cql_filtro+=(resp!="" & cql_filtro!="")? " and ": "";
        if(Number.isNaN(parseInt(resp))){
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

                    var consulta = document.getElementById("consultaPesquisa");
                    var coluna="";
                    for (campos of layerF.prop_query){
                          coluna+= `<th>`+campos+`</th>`
                          coluna+=`\n`;
                    }    
                    var consulta_html_01 = `
    					<div class="row">
    					  	<div class="modal-dialog" role="dialog" id="barra-rua">
    					    	<div class="modal-content">
    					      		<div class="modal-body" id="corpo-rua"><img src="img/botao-fechar.jpg" id="imagem-fechar" onclick="fecharTabela()">
    					      			<table id="tabela-rua">
    					      				<tr>
    					      					`+coluna+`
                                                <th>Ver</th>
    					      				</tr>
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
                        consulta_td += '<td><img src="img/lupa.png" onclick="buscaVia('+i+'); exibe_propriedades_tabela(tabela.features['+i+'])"></td></tr>'; 
                        
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

