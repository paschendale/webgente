<?php

/*

DROP TABLE camadas;
CREATE TABLE camadas (
	id integer PRIMARY KEY,
   	nome text NOT NULL,
	layers text NOT NULL,
	grupo text NOT NULL,
	prop_query_alpha text,
	prop_query_numeric text,
	prop_alternative text,
	restricted text,
	maxZoom integer,
	format text,
	transparent boolean,
	tiled boolean
);

INSERT INTO camadas(nome,layers,grupo,prop_query_numeric,prop_query_alpha,prop_alternative,restricted) VALUES
('Imagens 360°','bomdespacho:MUB_Panoramas','Imagens 360°','','','',''),
('Geocodificacao','bomdespacho:CAD_Geocodificacao','Cadastro Urbano','','inscricao','Inscrição Cadastral','')

INSERT INTO camadas(nome,layers,grupo,prop_query_numeric,prop_query_alpha,restricted) VALUES
('Edificações','bomdespacho:CBGE_Edificacoes_BCI','Cadastro Urbano',"['inscricao', 'numero_porta']","['id']",
"['Inscrição', 'Número da Porta', 'Identificação']","['complemento', 'ocupacao', 'utilizacao', 'del_frontal', 'sit_quadra', 'testada', 'tipo', 'alinhamento', 'situacao_edif', 'situacao_unid', 'estrutura', 'cobertura', 'parede', 'forro', 'revestimento', 'area_unidade_calculada', 'area_unidade_bci', 'cod_logradouro', 'cod_secao' , 'area_unidade', 'total_unidade', 'area_construida_total']");

*/

$db_camadas = new SQLite3('./camadas.db');

$sql = "SELECT nome, layers, grupo, prop_query_alpha AS alpha, prop_query_numeric AS numeric, prop_alternative, restricted, maxZoom, format, transparent, tiled FROM camadas;";

$camadas = $db_camadas->query($sql);

while($row = $camadas->fetchArray(SQLITE3_ASSOC)){ 

    $camadas_json[] = $row;
};

echo "var conexao_camadas =" . json_encode($camadas_json);
?>

