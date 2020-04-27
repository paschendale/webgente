var controle = false;
var tabela= "";
var layerF;

function fecharTabela(){
    var tabela = document.getElementById("eixoVias");
    tabela.innerHTML = "";
}

function exibe_propriedades_tabela(response){
	var tabela = document.getElementById("eixoVias");
	tabela.innerHTML = `
		<div class="row">
			<div class="modal-dialog" role="dialog" id="barra-rua">
				<div class="modal-content">
					<div class="modal-body" id="tabela_propriedades"><img src="img/botao-fechar.jpg" id="imagem-fechar" onclick="fecharTabela()">
					    <table id="tabela-rua">
					    	<tr>
					      		<th>Codigo</th>
					      		<th>Id</th>
                                <th>Secao_d</th>
                                <th>Secao_e</th>
					      	</tr>
					      	<tr>
						      	<td>`+response.properties.codigo+`</td>
						      	<td>`+response.properties.id+`</td>
						      	<td>`+response.properties.secao_d+`</td>
						      	<td>`+response.properties.secao_e+`</td>
					      	</tr>
						</table>
					</div>
				</div>
			</div>
	</div>
	`
}

function buscaVia(posicao){
    //usa a posição para identificar qual via deve ser exibida

	var long=tabela.features[posicao].geometry.coordinates[0][0][0];
	var lat=tabela.features[posicao].geometry.coordinates[0][0][1];

	myMapa.getMapa().setView([lat,long],20);

	var filtro= "( tipo LIKE '%"+tabela.features[posicao].properties.tipo+"%') and (nome_logradouro LIKE '%"+tabela.features[posicao].properties.nome_logradouro+"%')";
	
	source = L.WMS.source(overlayHost, {
		            opacity: 1,
		            tiled: true,
		            maxZoom: 25,
		            "info_format": "application/json",
		            transparent: true,
		            format: 'image/png',
		            cql_filter:filtro,
		            styles:'quadras_sabrina'
		        });
	source.getLayer(layerF.layers).addTo(myMapa.getMapa());
}

function filtros(camadaFiltrada){
    //Recebe a camada de pesquisa e concatena uma string com o conteúdo do cql_filter 

    var cql_filtro="";
    for(campo of camadaFiltrada.prop_query){
        var resp = document.getElementById(campo).value;
       cql_filtro+=(resp!="" & cql_filtro!="")? " and ": "";
        if(Number.isNaN(parseInt(resp))){
            cql_filtro+=(resp!="")?("("+campo+" LIKE "+ " '%"+(resp.toLowerCase())+"%' or "+campo+" LIKE "+ " '%"+(resp.toUpperCase())+"%') " ):"";
        }else{
            cql_filtro+=(resp!="")?(campo+" = "+ ""+resp+" "):"";
        }
	}
  
    if(controle == true){
        controle = false;
    }

    layerF = camadaFiltrada;

    if(controle == false){
        //Chama a camada como wms normal usando a classe wmsCamada criada no arquivo classes.js
        /*source = L.WMS.source(overlayHost, {
                opacity: 1,
                tiled: true,
                maxZoom: 25,
                "info_format": "application/json",
                transparent: true,
                format: 'image/png'
            });

        source.getLayer(layerF.layers).addTo(myMapa.getMapa());*/
        controle = true;
    }

    //Requisição WFS para buscar os dados a serem mostrados na tabela
    var defaultParameters = {
        service : 'WFS',
        version : '1.0.0',
        request : 'GetFeature',
        typeName : layerF.layers,
        outputFormat : 'text/javascript',
        format_options : 'callback:getJson',
        SrsName : 'EPSG:4326',
        cql_filter: cql_filtro
        //Cql filter adicionado também na requisição wfs
    };

    var parameters = L.Util.extend(defaultParameters);
    var URL = "https://geoserver.genteufv.com.br/geoserver/ows" + L.Util.getParamString(parameters);

    if(camadaFiltrada.nome == "Lotes"){
        var xhr = $.ajax({
        url: URL,
        dataType: 'jsonp', 
        cache: false, 
        jsonpCallback: 'getJson',
            success: function(response){
                console.log(response);
            }
        })
    }

    else if(camadaFiltrada.nome == "Eixos de Vias"){
    	var xhr = $.ajax({
        url: URL,
        dataType: 'jsonp', 
        cache: false, 
        jsonpCallback: 'getJson',
            success: function(response){
            	//Transforma o response em variavel global por meio da variavel tabela
                tabela=response;
                
                var eixo = document.getElementById("eixoVias");

                var eixo_html_01 = `
					<div class="row">
					  	<div class="modal-dialog" role="dialog" id="barra-rua">
					    	<div class="modal-content">
					      		<div class="modal-body" id="corpo-rua"><img src="img/botao-fechar.jpg" id="imagem-fechar" onclick="fecharTabela()">
					      			<table id="tabela-rua">
					      				<tr>
					      					<th>Tipo</th>
					      					<th>Logradouro</th>
                                            <th>Ver</th>
					      				</tr>
					`;

				var eixo_td = "";	      					
                for(var i=0; i<response.features.length; i++){
                    if(response.features[i].properties.tipo == "AVN"){
                        eixo_td = eixo_td + "<tr><td>" + "Avenida" + "</td>";
                    }
                    else if(response.features[i].properties.tipo == "PCA"){
                        eixo_td = eixo_td + "<tr><td>" + "Praça" + "</td>";
                    }
                    else if(response.features[i].properties.tipo == "RUA"){
                        eixo_td = eixo_td + "<tr><td>" + "Rua" + "</td>";
                    }
                    
                    eixo_td = eixo_td + "<td>" + response.features[i].properties.nome_logradouro + "</td>";

                    //Onclick chama duas funções
                    eixo_td = eixo_td + '<td><img src="img/lupa.png" onclick="buscaVia('+i+'); exibe_propriedades_tabela(tabela.features['+i+'])"></td></tr>'; 
                    
                }
                
                var eixo_html_02  =`</table>
                                </div>
					    	</div>
					   	</div>
					</div>
				`; 

				eixo.innerHTML = eixo_html_01 + eixo_td + eixo_html_02;  

                 if(response.features.length == 0){
                    eixo_td = eixo_td + "<td></td><td> ERRO: NENHUM RESULTADO</td><td></td>";
                    eixo.innerHTML = eixo_html_01 + eixo_td + eixo_html_02; 
                }
    		}
    	});
    }
}


