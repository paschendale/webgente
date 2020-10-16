// Variável global para permitir ou não a exibição do popup do GetfeatureInfo, true: exibe o popup de infomações, false: impede a exibição. 
var info_gfi=false; 
var xyz=false;
// Variáveis globais para adicionar ou retirar a barra de Edição
var drawnItems;
var drawControl; 
var menu = " ";
var mde= "";
//Função principal int main()
function main(){

    // Inicializa o mapa conforme configurações em conf/startup.js
    myMapa = new mapa(init.latitude,init.longitude,init.zoomInicial);
    myMapa.scale();

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
    // o primeiro parametro é definido em conf/anon/overlay.js, especificando o host do GeoServer de onde serão puxadas as camadas
    // o segundo parâmetro são as opções do plugin, especificando a requisição WMS e o GetFeatureInfo

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
        objeto.alpha=[];
        Lc.addOverlay(camadaOverlay[k], objeto.nome, objeto.grupo);
    };

    vetorOverlay.forEach(adicionaSourceOverlay);  

    /* -------------- Controles de Ferramentas ------------------ */

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

    // Cria botao para ativar a ferramenta de pesquisas
    var pesquisas = L.easyButton('<img src="img/lupa.png">', function(){
        barraPesquisas();
    },'Habilitar ferramenta de pesquisa por atributo nas camadas').addTo(myMapa.getMapa());
    
    // 
    L.DomEvent.disableScrollPropagation(L.DomUtil.get('consultaPesquisa'));

    //Variável global para controle da exibição ou não da barra de ferramentas conforme o clique do usuário;
    barraEdicaoHabilitado = false;
    
    // 
    var ferramentas = L.easyButton('<img src="img/engineer.png">', function(){
        barraEdicao();
    },'Habilitar ferramentas de desenho no mapa').addTo(myMapa.getMapa());

    // 
    var exportar = L.easyButton('<img src="img/donwload.png">', function(btn, map){
        exportarMapa();
    },'Download do mapa em tela').addTo(myMapa.getMapa());

    //
    var minhaLocalização = L.easyButton('<img src="img/location.png">', function(btn, map){
        localizacao();
    },'Minha localização').addTo(myMapa.getMapa());


    // mde= source.getLayer(vetorMDE[0].layers);
    /*  var coordenadas = L.easyButton({
        states: [{
                    stateName: 'coordenadas_disabled',
                    icon:      '<img src="img/coordenadas_active.png">',
                    title:     'Habilita a ferramenta de visualização de coordenadas',   
                    onClick: function(btn) {   
                    
                    xyz=true;
                 mde.addTo(myMapa.getMapa());  
                        coordenadas.state('coordenadas_enabled');
                        btn.state('coordenadas_enabled');  
                          
                    }
                }, {
                    stateName: 'coordenadas_enabled',   
                    icon:      '<img src="img/coordenadas_desactive.png">',               
                    title:     'Desabilita a ferramenta de visualização de coordenadas',
                    onClick: function(btn) {
                        coordenadas.state('coordenadas_disabled');
                        btn.state('coordenadas_disabled'); 
                        xyz=false;   
                    }
            }]
        }).addTo(myMapa.getMapa());
    */
}
