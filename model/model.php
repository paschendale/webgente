<?php

include 'conexao.php';

class usuario{
	//private
	private $nome;
	private $cpf;
	private $dataNascimento;
	private $sexo;
	private $faixaEtaria;
	private $celular;
	private $email;
	private $senha;
	private $tipo;

	//public
	function constructor($nome, $cpf, $dataNascimento, $sexo, $faixaEtaria, $celular, $email, $senha, $tipo){
		$this->nome = $nome;
		$this->cpf = $cpf;
		$this->dataNascimento = $dataNascimento;
		$this->sexo = $sexo;
		$this->faixaEtaria = $faixaEtaria;
		$this->celular = $celular;
		$this->email = $email;
		$this->senha = $senha;
		$this->tipo = $tipo;
	}

	//Set's

	//Get's

	function verificaUsuario($cpf){
		$con = new conexao();
		$con->abrindo_conexao();

		$sql = "SELECT cpf FROM usuario WHERE cpf = '$cpf'";
		$resposta = mysqli_query($con->getConexao(), $sql);
		$resultado = mysqli_fetch_assoc($resposta);

		if($resultado['cpf'] == " " || $resultado['cpf'] == "" || $resultado == "NULL"){
			return false;
		}
		else{
			return true;
		}
	}

	function setUsuario(){
		$con = new conexao();
		$con->abrindo_conexao();

		if($con){
			$sql = "INSERT INTO usuario (nome, email, senha, faixaEtaria, tipo, dataNascimento, sexo, celular, cpf) VALUES ('$this->nome', '$this->email', '$this->senha', '$this->faixaEtaria', '$this->tipo', '$this->dataNascimento', '$this->sexo', '$this->celular', '$this->cpf')";

			$resposta = mysqli_query($con->getConexao(), $sql);
			$con->fechando_conexao();

			echo('<script>alert("Cadastro com sucesso. Realize o login.");</script>');
			header('refresh: 0.001; ../view/cadastro-usuario.html');
		}
		else{
			echo "Conexão com o banco não estabelecida";
		}

		$con->fechando_conexao();
	}

	function setLogin($cpf, $senha){ 
		$con = new conexao();
		$con->abrindo_conexao();

		$sql = "SELECT senha, nome FROM usuario WHERE cpf = '$cpf'";

		$resposta = mysqli_query($con->getConexao(), $sql);
 		$resultado = mysqli_fetch_assoc($resposta);

 		if($resultado['senha'] == $senha){
 			//Cria uma sessão de usuário caso ela não exista ainda
 			session_start();
 			//Inicia o usuário no sistema
 			$_SESSION['cpf'] = $cpf;
 			$_SESSION['nome'] = $resultado['nome'];

 			header('refresh: 0.001; ../view/index-cidadao.php');
 			exit;
 		}
 		else{
 			echo('<script>alert("Usuario e/ou senha inválida. Tente novamente.");</script>');
 			header('refresh: 0.001; ../view/index-anonimo.html');
 			exit;
 		}

		$con->fechando_conexao();
	}

	function validaSenhaEmail($email, $senha){
		$con = new conexao();
		$con->abrindo_conexao();

		$sql = "SELECT nome FROM usuario WHERE email = '$email' AND senha = '$senha'";
		$resposta = mysqli_query($con->getConexao(), $sql);
		$resultado = mysqli_fetch_assoc($resposta);
		
		$con->fechando_conexao();

		if($resultado['nome']){
			return true;
		}
		else{
			return false;
		}
	}

	function novaSenha($senha){
		$con = new conexao();
		$con->abrindo_conexao();

		$sql = "UPDATE usuario SET senha = '$senha'";
		$resposta = mysqli_query($con->getConexao(), $sql);

		$con->fechando_conexao();
	}
}

?>