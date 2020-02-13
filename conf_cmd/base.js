// Definindo camadas base
var vetorBasemap = [
    
    parametros_imageamento = {
        nome: 'Imageamento Aéreo',
        host: 'https://geoserver.genteufv.com.br/geoserver/ows?',
        padrao: false,
        maxZoom: 22,
        layers: 'conceicao:ortofoto_cmd',
        format: 'image/png',
        transparent: false,
        tiled: true,
        attribution: 'Imageamento realizado por aerofotogrametria, executado pelo Grupo de Engenharia para Gestão Territorial - GENTE em 2017'
    },

    parametros_cadastro = {
        nome: 'Base Cadastral',
        host: 'https://geoserver.genteufv.com.br/geoserver/ows?',
        padrao: true,
        maxZoom: 22,
        layers: 'conceicao:base_cadastral',
        format: 'image/png',
        transparent: false,
        tiled: true,
        attribution: 'Mapa Base do Cadastro Territorial elaborado pelo GENTE em 2020'
    }
];
    
