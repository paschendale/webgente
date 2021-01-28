<?php

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
		$conexao = new PDO('sqlite:../../conf/webgente_db.db') or die("Erro ao abrir a base");

		$sql = "SELECT cpf FROM usuario WHERE cpf = '$cpf'";

		$resposta = $conexao->query($sql);
 		$resultado = $resposta->fetch();

		if($resultado['cpf'] == " " || $resultado['cpf'] == "" || $resultado == "NULL"){
			return false;
		}
		else{
			return true;
		}
	}

	function setUsuario(){
		$conexao = new PDO('sqlite:../../conf/webgente_db.db') or die("Erro ao abrir a base");

		$sql = "INSERT INTO usuario (nome, cpf, dataNascimento, sexo, faixaEtaria, celular, email, senha, tipo) VALUES ('$this->nome', '$this->cpf', '$this->dataNascimento', '$this->sexo', '$this->faixaEtaria', '$this->celular', '$this->email', '$this->senha', '$this->tipo')";

		$conexao->exec($sql);
		$conexao = null;

		echo('<script>alert("Cadastro com sucesso.");</script>');
		header('refresh: 0.001; ../admin.php');
 		exit;
	}

	function setLogin($cpf, $senha){ 
		$conexao = new PDO('sqlite:../../conf/webgente_db.db') or die("Erro ao abrir a base");

		$sql = "SELECT senha, nome, tipo FROM usuario WHERE cpf = '$cpf'";

 		$resposta = $conexao->query($sql);
 		$resultado = $resposta->fetch();

 		if($resultado['senha'] == $senha && $resultado['tipo'] == 'prefeitura'){
 			//Cria uma sessão de usuário caso ela não exista ainda
 			session_start();
 			//Inicia o usuário no sistema
 			$_SESSION['cpf'] = $cpf;
 			$_SESSION['nome'] = $resultado['nome'];

 			header('refresh: 0.001; ../../index-logged.php');
 			exit;
 		}
 		else if(($resultado['senha'] == 'admin' && $senha == 'admin') && $resultado['tipo'] == 'root'){
 			header('refresh: 0.001; ../../recoverPassword.html');
 			exit;
 		}
 		else if($resultado['senha'] == $senha && $resultado['tipo'] == 'root'){
 			//Cria uma sessão de usuário caso ela não exista ainda
 			session_start();
 			//Inicia o usuário no sistema
 			$_SESSION['cpf'] = $cpf;
 			$_SESSION['nome'] = $resultado['nome'];
 			header('refresh: 0.001; ../admin.php');
 			exit;
 		}
 		else{
 			echo('<script>alert("Usuario e/ou senha inválida. Tente novamente.");</script>');
 			header('refresh: 0.001; ../login.php');
 			exit;
 		}

		$conexao = null;
	}

	function setLoginGmail($email){ 
		$conexao = new PDO('sqlite:../../conf/webgente_db.db') or die("Erro ao abrir a base");

		$sql = "SELECT nome, tipo, senha, cpf FROM usuario WHERE email = '$email'";

		$resposta = $conexao->query($sql);
 		$resultado = $resposta->fetch();

 		if($resultado['tipo'] == 'prefeitura'){
 			//Cria uma sessão de usuário caso ela não exista ainda
 			session_start();
 			//Inicia o usuário no sistema
 			$_SESSION['email'] = $email;
 			$_SESSION['nome'] = $resultado['nome'];
 			$_SESSION['cpf'] = $resultado['cpf'];

 			echo "prefeitura";
 		}
 		else if($resultado['tipo'] == 'administrador'){
 			//Cria uma sessão de usuário caso ela não exista ainda
 			session_start();
 			//Inicia o usuário no sistema
 			$_SESSION['email'] = $email;
 			$_SESSION['nome'] = $resultado['nome'];
 			$_SESSION['cpf'] = $resultado['cpf'];

 			echo "administrador";
 		}

		$conexao = null;
	}

	function validaSenhaEmail($email, $senha){
		$conexao = new PDO('sqlite:../../conf/webgente_db.db') or die("Erro ao abrir a base");

		$sql = "SELECT nome FROM usuario WHERE email = '$email' AND senha = '$senha'";
		
		$resposta = $conexao->query($sql);
 		$resultado = $resposta->fetch();
		
		$con->fechando_conexao();

		if($resultado['nome']){
			return true;
		}
		else{
			return false;
		}
	}

	function novaSenha($email, $senha){
		$conexao = new PDO('sqlite:../../conf/webgente_db.db') or die("Erro ao abrir a base");

		$sql = "UPDATE usuario SET senha = '$senha' WHERE email = '$email'";
		
		$conexao->query($sql);

		$conexao = null;
	}

}

class layers{
	//private
	private $nome;
	private $layers;
	private $grupo;
	private $prop_query_alpha;
	private $prop_query_numeric;
	private $prop_alternative;
	private $restricted;
	private $maxZoom;
	private $format;
	private $transparent;
	private $tiled;

	//public
	function constructo($nome, $layers, $grupo, $prop_query_alpha, $prop_query_numeric, $prop_alternative, $restricted, $maxZoom, $format, $transparent, $tiled){
		$this->nome = $nome;
		$this->layers = $layers;
		$this->grupo = $grupo;
		$this->prop_query_alpha = $prop_query_alpha;
		$this->prop_query_numeric = $prop_query_numeric;
		$this->prop_alternative = $prop_alternative;
		$this->restricted = $restricted;
		$this->maxZoom = $maxZoom;
		$this->format = $format;
		$this->transparent = $transparent;
		$this->tiled = $tiled;
	}

	function getLayers(){
		$conexao = new PDO('sqlite:../../conf/camadas.db') or die("Erro ao abrir a base");

		$sql = "SELECT * FROM camadas";

		$resposta = $conexao->query($sql);

		echo '<table border = "1"><tr><td>Nome</td><td>Layers</td><td>Prop_query_alpha</td><td>Prop_query_numeric</td><td>Prop_alternative</td><td>Restricted</td><td>maxZoom</td><td>Format</td><td>Transparent</td><td>Tiled</td></tr/>';
 		
 		while($row = $resposta->fetch()){
 			echo "<tr>";
 			echo "<td>";
 				echo '<input type="checkbox" id='.$row["nome"].' name='.$row["nome"].' value='.$row["nome"].' onclick="selecionarCamada(this.value)">';
 			echo "</td>";
 			echo "<td>";
 				echo $row['nome']; 
 			echo "</td>";
 			echo "<td>";
 				echo $row['layers'];
 			echo "</td>";
 			echo "<td>";
 				echo $row['grupo'];
 			echo "</td>";
 			echo "<td>";
 				echo $row['prop_query_numeric'];
 			echo "</td>";
 			echo "<td>";
 				echo $row['prop_alternative'];
 			echo "</td>";
 			echo "<td>";
 				echo $row['restricted'];
 			echo "</td>";
 			echo "<td>";
 				echo $row['maxZoom'];
 			echo "</td>";
 			echo "<td>";
 				echo $row['format'];
 			echo "</td>";
 			echo "<td>";
 				echo $row['transparent'];
 			echo "</td>";
 			echo "<td>";
 				echo $row['tiled'];
 			echo "</td>";
 			echo "</tr>";
 		}
 		echo '</table>';
	}
}

?>