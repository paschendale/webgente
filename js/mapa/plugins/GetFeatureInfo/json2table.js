function objects2div (objeto){

	div_init = '<div';

	div_final = '</div>';

	div_data = '';

	i = 0;

	css = '<style>a {font-weight: bold; color: inherit;}</style>';

    for (var property in objeto) {
    if (!objeto.hasOwnProperty(property)) continue;

    	div_id = 'tabela'+i;

		title = (objeto[property].id).split('.');

        id = objeto[property].properties.id;

		div_content = '<div style="width:270px;"><p><a style="font-weight: bold; color: inherit;" data-toggle="collapse" href="#'+div_id+'">'+title[0]+': '+id+'</a></p></div><div id="'+div_id+'" class="panel-collapse collapse"><div class="panel-body" style="height: 120px; overflow-y: auto; overflow-x: hidden;">'+properties2table(objeto[property].properties)+'</div></div>'

		div_data = div_data + div_content + '<p></p>';

		i++;

	}

	div_data = '<div>' + div_data + css + '</div>';

	return div_data;

};

function properties2table (objeto){
    tb_init = '<table><tr><th>Atributo</th><th>Valor</th></tr>';

    tb_data_acum = '';

    for (var property in objeto) {
    if (!objeto.hasOwnProperty(property)) continue;

    if (property == 'path_folder') {
        tb_data = '<tr><td>Arquivos associados</td><td><a href="'+ objeto[property]+'" target="_blank"><img alt="Acessar o sistema Alfresco" src="img/folder.png"></a></td></tr>';
    } else {
        tb_data = '<tr><td>'+property+'</td><td>'+objeto[property]+'</td></tr>';
    }

    tb_data_acum = tb_data_acum+tb_data;     
        
    };

    css_table = '<style>table {width:250px;text-align:left;vertical-align:center;padding: 15px;border-bottom: 1px solid #ddd;font-family: Tahoma, Geneva, sans-serif;}td,th {border-bottom: 1px solid #ddd;padding: 2px;}tr:hover {background-color: #f5f5f5;}th {background-color: #f5f5f5;}</style>'

    tb_final = '</table>';

    tb = css_table+tb_init+tb_data_acum+tb_final;

    return tb;
};


