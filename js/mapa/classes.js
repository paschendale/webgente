//Cada plugin fica definido como uma função interna dessa classe, sendo chamado a medida que o usuário acha necessário
var getJson = "";
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
class mapa{
	//public
	constructor(latitude, longitude, zoom){
		this.mapa = L.map('mapa').setView([latitude, longitude], zoom); 
	}

	setValor(valor){
		this.status = valor;
	}

	getValor(){
		return this.status;
	}

	//Retorna a referência para a variável mapa criada
	getMapa(){
		return this.mapa;
	}

	//Plugin da Barra de escala
	scale(){
	    var optionsScale = {
	    	metric: true, //Define a unidade em m/km
	    	imperial: false //Define a unidade em mi/ft
	    };
	    //Adicionando a barra de escala no mapa (canto inferior esquerdo)
	    L.control.scale(optionsScale).addTo(this.mapa);
	}

	barraPesquisas(){
		
		if(menu==" "){
			menu = document.getElementById("barraPesquisas");

			//Formulário dinâmico mostrado quando o usuário seleciona a opção de "Barra de Pesquisa"
			var camadasPesquisaveis=`<option value="-1"> </option`;
			var obj_camada;
			//As abas de pesquisas são definidas de acordo com as camadas que possuem campos pesquisáveis definidos em prop_query 
			for (var n=0;n<vetorOverlay.length; n++ ){
				obj_camada = vetorOverlay[n];
				if(obj_camada.prop_query != undefined){
					camadasPesquisaveis +=`

					 <option value="`+ n +`")">`+ obj_camada.nome+`</option>`;

					camadasPesquisaveis +=`\n`;
				}
			}

			menu.innerHTML = `
				<div class="row">
				  	<div class="modal-dialog" role="dialog" id="barra-de-pesquisa">
				    	<div class="modal-content">
				      		<div class="modal-body">
						     	<nav>
								  <div class="nav nav-tabs" id="nav-tab" role="tablist">
								 	<select id="barraPesquisa" onchange="opcoes()">` + camadasPesquisaveis + `</select>
								 </div>
								</nav>
								<br>
								<div id="conteudo"></div>
						    </div>
				    	</div>
				   	</div>
				</div>
			`;
		
	}
	else{
		menu.innerHTML=" ";
		menu=" ";
		vetorLayer.forEach(apagaLayers);
		vetorLayer=[];
		
		}
	}

	//Plugin para desenhar as geometrias
	barraEdicao(valor){
		if(valor == true){
			drawnItems = new L.FeatureGroup();
			//Definindo as funcionalidades da barra de controle lateral
			
			this.mapa.addLayer(drawnItems);
			// Definindo o titulo do botão
			L.drawLocal.draw.toolbar.buttons.polyline = 'Polyline';
			L.drawLocal.draw.toolbar.buttons.circle = 'Circle';
			L.drawLocal.draw.toolbar.buttons.rectangle = 'Rectangle';
			L.drawLocal.draw.toolbar.buttons.marker = 'Marker';
			L.drawLocal.draw.toolbar.buttons.polygon = 'Polygon';
			
			drawControl = new L.Control.Draw({
			        position: 'topleft',
			        draw:{
			            polyline: {
			                metric: true,
			            },        
			            polygon:{
			                metric: ['km', 'm'],
			                feet: false,
			                nautic: false,
			                showLength: true,
			                showArea: true,
			                allowIntersection: false,
			                precision:{km: 2}
			            },
			            circle: false,
			            rectangle: false,

			            marker: true
			        },
			        edit: {
			            featureGroup: drawnItems,
			            remove: true
			        }
			    });
			    
			    this.mapa.addControl(drawControl);

			    //Texto mostrado quando o usuário clica na geometria desenhada
			    this.mapa.on('draw:created', function(e){ 
				    var type = e.layerType,
				               layer = e.layer;
				    if(type == 'polyline'){
				    	var tamanho = e.layer._latlngs.length;
				    	var coordenadas = "";
				    	var area = "Colocar tamanho em m da polyline";

				    	for(var i=0; i<tamanho; i++){
				    		if(i == tamanho-1){	
				    			coordenadas = coordenadas + '[' + e.layer._latlngs[i].lat + ','+  e.layer._latlngs[i].lng +']';
				    		}
				    		else{
				    			coordenadas = coordenadas + '[' + e.layer._latlngs[i].lat + ','+  e.layer._latlngs[i].lng +'],';
				    		}
				    	}
				    	getJson = `{ "type": "Feature", "geometry" : { "type" : "LineString", "coordinates" : [` + coordenadas + `] }, "properties" : { "area" : "` + area + `"} }`;  
				    	console.log(getJson);
				    	layer.bindPopup('Área aproximada: ' + area + ' m <br><br><button type="button" id="create" onclick="gerarTXT()">Download (duplo clique)</button><a download="coordenadasLinha.json" id="downloadlink" style="display: none">Clique aqui</a>');

				    }
				    if(type == 'marker'){
						getJson = `{ "type": "Feature", "geometry" : { "type" : "Point", "coordinates" : [` + e.layer._latlng.lat + ','+  e.layer._latlng.lng  + `] } }`;
				        layer.bindPopup('<button type="button" id="create" onclick="gerarTXT()">Download (duplo clique)</button><a download="coordenadasMarcador.json" id="downloadlink" style="display: none">Clique aqui</a>');

				    }
				    if(type == 'polygon'){
				    	//Gerando o geojson com as coordenadas para download
				    	var tamanho = e.layer._latlngs[0].length;
				    	var coordenadas = "";
				    	//Obtendo a area em m2
		                var area = L.GeometryUtil.geodesicArea(e.layer.getLatLngs()[0]);


				    	for(var i=0; i<tamanho; i++){
				    		if(i == tamanho-1){
				    			coordenadas = coordenadas + '[' + e.layer._latlngs[0][i].lat + ','+  e.layer._latlngs[0][i].lng +']';
				    		}
				    		else{
						 		coordenadas = coordenadas + '[' + e.layer._latlngs[0][i].lat + ','+  e.layer._latlngs[0][i].lng +'],';
						 	}
				    	}

				    	getJson = `{ "type": "Feature", "geometry" : { "type" : "Polygon", "coordinates" : [[` + coordenadas + `]] }, "properties" : { "area" : "` + area.toFixed(2) + `"} }`;    
		               
						layer.bindPopup('Área aproximada: ' + area.toFixed(2) + ' m2 <br><br><button type="button" id="create" onclick="gerarTXT()">Download (duplo clique)</button><a download="coordenadasPoligono.json" id="downloadlink" style="display: none">Clique aqui</a>');
					}
					drawnItems.addLayer(layer); //Define o desenho como uma camada
				
				});
			
			}else if(valor == false){
				this.mapa.removeControl(drawControl);
				this.mapa.removeLayer(drawnItems);
			//Remove a Barra de Edição já existente  	

			}

				}

	//Plugin para exportar o mapa
	//imprime o mapa diretamento no navegador 
	exportar(){
		var customActionToPrint = function(context, mode) {
			return function() {
				window.alert("We are printing the MAP. Let's do Custom print here!");
				context._printCustom(mode);
			}
		}
		L.control.browserPrint({
			title: 'Impressão',
			documentTitle: 'Mapa download',
			//Usa o endereço da Tile para exibir o mapa de impressão
			printLayer: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',{
							attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
							subdomains: 'abcd',
							minZoom: 1,
							maxZoom: 16,
							ext: 'jpg'
						}),
			closePopupsOnPrint: false,
			printModes: [
				L.control.browserPrint.mode.landscape("TABLOID VIEW", "tabloid"),
				L.control.browserPrint.mode("Alert", "User specified print action", "A6", customActionToPrint, false),
				L.control.browserPrint.mode.landscape(),
				"Portrait",
				L.control.browserPrint.mode.auto("Automatico", "B4"),
				L.control.browserPrint.mode.custom("Selecione a área", "B5")
			],
			manualMode: true
		}).addTo(this.mapa);
	}
}
 



class wmsCamada{
	//public
	constructor(objetoCamada){
		this.WMScamada = L.tileLayer.wms(objetoCamada.host, objetoCamada);
	}

	getLayer(){
		return this.WMScamada;
	}
}

class baseLayer{
	//public
	constructor(link, atributo){
		this.baseLayer = L.tileLayer(link, {
			attribution: atributo
		});
	}

	getBaseLayer(){
		return this.baseLayer;
	}
}

class overlay{
	//public

	constructor(nome, layers, grupo,alpha,numeric,prop_alternative,restricted, maxZoom, format, transparent,tiled){
		//Parâmetros dinâmicos da classe
		this.nome = nome;
		this.layers = layers;
		this.grupo = grupo;
		this.alpha = alpha;
		this.numeric = numeric;
		this.prop_query = numeric + alpha;
		this.prop_alternative = prop_alternative;
		this.restricted = restricted; 
		//Parâmetros default modificáveis da classe 
		// O atributo recebe = (Se o parâmetro == undefined)? recebe o default: caso contrário recebe o parâmetro preenchido;   
		this.maxZoom = (maxZoom==undefined)? 25: maxZoom;
		this.format = (format==undefined)? "image/jpeg": format;
		this.transparent = (transparent==undefined)? true: transparent;
		this.tiled = (tiled==undefined)? true: tiled;
	}

	getOverlay(){
		var overlay = {
			nome : this.nome,
			layers : this.layers,
			grupo : this.grupo,
			alpha : this.alpha,
			numeric : this.numeric,
			prop_query : this.prop_query,
			prop_alternative : this.prop_alternative,
			restricted : this.restricted,
			maxZoom : this.maxZoom,
			format : this.format,
			transparent : this.transparent,
			tiled : this.tiled
		}
		return overlay;
	}
}

//função que deleta os atributos que não podem ser acessados
function restrictedAtributes(objeto,nome){  
	for(camada of vetorOverlay){
		if(camada.restricted != undefined && nome==camada.layers){
		for(campos_restristos of camada.restricted){
			delete objeto[campos_restristos];
		}
		
	}}
	
return objeto;
}