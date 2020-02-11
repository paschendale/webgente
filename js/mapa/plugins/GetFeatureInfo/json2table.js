function json2table (objeto){

	tb_init = '<table><tr><th>"Atributo"</th><th>"Valor"</th></tr>';

	tb_data_acum = '';

	for (var i = 0; i = objeto.length; i++) {

		tb_data[i] = '<tr><td>'+objeto[i].constructor.name+'</td><td>'+objeto[i]+'</td></tr>';

		tb_data_acum = tb_data_acum+tb_data[i];
	
	}

	tb_final = '</table>';

	tb = tb_init+tb_data_acum+tb_final;

	return tb;
}

function popup_html_generator (objeto){

	if (typeof objeto.features[0].properties.path_360 != 'undefined'){
		
		sitebase = 'https://www.genteufv.com.br/psv/index.html?'; 

		fullscreen = '<a href="'+sitebase+objeto.features[0].properties.path_360+'" target="_blank">Abrir visualizador 360° em tela cheia</a>';

		viewer_360 = '<div> <iframe src="'+sitebase+objeto.features[0].properties.path_360+'" style="overflow:auto;width:300px;height:200px;border:none"></iframe><p align="center">'+fullscreen+'</p></div>';
 
	} else if (typeof objeto.features[0].properties.path_dwg) {

	} else if (typeof objeto.features[0].properties.path_pdf) {
		
	} else if (typeof objeto.features[0].properties.path_) {
		
	}

	if (opt_gfi == 2){

            css_table = '<style>table {width:300px;text-align:left;vertical-align:center;padding: 15px;border-bottom: 1px solid #ddd;font-family: Tahoma, Geneva, sans-serif;}td,th {border-bottom: 1px solid #ddd;padding: 7px;}tr:hover {background-color: #f5f5f5;}th {background-color: #f5f5f5;}</style>'
            this._map.openPopup(css_table+json2table(obj.features[0].properties), latlng);

        } else if (typeof obj.features[0].properties.path_360 != 'undefined'){

            

            

            
            
            this._map.openPopup(html, latlng, optionsPopup);

        } else {

            this._map.openPopup('Clique em um ponto da camada de imagens 360 ou desative as camadas que o sobrepoem', latlng)

        };

}

path_dwg
path_pdf
path_img
path_360