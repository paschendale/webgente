var controle = false;

function filtros(){

	var cql_quadra = document.getElementById("quadra");
	var cql_setor = document.getElementById("setor");
	var quadra = vetorOverlay[2];

	quadra.host = overlayHost;
	
	//Monta a busca do cql_filter
	quadra.cql_filter = cql_setor.getAttribute("name") +"="+ cql_setor.value;// +" and "+cql_quadra.getAttribute("name") +"="+ cql_quadra.value;

	if(controle == true){
		//Remover a GetFeatureInfo requisitada
		
		controle = false
	}

	if(controle == false){
		source = L.WMS.source(quadra.host, {
        	opacity: 1,
          	tiled: true,
          	maxZoom: 25,
          	"info_format": "application/json",
          	transparent: true,
          	format: 'image/png',
          	cql_filter: quadra.cql_filter
    	});

    	source.getLayer("bomdespacho:CBGE_Quadras").addTo(myMapa.getMapa());

		controle = true;

		console.log(source);
		console.log(controle);
	}
}

function tabela () {

}