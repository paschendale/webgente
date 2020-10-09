<?php

class conexao{
	//private
	private $conexao;

	//public
	public function abrindo_conexao(){
		//================================================================================
		//Parâmetros de conexão com o banco MySQL secundário
		$host = 'localhost'; //host de conexão
		$user = 'webgis_bd'; //usuário
		$pass = '#.sxJZ]>8G'; //senha
		//$user = 'root';
		//$pass = '123456';
		$bd = 'webgente_bd'; //nome do banco
		//================================================================================
		$this->conexao = mysqli_connect($host, $user, $pass, $bd) or die(mysqli_connect_error());
	}
	public function getConexao(){
		return $this->conexao;
	}
	public function fechando_conexao(){
		mysqli_close($this->conexao);
	}
}

?>