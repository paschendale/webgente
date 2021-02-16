<?php

$db_camadas = new SQLite3('./webgente.db');

$sql = "SELECT nome, layers, grupo, prop_query_alpha AS alpha, prop_query_numeric AS numeric, prop_alternative, restricted, maxZoom, format, transparent, tiled FROM camadas;";

$camadas = $db_camadas->query($sql);

while($row = $camadas->fetchArray(SQLITE3_ASSOC)){ 

    $camadas_json[] = $row;
};

echo "var conexao_camadas =" . json_encode($camadas_json);
?>

