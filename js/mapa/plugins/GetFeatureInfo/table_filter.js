var controle = false;

function filtros(){

	var cql_quadra = document.getElementById("quadra");
	var cql_setor = document.getElementById("setor");

	var quadra = vetorOverlay[2];

	quadra.host = overlayHost;
	quadra.cql_filter = cql_setor.getAttribute("name") +"="+ cql_setor.value;// +" and "+cql_quadra.getAttribute("name") +"= "+ cql_quadra.value ;
	
	if(controle == true){
		myMapa.getMapa().removeLayer(quadra_filtro.getLayer());
		controle = false;
	}
	if(controle == false){
		quadra_filtro = new wmsCamada(quadra);
		quadra_filtro.getLayer().addTo(myMapa.getMapa());
		controle = true;
	}
}

function tabela () {

}