// Definindo camadas overlay
var vetorOverlay = [
	lotes = {
		nome: 'Lotes CTM',
		grupo: 'Cadastro Urbano',
		host: 'https://geoserver.genteufv.com.br/geoserver/ows?',
		maxZoom: 25,
        layers: 'jacobina:Lotes',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	meio_fio = {
		nome: 'Meio Fio',
		grupo: 'Infraestrutura Urbana',
		host: 'https://geoserver.genteufv.com.br/geoserver/ows?',
		maxZoom: 25,
        layers: 'jacobina:Meio_Fio',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

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

	hidrografia = {
		nome: 'Hidrografia',
		grupo: 'Infraestrutura Urbana',
		host: 'https://geoserver.genteufv.com.br/geoserver/ows?',
		maxZoom: 25,
        layers: 'jacobina:Hidrografia',
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
	}
];
