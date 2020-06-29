//Gera campos pesquisaveis de acordo com os atributos definidos no vetor prop_query
//e envia  camada a ser exibida
function opcoes(n){
	var opcao = document.getElementById("conteudo");
	var camposPesquisaveis = ""; 
	for (campos of vetorOverlay[n].prop_query){
		camposPesquisaveis+=` <input type="text" id="`+campos+`" name="`+campos+`" placeholder="`+campos+`">`
	}
	opcao.innerHTML = `
		<form action="" method="POST">`
	    	+camposPesquisaveis+
	    	` <input type="button" value="Ok" onclick="consultaFiltro(vetorOverlay[`+n+`])"> 
	    </form>`
}