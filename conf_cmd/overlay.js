// Definindo camadas overlay

var overlayHost = 'https://geoserver.genteufv.com.br/geoserver/ows?';

var vetorOverlay = [
	parametros_arvore = {
		nome: 'Arvore',
		grupo: 'Meio Ambiente',
		tipo: 'camada',
		maxZoom: 25,
        layers: 'conceicao:arvore',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	parametros_cad_antigo_identificado = {
		nome: 'Cadastro 2000/2017',
		grupo: 'Cadastro Imobiliário',
		tipo: 'camada',
		maxZoom: 25,
        layers: 'conceicao:cad_antigo_identificado',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	parametros_edif = {
		nome: 'Edificações',
		grupo: 'Cadastro Imobiliário',
		tipo: 'camada',
		maxZoom: 25,
        layers: 'conceicao:edif',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	parametros_hidrografia = {
		nome: 'Hidrografia',
		grupo: 'Meio Ambiente',
		tipo: 'camada',
		maxZoom: 25,
        layers: 'conceicao:hidrografia',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	parametros_lixeira = {
		nome: 'Lixeira',
		grupo: 'Infraestrutura Urbana',
		tipo: 'camada',
		maxZoom: 25,
        layers: 'conceicao:lixeira',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	parametros_poste = {
		nome: 'Postes',
		grupo: 'Infraestrutura Urbana',
		tipo: 'camada',
		maxZoom: 25,
        layers: 'conceicao:poste',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	parametros_rede_pluvial_esgoto = {
		nome: 'Poços de Visitação',
		grupo: 'Infraestrutura Urbana',
		tipo: 'camada',
		maxZoom: 25,
        layers: 'conceicao:rede_pluvial_esgoto',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	parametros_rede_topografica = {
		nome: 'Adensamento Topográfico',
		grupo: 'Rede de Referência Cadastral',
		tipo: 'camada',
		maxZoom: 25,
        layers: 'conceicao:rede_topografica',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	parametros_rrc = {
		nome: 'Marcos',
		grupo: 'Rede de Referência Cadastral',
		tipo: 'camada',
		maxZoom: 25,
        layers: 'conceicao:rrc',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	parametros_setores = {
		nome: 'Setores Cadastrais',
		grupo: 'Cadastro Imobiliário',
		tipo: 'camada',
		maxZoom: 25,
        layers: 'conceicao:setores',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	parametros_sinalizacao = {
		nome: 'Placas',
		grupo: 'Infraestrutura Urbana',
		tipo: 'camada',
		maxZoom: 25,
        layers: 'conceicao:sinalizacao',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	parametros_tel_pub = {
		nome: 'Telefone Público',
		grupo: 'Infraestrutura Urbana',
		tipo: 'camada',
		maxZoom: 25,
        layers: 'conceicao:tel_pub',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	parametros_topografia = {
		nome: 'Levantamento Topográfico',
		grupo: 'Rede de Referência Cadastral',
		tipo: 'camada',
		maxZoom: 25,
        layers: 'conceicao:topografia',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	parametros_trecho_via = {
		nome: 'Seções de Logradouro',
		grupo: 'Cadastro Imobiliário',
		tipo: 'camada',
		maxZoom: 25,
        layers: 'conceicao:trecho_via',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	parametros_lote = {
		nome: 'Lotes',
		grupo: 'Cadastro Imobiliário',
		tipo: 'camada',
		maxZoom: 25,
        layers: 'conceicao:lote',
        format: 'image/png',
        transparent: true,
        tiled: true
	},

	parametros_lote_vagos = {
		nome: 'Lote Vagos',
		grupo: 'Cadastro Imobiliário',
		tipo: 'camada',
		maxZoom: 25,
        layers: 'conceicao:lote_vago',
        format: 'image/png',
        transparent: true,
        tiled: true
	}

];
