function objects2div (objeto){

	div_init = '<div';

	div_final = '</div>';

	div_data = '';

	i = 0;

	css = '<style>a {font-weight: bold; color: inherit;}</style>';

    for (var property in objeto) {
    if (!objeto.hasOwnProperty(property)) continue;

    	div_id = 'tabela'+i;

		title = (objeto[property].id).split('.')

		div_content = '<div style="width:280px;"><div><div><div><p><a style="font-weight: bold; color: inherit;" data-toggle="collapse" href="#'+div_id+'">'+title[0]+'</a></p></div><div id="'+div_id+'" class="panel-collapse collapse"><div class="panel-body" style="height: 180px; overflow-y: auto;">'+properties2table(objeto[property].properties)+'</div></div></div></div></div>'

		div_data = div_data + div_content + '<p></p>';

		i++;

	}

	div_data = div_data + css;

	return div_data;

};

function properties2table (objeto){

    tb_init = '<table><tr><th>Atributo</th><th>Valor</th></tr>';

    tb_data_acum = '';

    for (var property in objeto) {
    if (!objeto.hasOwnProperty(property)) continue;

    	switch (property) {
    		case 'path_360': // Implementar no SIG!

    			tb_data = '<a href="'+sitebase+obj.features[0].properties.Caminho+'" target="_blank">Abrir visualização 360° do imóvel</a>';

    		case 'path_files': // Implementar!

    			tb_data = '<a href="http://138.94.148.143:8225/share/page/user/geoufv/dashboard" target="_blank">Abrir arquivos do imóvel</a>';

    		default:

	    		tb_data = '<tr><td>'+property+'</td><td>'+objeto[property]+'</td></tr>';

    	}   

    	tb_data_acum = tb_data_acum+tb_data;     
        
    };

    css_table = '<style>table {width:260px;text-align:left;vertical-align:center;padding: 15px;border-bottom: 1px solid #ddd;font-family: Tahoma, Geneva, sans-serif;}td,th {border-bottom: 1px solid #ddd;padding: 7px;}tr:hover {background-color: #f5f5f5;}th {background-color: #f5f5f5;}</style>'

    tb_final = '</table>';

    tb = css_table+tb_init+tb_data_acum+tb_final;

    return tb;

};


