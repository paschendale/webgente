/* ---- Chamam as funções que já foram apresentadas antes em class e main */

/* Função para exportar mapas. Aparece no arquivo main.js e class.js */ 
function exportarMapa(){
	myMapa.exportar();
}

/* Função para habilitar a barra de pesquisa nas camadas. Aparece no arquivo main.js e possibilita ao usuário pesquisar pelos atributos
das camadas presentes no WebGENTE */
function barraPesquisas(){
	myMapa.barraPesquisas();
}

/* Função para habilitar/desabilitar a barra de edição; é usada para o usuário desenhar no mapa do WebGENTE com polilinha, polígono e 
marcador. Aparece no arquivo class.js e main.js.*/
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

/* Função para habilitar a localização do usuário no WebGENTE; aparece no arquivo class.js e main.js */
function localizacao(){
	myMapa.minhaLocalizacao();
}

// ------ Redirecionamento de páginas com javascript ---------

/* Função para recuperar a senha quando o usuário está deslogado */
function recuperarSenhaDeslogado(){
	window.open('recoverPassword.html', '_blank');
}

/* Função para recuperar a senha quando o usuário está logado (?) */
function recuperarSenhaLogado(){
	window.open('../recoverPassword.html', '_blank');
}

/* Função para realizar o cadastro de usuário */
function cadastro(){
	window.open('register.html', '_blank');
}

/* Função para o usuário cadastrado realizar o logout */
function logout(){
	location.href='logout.php';
}

/* Função para o usuário cadastrado da prefeitura realizar o logout */
function logoutPrefeitura(){
	location.href='php/logout.php';
}

/* Função para o usuário cadastradao realizar o login */
function login(){
	location.href='php/login.php';
}

/* Função para realizar o cadastro do usuário */
function cadastroUsuarios(){
	location.href='register.php';
}

/* Função para alterar a senha do usuário*/
function alterarSenha(){
	location.href='alterar-senha.php';
}

/* Parâmetros */
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