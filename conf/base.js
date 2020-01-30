// Definindo camadas base
var vetorBasemap = [
    parametros_limites_municipais = {
        nome: 'Limites Municipais',
        host: 'https://geoserver.genteufv.com.br/geoserver/ows?',
        padrao: false,
        maxZoom: 25,
        layers: 'bomdespacho:limites_municipais',
        format: 'image/png',
        transparent: false,
        tiled: true,
        attribution: 'Limites Municipais obtidos através do IBGE (2010) e Prefeitura Municipal de Bom Despacho (2019)'
    },

    parametros_satelite = {
        nome: 'Imagem de Satélite',
        host: 'https://geoserver.genteufv.com.br/geoserver/ows?',
        padrao: false,
        maxZoom: 22,
        layers: 'bomdespacho:satelite_base',
        format: 'image/png',
        transparent: false,
        tiled: true,
        attribution: 'Imageamento orbital do satélite Kompsat adquirido pela PMBD em Outubro de 2019'
    },

    parametros_ortofoto = {
        nome: 'Ortofoto',
        host: 'https://geoserver.genteufv.com.br/geoserver/ows?',
        padrao: true,
        maxZoom: 22,
        layers: 'bomdespacho:ortofoto_base',
        format: 'image/png',
        transparent: false,
        tiled: true,
        attribution: 'Imageamento realizado por aerofotogrametria, executado pelo Grupo de Engenharia para Gestão Territorial - GENTE em 2020'
    },

    parametros_cadastro = {
        nome: 'Base Cadastral',
        host: 'https://geoserver.genteufv.com.br/geoserver/ows?',
        padrao: false,
        maxZoom: 22,
        layers: 'bomdespacho:base_cadastral',
        format: 'image/png',
        transparent: false,
        tiled: true,
        attribution: 'Mapa Base do Cadastro Territorial elaborado pelo GENTE em 2020'
    }
];
    
