var vetorBasemap = [
    
    parametros_imageamento = {
        nome: 'Imageamento Aéreo',
        host: 'http://localhost:8080/geoserver/ows?',
        padrao: true,
        maxZoom: 30,
        layers: 'gianetti:ortofoto',
        format: 'image/jpeg',
        transparent: false,
        tiled: true,
        attribution: 'Imageamento realizado por aerofotogrametria pela UFV em 2017'
    }
];

/* Variável criada para chamar as informações do Modelo Digital de Elevação no host */

var vetorMDE = [
    parametros_mde = {
        nome: 'Modelo Digital de Elevação',
        host: 'http://localhost:8080/geoserver/ows?',
        padrao: false,
        maxZoom: 30,
        layers: 'gianetti:nasadem_vicosa',
        mde: true,
        format: 'image/jpeg',
        transparent: false,
        tiled: true,
        attribution: 'Modelo Digital de Elevação NASADEM'
    }
];