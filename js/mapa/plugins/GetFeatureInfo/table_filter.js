function filtros(){

	var cql_quadra= document.getElementById("quadra");
	var cql_setor= document.getElementById("setor");

	var quadra = vetorOverlay[2];
	quadra.host=overlayHost;
	quadra.cql_filter=cql_setor.getAttribute("name") +"= "+ cql_setor.value +" and "+cql_quadra.getAttribute("name") +"= "+ cql_quadra.value ;
	//Erro ao tentar inserir a camada
	var quadra_filtro = new wmsCamada(quadra);
	quadra_filtro.addTo(myMapa.getMapa());	
}

function tabela () {

}