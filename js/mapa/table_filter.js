var controle = false;

function filtros(camadaFiltrada){
    //Recebe a camada de pesquisa e concatena uma string com o conteúdo do cql_filter 
    var cql_filtro="";
    for(campo of camadaFiltrada.prop_query){
        var resp=document.getElementById(campo).value;
        cql_filtro+=(resp!="" & cql_filtro!="")? " and ": "";
        cql_filtro+=(resp!="")?campo+"="+ resp:"";
}

   var layerF = camadaFiltrada;
    if(controle == true){
        
        controle = false;
    }

    if(controle == false){
        //Chama a camada como wms normal usando a classe wmsCamada criada no arquivo classes.js
        source = L.WMS.source(overlayHost, {
            opacity: 1,
            tiled: true,
            maxZoom: 25,
            "info_format": "application/json",
            transparent: true,
            format: 'image/png',
            cql_filter: cql_filtro
        });
       
        source.getLayer(layerF.layers).addTo(myMapa.getMapa());

        controle = true;
    }

    var defaultParameters = {
        service : 'WFS',
        version : '1.0.0',
        request : 'GetFeature',
        typeName : layerF.layers,
        outputFormat : 'text/javascript',
        format_options : 'callback:getJson',
        SrsName : 'EPSG:4326',
        cql_filter: cql_filtro
        //Cql filter adicionado também na requisição wfs
    };

    var parameters = L.Util.extend(defaultParameters);
    var URL = "https://geoserver.genteufv.com.br/geoserver/ows" + L.Util.getParamString(parameters);

    
    var xhr = $.ajax({
        url: URL,
        dataType: 'jsonp', 
        cache: false, 
        jsonpCallback: 'getJson',
            success: function(response){
                //Editar o json de resposta das quadras dos setores aqui em um popup
                for(var i=0; i<response.features.length; i++){
                    console.log(response.features[i].properties);
                }
            }
    });

}


function tabela(){

}