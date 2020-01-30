function barraEdicao(){
	if(barraEdicaoHabilitado == false){
		myMapa.barraEdicao(true);
		barraEdicaoHabilitado = true;

		console.log(barraEdicaoHabilitado);
	}
	else if(barraEdicaoHabilitado == true){
		myMapa.barraEdicao(false);
		barraEdicaoHabilitado = false;

		console.log(barraEdicaoHabilitado);
	}
}