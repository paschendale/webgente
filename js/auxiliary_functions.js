/* -------- Funções que são repetidas mais vezes em todo o código do WebGENTE ---------- */

/* Variável para gerar o GeoJSON*/
var getJson = "";

/* Função de gerar txt */
function gerarTXT(){
    var textFile = null,
    makeTextFile = function (text){
        var data = new Blob([text], {type: 'text/plain'});
      
        if (textFile !== null) {
            window.URL.revokeObjectURL(textFile);
        }
        textFile = window.URL.createObjectURL(data);
        return textFile;
    };

    var create = document.getElementById('create');

    create.addEventListener('click', function (){
        var link = document.getElementById('downloadlink');
      
        link.href = makeTextFile(getJson);
       link.style.display = 'block';
    }, false);
}


// getfeatureinfo
/* Função para trabalhar o plugin do getFeatureInfo */
function objects2div (objeto){

    div_init = '<div';

    div_final = '</div>';

    div_data = '';

    i = 0;

    css = '<style>a {font-weight: bold; color: inherit;}</style>';
    
    for (var property in objeto) {
    if (!objeto.hasOwnProperty(property)) continue;

        div_id = 'tabela'+i;

        title = (objeto[property].id).split('.');

        id =  objeto[property].properties.id;

        div_content = '<div style="width:270px;"><p><a style="font-weight: bold; color: inherit;" data-toggle="collapse" href="#'+div_id+'">'+title[0]+': '+id+'</a></p></div><div id="'+div_id+'" class="panel-collapse collapse"><div class="panel-body" style="height: 120px; overflow-y: auto; overflow-x: hidden;">'+properties2table(objeto[property].properties)+'</div></div>'

        div_data = div_data + div_content + '<p></p>';

        i++;

    }

    div_data = '<div>' + div_data + css + '</div>';

    return div_data;

};

/* Função para tornar visível os atributos presentes nas camadas que irão aparecer no WebGENTE. Habilita sistemas e arquivos que possuem um 
"path folder", como por exemplo o sistema Alfresco da prefeitura de Bom Despacho - MG  */
function properties2table (objeto){
    tb_init = '<table><tr><th>Atributo</th><th>Valor</th></tr>';

    tb_data_acum = '';

    for (var property in objeto) {
    if (!objeto.hasOwnProperty(property)) continue;

    if (property == 'path_folder') {
        tb_data = '<tr><td>Arquivos associados</td><td><a href="'+ objeto[property]+'" target="_blank"><img alt="Acessar o sistema Alfresco" src="img/folder.png"></a></td></tr>';
    } else {
        tb_data = '<tr><td>'+property+'</td><td>'+objeto[property]+'</td></tr>';
    }

    tb_data_acum = tb_data_acum+tb_data;     
        
    };

    css_table =(xyz==true)? '<style>table {width:250px;text-align:left;vertical-align:center;padding: 15px;border-bottom: 1px solid #ddd;font-family: Tahoma, Geneva, sans-serif;}td,th {border-bottom: 1px solid #ddd;padding: 2px;}tr:hover {background-color: #f5f5f5;}th {background-color: #343a40; color: #f8f9fa;}</style>':
    '<style>table {width:250px;text-align:left;vertical-align:center;padding: 15px;border-bottom: 1px solid #ddd;font-family: Tahoma, Geneva, sans-serif;}td,th {border-bottom: 1px solid #ddd;padding: 2px;}tr:hover {background-color: #f5f5f5;}th {background-color: #f5f5f5;}</style>';

    tb_final = '</table>';

    tb = css_table+tb_init+tb_data_acum+tb_final;

    return tb;
};


//função que deleta os atributos que não podem ser acessados
/* Função para restringir os atributos/informações que o usuário anônimo não pode ter acesso. */
function restrictedAtributes(objeto,nome){  
    for(camada of vetorOverlay){
        if(camada.restricted != undefined && nome==camada.layers){
        for(campos_restristos of camada.restricted){
            delete objeto[campos_restristos];
        }
        
    }}
  
return objeto;
}

/* Transforma campos selecionados na tabela de camadas em formatos adequados à classe overlay */
function criaArray(objeto){
    var vetor = [objeto] // Transforma o campo em um array
    if (objeto[0]==undefined || objeto[0]==null || objeto[0]=="") {
        vetor.length = 0 // Cria um array nulo caso não exista informações
    } else if (objeto.split(',').length > 1){
        vetor = objeto.split(',') // Cria um array com base nos valores separados por vírgula
    }
    return vetor
}

/* Cria um objeto com os parâmetros de uma camada overlay no modo restrito*/
function criaParametroOverlay(objeto){
    return new overlay(
        objeto.nome,
        objeto.layers,
        objeto.grupo,
        criaArray(objeto.alpha),
        criaArray(objeto.numeric),
        criaArray(objeto.prop_alternative),
        criaArray(objeto.restricted),
        objeto.maxZoom,
        objeto.format,
        objeto.transparent,
        objeto.tiled
        )
}

/* Cria um objeto com os parâmetros de uma camada overlay no modo irrestrito*/
function criaParametroOverlayUnrestricted(objeto){
    return new overlay(
        objeto.nome,
        objeto.layers,
        objeto.grupo,
        criaArray(objeto.alpha),
        criaArray(objeto.numeric),
        criaArray(objeto.prop_alternative),
        [],
        objeto.maxZoom,
        objeto.format,
        objeto.transparent,
        objeto.tiled
        )
}

/* Cria um vetor de camadas overlay no modo restrito */
function criaVetorOverlay(objeto){
    var vetor = [0];
    for (var i = 0; i < objeto.length; i++) {
        vetor[i] = criaParametroOverlay(objeto[i])
    }
    return vetor
}

/* Cria um vetor de camadas overlay no modo irrestrito */
function criaVetorOverlayUnrestricted(objeto){
    var vetor = [0];
    for (var i = 0; i < objeto.length; i++) {
        vetor[i] = criaParametroOverlayUnrestricted(objeto[i])
    }
    return vetor
}