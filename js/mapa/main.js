 //Função principal int main()
function main(){

    //Variável global para controle da exibição ou não da "Barra de Edição" confome o clique do usuário;
    barraEdicaoHabilitado = false;

	myMapa = new mapa(init.latitude,init.longitude,init.zoomInicial);
	myMapa.scale();

    var optionsControl = {
        collapsed: true
    };
    
    Lc = L.control.groupedLayers(null, null, optionsControl).addTo(myMapa.getMapa());

    i = 0; // Inicializa contador
    var camadaBase = [0]; // Inicializa vetor externo à função para armazenamento das camadas base
	 
    function adicionaBasemap(objeto){
        i++;
        camadaBase[i] = new wmsCamada(objeto)
        Lc.addBaseLayer(camadaBase[i].getLayer(),objeto.nome);
        if (objeto.padrao) {camadaBase[i].getLayer().addTo(myMapa.getMapa());};
    }

    vetorBasemap.forEach(adicionaBasemap);

    var source = L.WMS.source(overlayHost, {
          opacity: 1,
          tiled: true,
          maxZoom: 25,
          "info_format": "application/json",
          transparent: true,
          format: 'image/png'
    });
    
    var camadaOverlay = [0]; // Inicializa vetor externo à função para armazenamento das camadas de Overlay 
	k = 0; // Inicializa contador

    function adicionaSourceOverlay (objeto){
    	k++;
    	camadaOverlay[k] = source.getLayer(objeto.layers);
    	Lc.addOverlay(camadaOverlay[k],objeto.nome,objeto.grupo);
    };

    vetorOverlay.forEach(adicionaSourceOverlay)
}
