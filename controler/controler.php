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
		$tipo = "cidadao";

		$usuario = new usuario();

		//Retorna true se o usuário já esta cadastrado no banco e false caso não esteja
		$valida = $usuario->verificaUsuario($cpf);

		if($valida == false){	
			$usuario->constructor($nome, $cpf, $dataNascimento, $sexo, $faixaEtaria, $celular, $email, $senha, $tipo);
			$usuario->setUsuario();
		}
		else{
			echo("<script>alert('CPF já cadastrado no sistema.');</script>");
			header('refresh: 0.001; ../cadastro-usuario.html');
			exit;
		}
	}

	function cadastroPrefeitura(){
		$nome = $_POST['nome'];
		$email = $_POST['email'];
		$senha = md5($_POST['senha']);
		$tipo = "prefeitura";
		$cpf = $_POST['cpf'];

		$usuario = new usuario();
		$usuario->constructor($nome, $cpf, "", "", "", "", $email, $senha, $tipo);
		$usuario->setUsuario();
	}

	function login(){
		$cpf = $_POST['usuario'];
		$senha = md5($_POST['senha']);

		$usuario = new usuario();
		$usuario->setLogin($cpf, $senha);
	}

	function recuperarSenha(){
		$email = $_POST['email'];
		$senhaAntiga = md5($_POST['senha-antiga']);
		$senhaNova = md5($_POST['nova-senha']);

		$usuario = new usuario();

		//Retorna true caso a senha e o email informado sejam válidos
		$validaSenhaEmail = $usuario->validaSenhaEmail($email, $senhaAntiga);

		if($validaSenhaEmail){
			$usuario->novaSenha($senhaNova);
			echo("<script>alert('Senha atualizada com sucesso.');</script>");
			header('refresh: 0.001; ../index-anonimo.html');
 			exit;
		}
		else{
			echo("<script>alert('Senha e/ou email incorreto.');</script>");
			header('refresh: 0.001; ../recuperar-senha.html');
 			exit;

		}

	}
}

?>