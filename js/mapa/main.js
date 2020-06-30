// Cria uma variável global para setar o tipo de informação a ser puxada no GetFeatureInfo, 1: Abre visualizador 360, 2: Abre tabela de atributos
var opt_gfi = 2;
//Variável global para permitir ou não a exibição do popup do GetfeatureInfo, true: exibe o popup de infomações, false: impede a exibição. 
var info_gfi=false; 
//Variáveis globais para adicionar ou retirar a barra de Edição
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
    }).addTo(myMapa.getMapa());

    // Cria o controle de camadas

    //Criar dois estados para esse botão
    var informacao = L.easyButton({
        states: [{
                    stateName: 'information_disabled',
                    icon:      '<img src="img/information_active.png">',
                    title:     'Ativa o popup de informações',   
                    onClick: function(btn) {       
                        estado.state('information_enabled');
                        btn.state('information_enabled');  
                        info_gfi=true;  
                    }
                }, {
                    stateName: 'information_enabled',   
                    icon:      '<img src="img/information_desactive.png">',               
                    title:     'Desativa o popup de informações',
                    onClick: function(btn) {
                        estado.state('information_disabled');
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

        Lc.addOverlay(camadaOverlay[k], objeto.nome, objeto.grupo);
    };

    vetorOverlay.forEach(adicionaSourceOverlay);

    // Testa se existe a camada do levantamento 360, definida dentro do arquivo conf/360.js, caso exista, carrega o botão de habilitar a camada e o visualizador 360.

	if (typeof levantamento_360 != 'undefined') {
    	var camada360 = source.getLayer(levantamento_360.layers);

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
	};

    var pesquisas = L.easyButton('<img src="img/lupa.png">', function(){
        barraPesquisas();
    }).addTo(myMapa.getMapa());

    var ferramentas = L.easyButton('<img src="img/engineer.png">', function(){
        barraEdicao();
    }).addTo(myMapa.getMapa());

    
}
