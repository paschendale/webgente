// Definindo camadas overlay

var overlayHost = 'https://geoserver.genteufv.com.br/geoserver/ows?';

var vetorOverlay = [
	parametros_logradouros = {
		nome: 'Seções de Logradouro',
		grupo: 'Malha Viária',
		maxZoom: 25,
        layers: 'itabirito:Seção de Logradouro',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	parametros_edificacoes = {
		nome: 'Edificações',
		grupo: 'Cadastro Imobiliário',
		maxZoom: 25,
        layers: 'itabirito:Edificacao',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	parametros_lote = {
		nome: 'Lotes',
		grupo: 'Cadastro Imobiliário',
		maxZoom: 25,
        layers: 'itabirito:Lote',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	parametros_meio_fio = {
		nome: 'Meio Fio',
		grupo: 'Infraestrutura Urbana',
		maxZoom: 25,
        layers: 'itabirito:Meio Fio',
        format: 'image/png',
        transparent: true,
        tiled: true
	}
];
