function opcoesCEP(){
	var opcao = document.getElementById("conteudo");
	opcao.innerHTML = `
		<!--Colocar AJAX aqui-->
		<form action="" method="POST">
	    	<input type="text" id="cep" name="cep" placeholder="CEP">
	    	<input type="submit" value="Ok">
	    </form>
	`
}

function opcoesIPTU(){
	var opcao = document.getElementById("conteudo");
	opcao.innerHTML = `
		<!--Colocar AJAX aqui-->
		<form action="" method="POST">
	    	<input type="text" id="iptu" name="iptu" placeholder="Índice de IPTU">
	    	<input type="submit" value="Ok">
	    </form>
	`
}

function opcoesLOTE(){
	var opcao = document.getElementById("conteudo");
	opcao.innerHTML = `
		<!--Colocar AJAX aqui-->
		<form action="" method="POST">
	    	<input type="text" id="zonaFiscal" name="zonaFiscal" placeholder="Nº Zona Fiscal de IPTU">
	    	<input type="text" id="quadra" name="quadra" placeholder="Nº Quadra">
	    	<br><br>
	    	<input type="text" id="lote" name="lote" placeholder="Nº Lote">
	    	<input type="submit" value="Ok">
	    </form>
	`
}

function opcoesEndereco(){
	var opcao = document.getElementById("conteudo");
	opcao.innerHTML = `
		<!--Colocar AJAX aqui-->
		<form action="" method="POST">
	    	<select style="height: 24px;">
	    		<option value="todos">Todos</option>
	    		<option value="acesso">Acesso</option>
	    		<option value="rua">Rua</option>
	    	</select>
	    	<input type="text" id="logradouro" name="logradouro" placeholder="Logradouro">
	    	<br><br>
	    	<input type="text" id="numero" name="numeor" placeholder="Nº">
	    	<input type="submit" value="Ok">
	    </form>
	`
}

function opcoesBairro(){
	var opcao = document.getElementById("conteudo");
	opcao.innerHTML = `
		<!--Colocar AJAX aqui-->
		<form action="" method="POST">
	    	<select style="height: 24px;">
	    		<option value="nada selecionado">Nada selecionado</option>
	    		<option value="teste 01">Teste 01</option>
	    		<option value="teste 02">Teste 02</option>
	    	</select>
	    	<input type="submit" value="Ok">
	    </form>
	`
}

function opcoesFiltro(){
	var opcao = document.getElementById("conteudo");
	opcao.innerHTML = `
		<!--Colocar AJAX aqui-->
		<form action="" method="POST">
	    	<input type="text" id="camada" name="camada" placeholder="Camada">
	    	<input type="text" id="atributo" name="atributo" placeholder="Atributo">
	    	<br><br>
	    	<select style="height: 24px;">
	    		<option value="nada selecionado">Nada selecionado</option>
	    		<option value="teste 01">Teste 01</option>
	    		<option value="teste 02">Teste 02</option>
	    	</select>
	    	<input type="text" id="valor" name="valor" placeholder="Valor">
	    	<input type="submit" value="Ok">
	    </form>
	`
}