//Gera campos pesquisaveis de acordo com os atributos definidos no vetor prop_query
//e envia  camada a ser exibida
function opcoes(){
	var n = document.getElementById('barraPesquisa').value;
	var opcao = document.getElementById("conteudo");
	var camposPesquisaveis = ""; 
	for (campos of vetorOverlay[n].prop_query){
		var nome_alternativo= vetorOverlay[n].prop_alternative[vetorOverlay[n].prop_query.indexOf(campos)];
		camposPesquisaveis+=` <input type="text" id="`+campos+`" name="`+ campos +`" placeholder="`+nome_alternativo+`">`
	}

	opcao.innerHTML = `
		<style> 
			input[type=text] {
			  margin: 2px 2px 2px 2px;
			  box-sizing: border-box;
			  border-radius: 4px;
			  border-style: solid;
			  box-shadow: inset 0px 0px 0px 0px red;
			  border: solid lightgrey 2px;
			}
			input[type=text]:hover {
			  background: #e6e6e6;
			}
		</style>
		<form action="" method="POST">`
	    	+camposPesquisaveis+
	    	`<input type="button" id="botao-ok" value="Ok" onclick="consultaFiltro(vetorOverlay[`+n+`])"> 
	    </form>`
}