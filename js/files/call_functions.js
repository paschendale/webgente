function exportarMapa(){
	myMapa.exportar();
}

function barraPesquisas(){
	myMapa.barraPesquisas();
}

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

function localizacao(){
	myMapa.minhaLocalizacao();
}

//Redirecionamento de páginas com javascript

function recuperarSenhaDeslogado(){
	window.open('recuperar-senha.html', '_blank');
}

function recuperarSenhaLogado(){
	window.open('../recuperar-senha.html', '_blank');
}

function cadastro(){
	window.open('cadastro-usuario.html', '_blank');
}

function logout(){
	location.href='logout.php';
}

function logoutPrefeitura(){
	location.href='php/logout.php';
}

function login(){
	location.href='php/login.php';
}

function cadastroUsuarios(){
	location.href='cadastro-usuario.php';
}

function alterarSenha(){
	location.href='alterar-senha.php';
}
