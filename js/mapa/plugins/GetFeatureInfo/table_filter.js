var controle = false;


function filtros(){
	var cql_setor = document.getElementById("setor");
	var cql_filtro= cql_setor.getAttribute("name") +"="+ cql_setor.value;
    var quadra= vetorOverlay[2];
    quadra.host= overlayHost;
    quadra.cql_filter= cql_filtro;
   

    if(controle == true){
       
        //Remover a GetFeatureInfo requisitada
       
        controle = false
    }

    if(controle == false){
        //Chama a camada como wms normal usando a classe wmsCamada criada no arquivo classes.js
        source = L.WMS.source(quadra.host, {
            opacity: 1,
            tiled: true,
            maxZoom: 25,
            "info_format": "application/json",
            transparent: true,
            format: 'image/png',
            cql_filter: quadra.cql_filter
        });

        source.getLayer(quadra.layers).addTo(myMapa.getMapa());

        controle = true;
    }

	var defaultParameters = {
        service : 'WFS',
        version : '1.0.0',
        request : 'GetFeature',
        typeName : quadra.layers,
        outputFormat : 'text/javascript',
        format_options : 'callback:getJson',
        SrsName : 'EPSG:4326',
         cql_filter: quadra.cql_filter
        //Cql filter adicionado também na requisição wfs
    };

    var parameters = L.Util.extend(defaultParameters);
    var URL = "https://geoserver.genteufv.com.br/geoserver/ows" + L.Util.getParamString(parameters);

    
    var xhr = $.ajax({
        url: URL,
        dataType: 'jsonp', 
        cache: false, 
        jsonpCallback: 'getJson',
        	success: function(response){
        		//Editar o json de resposta das quadras dos setores aqui em um popup

                for(var i=0; i<response.features.length; i++){
            		
                console.log(response.features[i].properties);

            	}
            }
  	});

}


function tabela(){

}