//Redirecionamento de páginas com javascript

function recuperarSenha(){
	window.open('recuperar-senha.html', '_blank');
}

function cadastro(){
	window.open('cadastro-usuario.html', '_blank');
}

function logout(){
	location.href='logout.php';
}

function login(){
	location.href='login.php';
}

function cadastroUsuarios(){
	location.href='cadastro-usuario.php';
}

function alterarSenha(){
	location.href='alterar-senha.php';
}
