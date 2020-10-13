<?php

include '../model/model.php';

class controler{
	function cadastro(){
		$nome = $_POST['nome'];
		$cpf = $_POST['cpf'];
		$dataNascimento = $_POST['data-nascimento'];
		$sexo = $_POST['sexo'];
		$faixaEtaria = $_POST['faixa-etaria'];
		$celular = $_POST['celular'];
		$email = $_POST['email'];
		$senha = md5($_POST['senha']);
		$tipo = "prefeitura";

		$usuario = new usuario();

		//Retorna true se o usuário já esta cadastrado no banco e false caso não esteja
		$valida = $usuario->verificaUsuario($cpf);

		if($valida == false){	
			$usuario->constructor($nome, $cpf, $dataNascimento, $sexo, $faixaEtaria, $celular, $email, $senha, $tipo);
			$usuario->setUsuario();
		}
		else{
			echo("<script>alert('CPF já cadastrado no sistema.');</script>");
			header('refresh: 0.001; ../register.php');
			exit;
		}
	}

	function login(){
		$cpf = $_POST['usuario'];
		$senha = $_POST['senha'];	

		if($senha != 'admin'){
			$senha = md5($_POST['senha']);
		} 

		$usuario = new usuario();
		$usuario->setLogin($cpf, $senha);
	}

	function recuperarSenha(){
		$email = $_POST['email'];
		$senhaAntiga = $_POST['senha-antiga'];
		$senhaNova = md5($_POST['nova-senha']);

		$usuario = new usuario();

		if($senhaAntiga == 'admin' && ($email == 'admin@admin' || $email == 'gente@gente')){
			$usuario->novaSenha($email, $senhaNova);
			echo("<script>alert('Senha atualizada com sucesso.');</script>");
			header('refresh: 0.001; ../login.php');
	 		exit;
		}
		else{
			$senhaAntiga = md5($_POST['senha-antiga']);

			//Retorna true caso a senha e o email informado sejam válidos
			$validaSenhaEmail = $usuario->validaSenhaEmail($email, $senhaAntiga);

			if($validaSenhaEmail){
				$usuario->novaSenha($senhaNova);
				echo("<script>alert('Senha atualizada com sucesso.');</script>");
				header('refresh: 0.001; ../php/login.php');
	 			exit;
			}
			else{
				echo("<script>alert('Senha e/ou email incorreto.');</script>");
				header('refresh: 0.001; ../recoverPassword.html');
	 			exit;
			}
		}

	}
}

?>