// Definindo camadas overlay

var overlayHost = 'https://geoserver.genteufv.com.br/geoserver/ows?';

var vetorOverlay = [
	parametros_tra_vias_deslocamento = {
		nome: 'Rodovias Municipais',
		grupo: 'Malha Viária',
		maxZoom: 25,
        layers: 'bomdespacho:TRA_Via_Deslocamento',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	parametros_tra_caminho_carrocavel = {
		nome: 'Rodovias Privadas',
		grupo: 'Malha Viária',
		maxZoom: 25,
        layers: 'bomdespacho:TRA_Caminho_Carrocavel',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	parametros_cbge_quadras = {
		nome: 'Quadras',
		grupo: 'Cadastro Urbano',
		maxZoom: 25,
        layers: 'bomdespacho:CBGE_Quadras',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	parametros_tra_trecho_arruamento = {
		nome: 'Eixos de Vias',
		grupo: 'Cadastro Urbano',
		maxZoom: 25,
        layers: 'bomdespacho:CBGE_Trecho_Arruamento',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	parametros_tra_trecho_rodoviario = {
		nome: 'Trecho Rodoviario',
		grupo: 'Malha Viária',
		maxZoom: 25,
        layers: 'bomdespacho:TRA_Trecho_Rodoviario',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	parametros_hid_massa_dagua = {
		nome: 'Corpos D`Água',
		grupo: 'Meio Ambiente',
		maxZoom: 25,
        layers: 'bomdespacho:HID_Massa_Dagua',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	parametros_hid_trecho_drenagem = {
		nome: 'Hidrografia',
		grupo: 'Meio Ambiente',
		maxZoom: 25,
        layers: 'bomdespacho:HID_Trecho_Drenagem',
        format: 'image/png',
        transparent: true,
        tiled: true
	}
];
