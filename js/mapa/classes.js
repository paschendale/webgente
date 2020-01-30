//Cada plugin fica definido como uma função interna dessa classe, sendo chamado a medida que o usuário acha necessário
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

	//Plugin da barra de escala
	scale(){
	    var optionsScale = {
	    	metric: true, //Define a unidade em m/km
	    	imperial: false //Define a unidade em mi/ft
	    };
	    //Adicionando a barra de escala no mapa (canto inferior esquerdo)
	    L.control.scale(optionsScale).addTo(this.mapa);
	}

	barraFerramentas(){
		var menu = document.getElementById("barraFerramentas");

		//Formulário dinâmico mostrado quando o usuário seleciona a opção de "Barra de ferramentas"
		menu.innerHTML = `
			  	<div class="modal-dialog" role="dialog" id="barra" style="opacity: 0.7; position: relative; margin-left: 1%; margin-top: 5%; width: 24%;">
			    	<div class="modal-content">
			      		<div class="modal-body">
					     	<nav>
							  <div class="nav nav-tabs" id="nav-tab" role="tablist">
							    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Endereço</a>
							    <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Bairro</a>
							    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false" onclick="opcoesCEP()">CEP</a>
							    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false" onclick="opcoesIPTU()">IPTU</a>
							    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false" onclick="opcoesLOTE()">Lote CP</a>
							    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Filtro</a>
							  </div>
							</nav>
							<br>
							<div id="conteudo"></div>
					    </div>
			    	</div>
			   	</div>
		`;
	}

	//Plugin para desenhar as geometrias
	barraEdicao(valor){
		if(valor == true){
			//Definindo as funcionalidades da barra de controle lateral
			var drawnItems = new L.FeatureGroup();
			this.mapa.addLayer(drawnItems);
			// Definindo o titulo do botão
			L.drawLocal.draw.toolbar.buttons.polyline = 'Polyline';
			L.drawLocal.draw.toolbar.buttons.circle = 'Circle';
			L.drawLocal.draw.toolbar.buttons.rectangle = 'Rectangle';
			L.drawLocal.draw.toolbar.buttons.marker = 'Marker';
			L.drawLocal.draw.toolbar.buttons.polygon = 'Polygon';
			
			var drawControl = new L.Control.Draw({
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
				    	console.log(e);
				        layer.bindPopup("Colocar tamanho em km da polyline");
				    }
				    if(type == 'marker'){
				    	var coord = layer.getLatLng();
				        
				        var informacoesConsulta = `<div id="informacoes">
				        							<form action="../php/redirecionamento-marker.php" methos="POST">
				        								Mostrando dados abaixo:
					        							<br><strong>Dado 01</strong>
					        							<br><strong>Dado 02</strong>
					        							<br><strong>Dado 03</strong>
					        							<br><strong>Dado 04</strong>
				        							</form>
				        							</div>`;
				        
				        layer.bindPopup(informacoesConsulta);

				    }
				    if(type == 'polygon'){
				         //Determina a quantidade de pontos que o usuário entrou
		                let tamanho = e.layer._latlngs[0].length; 
		                console.log("Polígono de " + tamanho +  " pontos");         

		                //Obtendo a area em m2
		                var area = L.GeometryUtil.geodesicArea(e.layer.getLatLngs()[0]);
		                //Convertendo a area de m2 para km2
		                area = area/1000000;
		               
		                layer.bindPopup("Área aproximada: " + area.toFixed(5) + " km2");
					}
					drawnItems.addLayer(layer); //Define o desenho como uma camada
				});
			}

			if(valor == false){
				alert("não implementado");
			}
		}

	//Plugin para exportar o mapa
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

//Conexao WFS com o geoserver
class wfsCamada{
	//public
	constructor(objeto){
		this.WFScamada
	}
	//Passar todas as funções do arquivo overlay-control.js como funções internas dessa classe
	/*callLayerWFS(nome, layerGeoserver, conexao){
		var defaultParameters = {
	        service : 'WFS',
	        version : '1.0.0',
	        request : 'GetFeature',
	        typeName : layerGeoserver, 
	        outputFormat : 'text/javascript',
	        format_options : 'callback:getJson',
	        SrsName : 'EPSG:4326'
    	};

    	var owsrootUrl = conexao; 
	    var parameters = L.Util.extend(defaultParameters);
	    var URL = owsrootUrl + L.Util.getParamString(parameters);

	    var xhr = $.ajax({
        url: URL,
        dataType: 'jsonp', 
        cache: false, 
        jsonpCallback: 'getJson',
	        success: function(response){
	            console.log("CALL SUCCESS");
	            wfs_layer = L.geoJson(response, {
	                    //style: style,
	                    //onEachFeature: onEachFeature
	                }).addTo(mapa); 
	            camadas.push(wfs_layer);
	        }
    	});
	}*/
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

