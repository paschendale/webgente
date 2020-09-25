var overlayHost = 'https://geoserver.genteufv.com.br/geoserver/ows?';

// Definindo camadas overlay
var vetorOverlay = [
	parametros_lotes = new overlay(
		'Lotes CTM',
		'jacobina:Lotes',
		'Cadastro Urbano',
		[],
		['n_setor','n_quadra','n_lote'],
		['Setor','Quadra','Lote'],
		[]
		)
	,

	/*
	parametros_meio_fio = new overlay(
		'Meio Fio',
		'jacobina:Meio_Fio',
		'Infraestrutura Urbana',
		[],
		[],
		[]
		)
	,*/

	parametros_quadras = new overlay(
		'Quadras CTM',
		'jacobina:Quadras',
		'Cadastro Urbano',
		[],
		[],
		[],
		[]
		)
	,

	parametros_inscricoes = new overlay(
		'Inscricoes de Lote',
		'jacobina:inscricoes_lotes',
		'Cadastro Urbano',
		[],
		[],
		[],
		[]
		)
	/*,

	quadras = {
		nome: 'Quadras CTM',
		grupo: 'Cadastro Urbano',
		host: 'https://geoserver.genteufv.com.br/geoserver/ows?',
		maxZoom: 25,
        layers: 'jacobina:Quadras',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	eixo_via = {
		nome: 'Eixos de Via',
		grupo: 'Cadastro Urbano',
		host: 'https://geoserver.genteufv.com.br/geoserver/ows?',
		maxZoom: 25,
        layers: 'jacobina:Eixo_Via',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	arvore = {
		nome: 'Arvores',
		grupo: 'Infraestrutura Urbana',
		host: 'https://geoserver.genteufv.com.br/geoserver/ows?',
		maxZoom: 25,
        layers: 'jacobina:arvore',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	bl = {
		nome: 'Bocas de Lobo e Bueiros',
		grupo: 'Infraestrutura Urbana',
		host: 'https://geoserver.genteufv.com.br/geoserver/ows?',
		maxZoom: 25,
        layers: 'jacobina:bl',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	lixeira = {
		nome: 'Lixeiras',
		grupo: 'Infraestrutura Urbana',
		host: 'https://geoserver.genteufv.com.br/geoserver/ows?',
		maxZoom: 25,
        layers: 'jacobina:lixeira',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	placa = {
		nome: 'Placas',
		grupo: 'Infraestrutura Urbana',
		host: 'https://geoserver.genteufv.com.br/geoserver/ows?',
		maxZoom: 25,
        layers: 'jacobina:placa',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	pontobus = {
		nome: 'Pontos de Onibus',
		grupo: 'Infraestrutura Urbana',
		host: 'https://geoserver.genteufv.com.br/geoserver/ows?',
		maxZoom: 25,
        layers: 'jacobina:pontobus',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	poste = {
		nome: 'Postes',
		grupo: 'Infraestrutura Urbana',
		host: 'https://geoserver.genteufv.com.br/geoserver/ows?',
		maxZoom: 25,
        layers: 'jacobina:pontobus',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	pv = {
		nome: 'Poços de Visitação',
		grupo: 'Infraestrutura Urbana',
		host: 'https://geoserver.genteufv.com.br/geoserver/ows?',
		maxZoom: 25,
        layers: 'jacobina:pv',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	telpubl = {
		nome: 'Telefones Públicos',
		grupo: 'Infraestrutura Urbana',
		host: 'https://geoserver.genteufv.com.br/geoserver/ows?',
		maxZoom: 25,
        layers: 'jacobina:telpubl',
        format: 'image/png',
        transparent: true,
        tiled: true
	}*/
];
