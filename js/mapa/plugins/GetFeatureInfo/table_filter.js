var controle = false;

function filtros(){
	var cql_quadra = document.getElementById("quadra");
	var cql_setor = document.getElementById("setor");
	var quadra = vetorOverlay[2];

	quadra.host = overlayHost;
	quadra.cql_filter = cql_setor.getAttribute("name") +"="+ cql_setor.value;// +" and "+cql_quadra.getAttribute("name") +"= "+ cql_quadra.value ;

	console.log(quadra);

	//Chamada da camada wms do geoserver como imagem

	if(controle == true){
		myMapa.getMapa().removeLayer(quadra_filtro.getLayer());
		controle = false;
	}
	if(controle == false){
		quadra_filtro = new wmsCamada(quadra);
		quadra_filtro.getLayer().addTo(myMapa.getMapa());
		controle = true;
	}

	//Chamada de todos os atributos da camada wms requisitada

	var defaultParameters = {
        service : 'WFS',
        version : '1.0.0',
        request : 'GetFeature',
        typeName : quadra.layers,
        outputFormat : 'text/javascript',
        format_options : 'callback:getJson',
        SrsName : 'EPSG:4326'
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

function tabela () {

}