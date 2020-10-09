function barraEdicao(){
	if(barraEdicaoHabilitado == false){
		myMapa.barraEdicao(true);
		barraEdicaoHabilitado = true;
	}
	else if(barraEdicaoHabilitado == true){
		myMapa.barraEdicao(false);
		barraEdicaoHabilitado = false;
	}
}