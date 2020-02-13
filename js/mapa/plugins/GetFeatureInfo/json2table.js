function objects2div (objeto){

	div_init = '<div>';

	div_final = '</div>';

	div_data = '';

	for (var i = 0; i = objeto.length; i++){

		div_content[i] = div_init+properties2table(objeto.features[i].properties)+div_final;

		div_data = div_data + div_content[i];

	}

	return div_data

};

function properties2table (objeto){

	tb_init = '<table><tr><th>"Atributo"</th><th>"Valor"</th></tr>';

	tb_data_acum = '';

	for (var i = 0; i = objeto.length; i++) {

		tb_data[i] = '<tr><td>'+objeto[i].constructor.name+'</td><td>'+objeto[i]+'</td></tr>';

		tb_data_acum = tb_data_acum+tb_data[i];
	
	}

	tb_final = '</table>';

	css_table = '<style>table {width:300px;text-align:left;vertical-align:center;padding: 15px;border-bottom: 1px solid #ddd;font-family: Tahoma, Geneva, sans-serif;}td,th {border-bottom: 1px solid #ddd;padding: 7px;}tr:hover {background-color: #f5f5f5;}th {background-color: #f5f5f5;}</style>'


	tb = css_table+tb_init+tb_data_acum+tb_final;

	return tb;
};

