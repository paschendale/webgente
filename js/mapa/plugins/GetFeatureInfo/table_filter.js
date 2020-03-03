var controle = false;
function filtros(){

	var cql_quadra = document.getElementById("quadra");
	var cql_setor = document.getElementById("setor");
	var quadra = vetorOverlay[2];

	quadra.host = overlayHost;
	
	//Monta a busca do cql_filter
	quadra.cql_filter = cql_setor.getAttribute("name") +"="+ cql_setor.value;// +" and "+cql_quadra.getAttribute("name") +"="+ cql_quadra.value;

	if(controle == true){
		myMapa.getMapa().removeLayer(quadra_filtro.getLayer());
		controle = false
	}

	if(controle == false){
		//Chama a camada como wms normal usando a classe wmsCamada criada no arquivo classes.js
		quadra_filtro = new wmsCamada(quadra);
		myMapa.getMapa().addLayer(quadra_filtro.getLayer());
		controle = true;
	}
}

function tabela () {

}