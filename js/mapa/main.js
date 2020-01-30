 //Função principal int main()
function main(){

    //Variável global para controle da exibição ou não da "Barra de Edição" confome o clique do usuário;
    barraEdicaoHabilitado = false;

	myMapa = new mapa(-19.737342, -45.251930, 17);
	myMapa.scale();

    var optionsControl = {
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

}
