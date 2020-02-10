// O levantamento 360, caso exista, deverá ter um atributo chamado 'Caminho', com o caminho da imagem dentro de algum servidor disponibilizado na web
// a camada deverá ser configurada dentro da variável levantamento_360. Não podendo ser alterado o nome.

levantamento_360 = {
		nome: 'Imagens 360°',
		grupo: 'Cadastro Urbano',
		tipo: '360',
		maxZoom: 25,
        layers: 'bomdespacho:pontos_levantamento_360',
        format: 'image/png',
        transparent: true,
        tiled: true
	}