// Variável global para permitir ou não a exibição do popup do GetfeatureInfo, true: exibe o popup de infomações, false: impede a exibição. 

var info_gfi=false; 
var xyz=false;

// Variáveis globais para adicionar ou retirar a barra de Edição

var drawnItems;
var drawControl; 
var menu = " ";
var mde= "";

//Função principal int main()

/* A função main descrita abaixo exerce o papel de inicilizar toda a interface do WebGENTE, abrindo o mapa inicial com
configurações estabelecidas na pasta "conf". Dentro dessa pasta, podemos encontrar outras duas pastas "anon" e "logged" 
que definem a inicialização da interface para um usuário anônimo e para um usuário que possui acesso a informações restritas, 
respectivamente. Além dessas duas pastas, possuímos um arquivo PHP chamado "conexão" (conexão.php) que é responsável pela conexão 
com o Banco de Dados para fins de cadastro de usuário e o arquivo JavaScript "startup" (startup.js) que define configurações 
iniciais de latitude, longitude, zoom inicial e define um site base para buscar as imagens em 360º do WebGENTE. */

function main(){

    // Inicializa o mapa conforme configurações em conf/startup.js

    /* Aqui estamos criando um objeto que inicializa a interface inicial do mapa de acordo com as configurações estabelecidas na 
    pasta conf/startup.js */
    
    /* Observe que a variável "init" foi definida no arquivo startup.js e está sendo chamada aqui justamente para retornar as 
    configurações de inicialização do mapa. */

    /* O objeto myMapa foi construído com base na classe "mapa", definida no arquivo js/class.js */

    myMapa = new mapa(init.latitude,init.longitude,init.zoomInicial);

    /* Aqui estamos chamando uma propriedade do objeto myMapa criado, que retorna uma escala para o mapa e a exibe no canto inferior 
    esquerdo da interface do WebGENTE. */

    /* Essa propriedade do objeto myMapa que se chama "scale" é um plugin que está definido dentro da classe "mapa" no arquivo js/class.js */

    myMapa.scale();

    /* A variável criada abaixo (optionsControl) utiliza o plugin "collapse" que serve para mostrar e esconder conteúdo. Basicamente
    essa variável faz com que quando clicamos em um botão apareça uma informação contida nele e permite também o fechamento desse botão */

    var optionsControl = {
        collapsed: true,
        groupsCollapsable: true,
        groupCheckboxes: true
    };
    
    /* O objeto "Lc" criado abaixo utiliza o pluguin "groupedLayers" que organiza a exibição das layers (camadas) na interface do
    WebGENTE. Observe que ele utiliza a variável "optionsControl" para tornar o botão de layers colapsável, assim como as caixas
    de marcar (Checkboxes) das camadas. Além disso, esse obejto faz com que as camadas ativadas sejam adicionadas sobrepostas ao 
    mapa base que estiver ativado */
    
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
