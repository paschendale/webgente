// Definindo camadas overlay

var overlayHost = 'https://geoserver.genteufv.com.br/geoserver/ows?';

var vetorOverlay = [
	parametros_tra_vias_deslocamento = {
		nome: 'Rodovias Municipais',
		grupo: 'Cadastro de Vias Rurais',
		tipo: 'camada',
		maxZoom: 25,
        layers: 'bomdespacho:TRA_Via_Deslocamento',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	parametros_tra_caminho_carrocavel = {
		nome: 'Rodovias Privadas',
		grupo: 'Cadastro de Vias Rurais',
		tipo: 'camada',
		maxZoom: 25,
        layers: 'bomdespacho:TRA_Caminho_Carrocavel',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	parametros_cbge_quadras = {
		nome: 'Quadras CTM',
		grupo: 'Cadastro Urbano',
		tipo: 'camada',
		maxZoom: 25,
        layers: 'bomdespacho:CBGE_Quadras',
        format: 'image/png',
        transparent: true,
        tiled: true
	}
];
