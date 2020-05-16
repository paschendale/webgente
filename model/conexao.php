<?php

class conexao{
	//private
	private $conexao;

	//public
	public function abrindo_conexao(){
		$host = 'localhost';
		$user = 'root';
		$pass = '';
		$bd = 'webgente';

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