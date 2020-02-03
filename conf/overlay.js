// Definindo camadas overlay
var vetorOverlay = [
	parametros_tra_vias_deslocamento = {
		nome: 'Rodovias Municipais',
		grupo: 'Cadastro de Vias Rurais',
		host: 'https://geoserver.genteufv.com.br/geoserver/ows?',
		maxZoom: 25,
        layers: 'bomdespacho:TRA_Via_Deslocamento',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	parametros_tra_caminho_carrocavel = {
		nome: 'Rodovias Privadas',
		grupo: 'Cadastro de Vias Rurais',
		host: 'https://geoserver.genteufv.com.br/geoserver/ows?',
		maxZoom: 25,
        layers: 'bomdespacho:TRA_Caminho_Carrocavel',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	parametros_cbge_quadras = {
		nome: 'Quadras CTM',
		grupo: 'Cadastro Urbano',
		host: 'https://geoserver.genteufv.com.br/geoserver/ows?',
		maxZoom: 25,
        layers: 'bomdespacho:CBGE_Quadras',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	parametros_pontos_levantamento_360 = {
		nome: 'Imagens 360°',
		grupo: 'Cadastro Urbano',
		host: 'https://geoserver.genteufv.com.br/geoserver/ows?',
		maxZoom: 25,
        layers: 'bomdespacho:pontos_levantamento_360',
        format: 'image/png',
        transparent: true,
        tiled: true
	}
];
