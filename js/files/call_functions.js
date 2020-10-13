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
	window.open('recoverPassword.html', '_blank');
}

function recuperarSenhaLogado(){
	window.open('../recoverPassword.html', '_blank');
}

function cadastro(){
	window.open('register.html', '_blank');
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
	location.href='register.php';
}

function alterarSenha(){
	location.href='alterar-senha.php';
}

$(document).ready(function(){
	$("#cpf").mask("000.000.000-00");
	$("#usuario").mask("000.000.000-00", {reverse: true});
	$("#celular").mask("(00) 00000-0009");
	$("#celular").blur(function(event){
		if($(this).val().length==15){
			$("#celular").mask("(00) 00000-0000");
		}else{
			$("#celular").mask("(00) 0000-0000");
		}
	});

	//Validação de campos
$("#formulario").validate({
		rules:{
			nome: {
				maxlength:100,
				minlength:5
			},

			email: {
				required: true,
				email: true
			},

			cpf: {
				required: true,
				cpfBR:true
			} ,
			senha: {
				required: true,
				maxlength:20,
				minlength:4
			}
} 
	})	

})