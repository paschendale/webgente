// Definindo camadas base
var vetorBasemap = [
    
    parametros_imageamento = {
        nome: 'Imageamento Aéreo',
        host: 'http://localhost:8080/geoserver/ows?',
        padrao: true,
        maxZoom: 30,
        layers: 'gianetti:ortofoto',
        format: 'image/png',
        transparent: false,
        tiled: true,
        attribution: 'Imageamento realizado por aerofotogrametria, executado pelo Grupo de Engenharia para Gestão Territorial - GENTE em 2020'
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

    
