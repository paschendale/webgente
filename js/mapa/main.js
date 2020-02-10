 //Função principal int main()
var opt_gfi = 1;

function main(){

    //Variável global para controle da exibição ou não da "Barra de Edição" confome o clique do usuário;
    barraEdicaoHabilitado = false;

	myMapa = new mapa(init.latitude,init.longitude,init.zoomInicial);
	myMapa.scale();

    // Adicionando alguns botoes

    var homeBut = L.easyButton('<img src="img/home.png">', function(btn, map){
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
        if (objeto.tipo == 'camada'){
            camadaOverlay[k] = source.getLayer(objeto.layers);
            Lc.addOverlay(camadaOverlay[k],objeto.nome,objeto.grupo);
        }
    };

    function adiciona360 (objeto){
        k++;
        if (objeto.tipo == '360'){
            camadaOverlay[k] = source.getLayer(objeto.layers).addTo(myMapa.getMapa());
        }
    };

    vetorOverlay.forEach(adicionaSourceOverlay);

    var camada360 = source.getLayer(parametros_pontos_levantamento_360.layers);

    var estado = L.easyButton({
        states: [{
                stateName: '360_disabled',
                icon:      '<img src="img/360-degree.png">',
                title:     'Liga o visualizador de imagens 360°',   
                onClick: function(btn, map) {       
                    opt_gfi = 1;
                    camada360.addTo(myMapa.getMapa());
                    estado.state('360_enabled');    
                }
            }, {
                stateName: '360_enabled',   
                icon:      '<img src="img/360-degree-clicked.png">',               
                title:     'Desativa o visualizador de imagens 360°',
                onClick: function(btn, map) {
                    opt_gfi = 2;
                    myMapa.getMapa().removeLayer(camada360);
                    estado.state('360_disabled');
                }
        }]
    });
    estado.addTo(myMapa.getMapa());
}
