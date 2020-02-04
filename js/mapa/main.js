 //Função principal int main()
function main(){

    //Variável global para controle da exibição ou não da "Barra de Edição" confome o clique do usuário;
    barraEdicaoHabilitado = false;

	myMapa = new mapa(init.latitude,init.longitude,init.zoomInicial);
	myMapa.scale();

    /*var optionsControl = {
        collapsed: true
    };
    
    Lc = L.control.groupedLayers(null, null, optionsControl).addTo(myMapa.getMapa());

    k = 0; // Inicializa contador
    var camadaOverlay = [0]; // Inicializa vetor externo à função para armazenamento das camadas de Overlay 

    function adicionaOverlay(objeto){
        k++;
        camadaOverlay[k] = new wmsCamada(objeto);
        Lc.addOverlay(camadaOverlay[k].getLayer(),objeto.nome,objeto.grupo);
    }

    i = 0; // Inicializa contador
    var camadaBase = [0]; // Inicializa vetor externo à função para armazenamento das camadas base
 
    function adicionaBasemap(objeto){
        i++;
        camadaBase[i] = new wmsCamada(objeto)
        Lc.addBaseLayer(camadaBase[i].getLayer(),objeto.nome);
        if (objeto.padrao) {camadaBase[i].getLayer().addTo(myMapa.getMapa());};
    }

    vetorBasemap.forEach(adicionaBasemap);
    vetorOverlay.forEach(adicionaOverlay);
    */

    parametros_cbge_quadras = {
        nome: 'Quadras CTM',
        grupo: 'Cadastro Urbano',
        host: 'https://geoserver.genteufv.com.br/geoserver/ows?',
        maxZoom: 25,
        layers: 'bomdespacho:CBGE_Quadras',
        format: 'image/png',
        transparent: true,
        tiled: true
    }

    /*L.tileLayer.wms('https://geoserver.genteufv.com.br/geoserver/ows?', parametros_cbge_quadras).addTo(myMapa.getMapa());*/


    var source = L.WMS.source("https://geoserver.genteufv.com.br/geoserver/ows?", {
          opacity: 1,
          tiled: true,
          maxZoom: 25,
          "info_format": "text/html"
    });
    
    source.getLayer("bomdespacho:pontos_levantamento_360").addTo(myMapa.getMapa());

}
