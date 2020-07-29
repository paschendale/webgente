// Variável global para permitir ou não a exibição do popup do GetfeatureInfo, true: exibe o popup de infomações, false: impede a exibição. 
var info_gfi=false; 

// Variáveis globais para adicionar ou retirar a barra de Edição
var drawnItems;
var drawControl; 
var menu = " ";

//Função principal int main()
function main(){

    //L.DomEvent.disableClickPropagation(L.DomUtil.get('consultaPesquisa'));
    L.DomEvent.disableScrollPropagation(L.DomUtil.get('consultaPesquisa'));

    //Variável global para controle da exibição ou não da "Barra de Edição" conforme o clique do usuário;
    barraEdicaoHabilitado = false;

    // Inicializa o mapa conforme configurações explicitadas em conf/startup.js

	myMapa = new mapa(init.latitude,init.longitude,init.zoomInicial);
	myMapa.scale();

    // Adicionando botão de set view para visao inicial

    var homeBut = L.easyButton('<img src="img/home.png">', function(btn, map){
        var initial = [init.latitude,init.longitude];
        map.setView(initial,init.zoomInicial);
    },'Voltar o mapa à vista inicial').addTo(myMapa.getMapa());


    //Adicionando o botao de visualizar informacoes com dois estados

    var informacao = L.easyButton({
        states: [{
                    stateName: 'information_disabled',
                    icon:      '<img src="img/information_active.png">',
                    title:     'Habilita a ferramenta de visualização de informações das camadas',   
                    onClick: function(btn) {       
                        informacao.state('information_enabled');
                        btn.state('information_enabled');  
                        info_gfi=true;  
                    }
                }, {
                    stateName: 'information_enabled',   
                    icon:      '<img src="img/information_desactive.png">',               
                    title:     'Desabilita a ferramenta de visualização de informações das camadas',
                    onClick: function(btn) {
                        informacao.state('information_disabled');
                        btn.state('information_disabled'); 
                        info_gfi=false;   
                    }
            }]
        }).addTo(myMapa.getMapa());

    var optionsControl = {
        collapsed: true,
        groupsCollapsable: true,
        groupCheckboxes: true
    };
    
    Lc = L.control.groupedLayers(null, null, optionsControl).addTo(myMapa.getMapa());

    // Adiciona automaticamente todas as camadas definidas em conf/base.js

    i = 0; // Inicializa contador
    var camadaBase = [0]; // Inicializa vetor externo à função para armazenamento das camadas base
	 
    function adicionaBasemap(objeto){
        i++;
        camadaBase[i] = new wmsCamada(objeto);
        Lc.addBaseLayer(camadaBase[i].getLayer(),objeto.nome);
        if (objeto.padrao) {camadaBase[i].getLayer().addTo(myMapa.getMapa());};
    }

    vetorBasemap.forEach(adicionaBasemap);

    // Cria o source, inicializado pelo plugin Leaflet.wms para a adição das camadas overlay, 
    // o primeiro parametro é definido em conf/overlay-, especificando o host do GeoServer de onde serão puxadas as camadas
    // o segundo parâmetro são as opções do plugin, especificando a requisição WMS e o GetFeatureInfo

    var source = L.WMS.source(overlayHost, {
          opacity: 1,
          tiled: true,
          maxZoom: 25,
          "info_format": "application/json",
          transparent: true,
          format: 'image/png'
    });
    
    // Adiciona automaticamente todas as camadas definidas em conf/overlay.js

    var camadaOverlay = [0]; // Inicializa vetor externo à função para armazenamento das camadas de Overlay 
	k = 0; // Inicializa contador

    function adicionaSourceOverlay (objeto){
    	k++;
        camadaOverlay[k] = source.getLayer(objeto.layers);
        objeto.alpha=[];
        Lc.addOverlay(camadaOverlay[k], objeto.nome, objeto.grupo);
    };

    vetorOverlay.forEach(adicionaSourceOverlay);    

    // Cria botao para ativar a ferramenta de pesquisas

    var pesquisas = L.easyButton('<img src="img/lupa.png">', function(){
        barraPesquisas();
    },'Habilitar ferramenta de pesquisa por atributo nas camadas').addTo(myMapa.getMapa());

    // Cria botao para ativar as ferramentas de desenho

    var ferramentas = L.easyButton('<img src="img/engineer.png">', function(){
        barraEdicao();
    },'Habilitar ferramentas de desenho no mapa').addTo(myMapa.getMapa());

    
}
