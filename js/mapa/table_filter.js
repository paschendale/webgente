var controle = false;

function buscaVia(){
    alert("TESTE");
}

function filtros(camadaFiltrada){
    //Recebe a camada de pesquisa e concatena uma string com o conteúdo do cql_filter 

    var cql_filtro="";
    for(campo of camadaFiltrada.prop_query){
        var resp = document.getElementById(campo).value;
       cql_filtro+=(resp!="" & cql_filtro!="")? " and ": "";
        if(Number.isNaN(parseInt(resp))){
            cql_filtro+=(resp!="")?(campo+" LIKE "+ " '%"+(resp.toLowerCase())+"%' or "+campo+" LIKE "+ " '%"+(resp.toUpperCase())+"%' " ):"";
        }else{
            cql_filtro+=(resp!="")?(campo+" = "+ ""+resp+" "):"";
        }
	}

   var layerF = camadaFiltrada;
    if(controle == true){
        
        controle = false;
    }

    if(controle == false){

        //Chama a camada como wms normal usando a classe wmsCamada criada no arquivo classes.js
        source = L.WMS.source(overlayHost, {
            opacity: 1,
            tiled: true,
            maxZoom: 25,
            "info_format": "application/json",
            transparent: true,
            format: 'image/png',
            cql_filter: cql_filtro
        });
    
        source.getLayer(layerF.layers).addTo(myMapa.getMapa());

        controle = true;
    }

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

    //Implementa requisição WFS somente para a camada de ruas 
    
    if(camadaFiltrada.nome == "Eixos de Vias"){
    	var xhr = $.ajax({
        url: URL,
        dataType: 'jsonp', 
        cache: false, 
        jsonpCallback: 'getJson',
            success: function(response){
                //Editar o json de resposta das quadras dos setores aqui em um popup
                
                var eixo = document.getElementById("eixoVias");

                var eixo_html_01 = `
					<div class="row">
					  	<div class="modal-dialog" role="dialog" id="barra-rua">
					    	<div class="modal-content">
					      		<div class="modal-body" id="corpo-rua">
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
                        eixo_td = eixo_td + "<tr><td>" + "Avendida" + "</td>";
                    }
                    else if(response.features[i].properties.tipo == "PCA"){
                        eixo_td = eixo_td + "<tr><td>" + "Praça" + "</td>";
                    }
                    else if(response.features[i].properties.tipo == "RUA"){
                        eixo_td = eixo_td + "<tr><td>" + "Rua" + "</td>";
                    }

                    eixo_td = eixo_td + "<td>" + response.features[i].properties.nome_logradouro + "</td>";
                    eixo_td = eixo_td + '<td><img src="img/lupa.png" onclick="buscaVia()"></td></tr>';
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
