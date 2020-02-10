// Definindo camadas base
var vetorBasemap = [
    ortofoto = {
        nome: 'Ortofoto',
        host: 'https://geoserver.genteufv.com.br/geoserver/ows?',
        padrao: true,
        maxZoom: 25,
        layers: 'jacobina:ortofoto',
        format: 'image/png',
        transparent: false,
        tiled: true,
        attribution: 'Ortofoto de Alta Resolução obtida através de levantamento aerofotogramétrico'
    },

    base_cadastral = {
        nome: 'Base Cadastral',
        host: 'https://geoserver.genteufv.com.br/geoserver/ows?',
        padrao: false,
        maxZoom: 25,
        layers: 'jacobina:base_cadastral',
        format: 'image/png',
        transparent: false,
        tiled: true,
        attribution: 'Base Cartográfica Cadastral elaborada pelo GENTE em 2020'
    }
    
];
    
