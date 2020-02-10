 //Função principal int main()
function main(){

    //Variável global para controle da exibição ou não da "Barra de Edição" confome o clique do usuário;
    barraEdicaoHabilitado = false;

	myMapa = new mapa(init.latitude,init.longitude,init.zoomInicial);
	myMapa.scale();

    // Criando função para abrir 360

    // Fim da função do 360

    // Adicionando alguns botoes

    var opt_gfi = 2;

    var estado = L.easyButton({
        states: [{
                stateName: 'gfi',        // name the state
                icon:      '<img src="img/info.png">',               // and define its properties
                title:     'Mostra informações do mapa',      // like its title
                onClick: function(btn, map) {       // and its callback
                    console.log(opt_gfi);
                    opt_gfi = 1;
                    estado.state('360');    // change state on click!
                }
            }, {
                stateName: '360',
                icon:      '<img src="img/360-degree.png">',
                title:     'Abre visualizador de imagens 360°',
                onClick: function(btn, map) {
                    console.log(opt_gfi);
                    opt_gfi = 2;
                    estado.state('gfi');
                }
        }]
    });
    estado.addTo(myMapa.getMapa());

    L.easyButton('<img src="img/home.png">', function(btn, map){
        var initial = [init.latitude,init.longitude];
        map.setView(initial,init.zoomInicial);
    }).addTo(myMapa.getMapa());

    // Fim da adição de botoes

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
