// Definindo camadas base do WebGENTE

/* A variável abaixo foi criada para que quando for chamada em main.js o programa busque no host (servidor) os dados das camadas 
de Imgeamento Aéreo e Orbital e Base Cadastral. O WebGENTE utiliza como servidor de mapas o GeoServer, que é um software de código livre e 
compatível com as especificações WMS, WCS e WFS */

// Web Map Service (WMS), em portugês serviço de mapa pela internet.
// Web Coverage Service (WCS), em portugês serviço de cobertura pela internet.
// Web Feature Service (WFS), em portugês serviço de cacacterísticas pela internet. 

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

/* Variável criada para chamar as informações do Modelo Digital de Elevação no host */

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

    
