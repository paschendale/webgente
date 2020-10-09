// Definindo camadas base
var vetorBasemap = [
    /* Brenda: tirar a camada base dos limites municipais
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
    },*/

    parametros_imageamento = {
        nome: 'Imageamento Aéreo e Orbital',
        host: 'https://geoserver.genteufv.com.br/geoserver/ows?',
        padrao: false,
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
        padrao: true,
        maxZoom: 22,
        layers: 'bomdespacho:base_cadastral',
        format: 'image/png',
        transparent: false,
        tiled: true,
        attribution: 'Mapa Base do Cadastro Territorial elaborado pelo GENTE em 2020'
    }
];

var vetorMDE = [
    parametros_mde = {
        nome: 'Modelo Digital de Elevação',
        host: 'https://geoserver.genteufv.com.br/geoserver/ows?',
        padrao: false,
        maxZoom: 22,
        layers: 'bomdespacho:mde_bomdespacho',
        mde: true,
        format: 'image/png',
        transparent: false,
        tiled: true,
        attribution: 'Mapa Base do Cadastro Territorial elaborado pelo GENTE em 2020'
    }
];

    
