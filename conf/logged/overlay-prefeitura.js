// Definindo camadas overlay

/*
maxZoom: 25,
format: 'image/png',
transparent: true,
tiled: true

*/

/*
	Ordem de preenchimento da classe overlay:
   new overlay (
     	nome, 
		layers, 
		grupo,
		prop_query alpha,
		prop_query numeric,
		prop_alternative,
		restricted, 
		maxZoom, 
		format, 
		transparent,
		tiled )
*/

var overlayHost = 'http://localhost:8080/geoserver/ows?';

var vetorOverlay = criaVetorOverlayUnrestricted(conexao_camadas)

/* Para inserir camadas no WebGENTE deve-se realizar a inserção dos dados via SQL, no arquivo camadas.db (SQLite)

Um exemplo de inserção seria:

INSERT INTO camadas(nome,layers,grupo,prop_query_alpha,prop_query_numeric,prop_alternative,restricted) VALUES
('Edificacoes','bomdespacho:CBGE_Edificacoes_BCI','Cadastro Urbano','inscricao,proprietario','area','Inscrição,Proprietário,Área','Proprietário')

No exemplo se insere a camada de edificações sendo que

nome : nome de exibição no controle de camadas
layers : nome de chamada da camada no GeoServer
grupo : grupo em que a camada se localizará
prop_query_alpha : campos pesquisáveis de valor alfanumérico
prop_query_numeric : campos pesquisáveis de valor numérico
prop_alternative : apelidos para os campos pesquisáveis, devem ser definido na ordem alfanuméricos e depois numéricos
restricted : campos a serem restritos no modo anônimo

A inserção de mais de um campo deve ser sempre realizada sem aspas e separando os campos por vírgula.

Dica: utilizar o gerenciador de base de dados do SQLite para facilitar o trabalho: https://download.sqlitebrowser.org/SQLiteDatabaseBrowserPortable_3.12.0_English.paf.exe

*/

