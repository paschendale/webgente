var controle = false;

function filtros(camadaFiltrada){
    //Recebe a camada de pesquisa e concatena uma string com o conteúdo do cql_filter 

    var cql_filtro="";
    for(campo of camadaFiltrada.prop_query){
        var resp = document.getElementById(campo).value;

        cql_filtro+=(resp!="" & cql_filtro!="")? " and ": "";
        cql_filtro+=(resp!="")?(campo+"="+ "'"+resp+"'"):"";
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
						<div class="col-2-lg col-2-xs col-2-xs col-2-xs">
							</div>
								<div class="col-5-lg col-5-xs col-5-xs col-5-xs">
					  				<div class="modal-dialog" role="dialog" id="barra" style="table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
th, td {
  padding: 5px;
}
th {
  text-align: left;
} z-index: 2000;">
					    				<div class="modal-content">
					      					<div class="modal-body">
					      						<table>
					      							<tr>
					      								<th>Tipo</th>
					      								<th>Logradouro</th>
					      							</tr>
					      							<tr>
					      					`;

				var eixo_td = "";	      					
                for(var i=0; i<response.features.length; i++){
                    eixo_td = eixo_td + "<td>" + response.features[i].properties.tipo + "</td>";
                    eixo_td = eixo_td + "<td>" + response.features[i].properties.nome_logradouro + "</td>";
                }
                
                var eixo_html_02  =`</div>
					    		</div>
					   		</div>
						</div>
					</div>
				`; 

				eixo.innerHTML = eixo_html_01 + eixo_td + eixo_html_02;  
    		}
    	});
    }
    /*
    var xhr = $.ajax({
        url: URL,
        dataType: 'jsonp', 
        cache: false, 
        jsonpCallback: 'getJson',
            success: function(response){
                //Editar o json de resposta das quadras dos setores aqui em um popup
                for(var i=0; i<response.features.length; i++){
                    console.log(response.features[i].properties.nome_logradouro);
                }
            }
    });
    */

}


function tabela(){

}