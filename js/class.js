//Cada plugin fica definido como uma função interna dessa classe, sendo chamado a medida que o usuário acha necessário

/* A classe mapa foi criada nesse arquivo e é chamada no arquivo main.js para inicializar toda a interface do WebGENTE, definindo uma
latitude, longitude e zoom iniciais, assim como a escala, o status, os botões da barra de pesquisa, barra de edição, botões de informações, etc*/
class mapa{
	//public
	constructor(latitude, longitude, zoom){
		this.mapa = L.map('mapa', {zoomSnap: 0, zoomDelta: 0.5}).setView([latitude, longitude], zoom); 
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
	/* O objeto scale vai definir as opções de escala do WebGENTE utilizando o plugin de barra de escada além de também adicionar
	uma barra de escala no mapa. Esse plugin tem duas opções de unidades: metros/quilômetros (metric) e milhas/pés (imperial).
	Ele é chamado no arquivo main.js para apresentar a escala na interface do WebGENTE */
	scale(){
	    var optionsScale = {
	    	metric: true, //Define a unidade em m/km
	    	imperial: false //Define a unidade em mi/ft
	    };
	    //Adicionando a barra de escala no mapa (canto inferior esquerdo)
	    L.control.scale(optionsScale).addTo(this.mapa);
	}


	/* O objeto barraPesquisa irá fazer todas as opções para habilitar (e desabilitar) a ferramenta de pesquisas. Esse objeto é
	chamado no arquivo main.js e com ele é possível pesquisar em qualquer camada presente no WebGENTE os atributos escolhidos pelo usuário */
	barraPesquisas(){
		
		if(menu==" "){
			menu = document.getElementById("barraPesquisas");

			//Formulário dinâmico mostrado quando o usuário seleciona a opção de "Barra de Pesquisa"
			var camadasPesquisaveis=`<option value="-1"> </option><option selected disabled hidden>Nada selecionado</option>`;
			var obj_camada;
			//As abas de pesquisas são definidas de acordo com as camadas que possuem campos pesquisáveis definidos em prop_query 
			/* Interação para pesquisar em toda a camada presente no vetorOverlay apresentado no arquivo main e na pasta conf */
			for (var n=0;n<vetorOverlay.length; n++ ){

				obj_camada = vetorOverlay[n];

				if(obj_camada.prop_query != "" && obj_camada.prop_query !=undefined){
				
					camadasPesquisaveis +=`<option value="`+ n +`")">`+ obj_camada.nome+`</option>`;
					 
					camadasPesquisaveis +=`\n`;
				}

			}

/* essa parte do código vai estilizar em HTML a aparência na interface do WebGENTE da barra de pesquisa para algo mais agradável visualmente
ao usuário*/
			menu.innerHTML = `
				<div class="row">
				  	<div id="barra-de-pesquisa">
				  		<p style="margin:5px 5px;font-weight:bold">Selecione uma camada para realizar a pesquisa:</p>
						<select id="barraPesquisa" onchange="opcoes()">` + camadasPesquisaveis + `</select>
						<div id="conteudo"></div>
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


	showPosition(position){
		alert(position.coords.latitude);
		alert(position.coords.longitude);
	}

	/* O objeto minhaLocalizacao é usado para mostrar a localização do usuário quando a ferramenta for habilitada pelo
	usuário. Esse objeto é chamado no arquivo main.js para apresentação dele na interface do WebGENTE */
	minhaLocalizacao(){
		//Código definido para esperar 10 segundos
		if(navigator.geolocation){
	    	navigator.geolocation.watchPosition(showPosition, null, {
	    		enableHighAccuracy: true
	    	});
  		}	 
	  	else{
	    	alert("Navegador não suporta esse tipo de operação. Mude de navegador ou atualize-o.");
	  	}

		/* Função showPosition mostra as coordenadas da posição em que o usuário se encontra no WebGENTE e adicionam elas no mapa */  
	  	function showPosition(position){
	  		
	  		L.marker([position.coords.latitude, position.coords.longitude]).addTo(myMapa.getMapa());
	  		myMapa.getMapa().panTo([position.coords.latitude, position.coords.longitude],init.zoomInicial);
		}

		//Código que chama o geolocation uma única vez
		if(navigator.geolocation){
			//navigator.geolocation.watchPosition(...)
    		navigator.geolocation.getCurrentPosition(showPosition, null, {
    			enableHighAccuracy: true
    		});
  		}	 
	  	else{
	    	alert("Navegador não suporta esse tipo de operação. Mude de navegador ou atualize-o.");
	  	}

	  	function showPosition(position){
	  		L.marker([position.coords.latitude, position.coords.longitude]).addTo(myMapa.getMapa());
	  		myMapa.getMapa().panTo([position.coords.latitude, position.coords.longitude],init.zoomInicial);
		}
	}


	/* O objeto "exportar" é usado para exportar o mapa do WebGENTE em jpeg. Esse objeto é chamado no arquivo main.js de forma a criar um
	botão na interface do WebGENTE para a exportação do mapa ser feito. Esse mapa seria baixado com qualidade, tamanho e largura já pré
	definidos*/
	exportar(){
		alert("Baixando a imagem. Aguarde.");
		domtoimage.toJpeg(document.getElementById('mapa'), {
				quality: 0.95,
				width: 1400,
				height: 625
			 })
		    .then(function(dataUrl) {
		        var link = document.createElement('a');
		        link.download = 'WebGENTE-mapa.jpeg';
		        link.href = dataUrl;
		        link.click();
		    });
	}

	//Plugin para desenhar as geometrias
	/* O objeto barraEdicao é chamado no arquivo call_functions.js e main.js; é usado para o usuário poder habilitar e desabilitar as ferramentas de desenhos
	como desenhar polilinha, círculo, retângulo, polígono, inserir um marcador e etc. Esse plugin de desenhar geometrias também vai ajudar
	para que, por exemplo, ao usuário criar uma linha no mapa do WebGENTE ele consiga saber o tamanho da mesma em metros ou quilômetros. */
	barraEdicao(valor){
		/* Se a barra de edição for habilitada pelo usuário, as opções de desenho vão aparecer para o usuário*/
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

				/* Essa variável type vai ler o tipo de edição que o usuário quer fazer (polilinha, polígono, entre outros) e vai calcular
				informações (como o tamanho, área e coordenadas) baseados nesse tipo de edição */
				var type = e.layerType,
						   layer = e.layer;
						   
					/* Se o usuário escolher uma edição/desenho do tipo polilinha, será possível calcular a distância (tamanho da polilinha), 
					assim como a área aproximada caso ela seja uma polilinha fechada */
				    if(type == 'polyline'){
				    	var tamanho = e.layer._latlngs.length;
				    	var coordenadas = "";

				    	//Distância de exemplo
                        var distanciaTeste = 0;

				    	//Calculando na mão o tamanho em 'm' da polyline com base no algoritmo de geodésia (https://www.mapanet.eu/PT/resources/Script-Distance.htm)
                        var tamanho = e.layer._latlngs.length;
                        for(var i=0; i<tamanho; i++){
                            if((i+1) < tamanho){

                                var lat1 = e.layer._latlngs[i].lat;
                                var lat2 = e.layer._latlngs[i+1].lat;

                                var long1 =  e.layer._latlngs[i].lng;
                                var long2 = e.layer._latlngs[i+1].lng;

                                var r = 6378.137;

                                var dLat = ((lat2 - lat1)*Math.PI/180);
                                var dLong = ((long2 - long1)*Math.PI/180);

                                var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(lat1*Math.PI/180) * Math.cos(lat2*Math.PI/180) * Math.sin(dLong/2) * Math.sin(dLong/2);
                                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
                                            
                                distanciaTeste = distanciaTeste + c*r;
                             }
                        }

				    	var area = distanciaTeste*1000;

				    	for(var i=0; i<tamanho; i++){
				    		if(i == tamanho-1){	
				    			coordenadas = coordenadas + '[' + e.layer._latlngs[i].lat + ','+  e.layer._latlngs[i].lng +']';
				    		}
				    		else{
				    			coordenadas = coordenadas + '[' + e.layer._latlngs[i].lat + ','+  e.layer._latlngs[i].lng +'],';
				    		}
				    	}
				    	getJson = `{ "type": "Feature", "geometry" : { "type" : "LineString", "coordinates" : [` + coordenadas + `] }, "properties" : { "area" : "` + area + `"} }`;  
				    	
				    	layer.bindPopup('Área aproximada: ' + area.toFixed(2) + ' m <br><br><button type="button" id="create" onclick="gerarTXT()">Download (duplo clique)</button><a download="coordenadasLinha.json" id="downloadlink" style="display: none">Clique aqui</a>');

					}
					
					/* Se o usuário escolher uma edição/desenho do tipo "marker", o marcador será inserido onde selecionado e retornará um GeoJSON 
					com as coordenadas e outras informações a respeito de onde o marcador foi inserido" */
				    if(type == 'marker'){
						getJson = `{ "type": "Feature", "geometry" : { "type" : "Point", "coordinates" : [` + e.layer._latlng.lat + ','+  e.layer._latlng.lng  + `] } }`;
				        layer.bindPopup('<button type="button" id="create" onclick="gerarTXT()">Download (duplo clique)</button><a download="coordenadasMarcador.json" id="downloadlink" style="display: none">Clique aqui</a>');

					}
					
					/* Se o usuário escolher uma edição/desenho do tipo polígono, será possível gerar um arquivo GeoJSON com as coordenadas caso o usuário queira
					realizar o download da edição feita. Além disso, informações a respeito da área aproximada do polígono em metros quadrados também serão
					disponibilizadas*/
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
					drawnItems.addLayer(layer); //Define o desenho feito pelo usuário como uma camada
				
				});
			
			}

			/* Se a barra de edição for desabilitada pelo usuário, as opções de desenho não aparecerão na interface do WebGENTE
			ou seja, a barra de edição será removida */
			else if(valor == false){
				this.mapa.removeControl(drawControl);
				this.mapa.removeLayer(drawnItems);	
			}
		}
}
 
/* A classe wmsCamada é usada para gerar as camadas base do WebGENTE (presentes na pasta conf tanto em logged > base.js quanto em anon > base.js).
Essa classe vai definir um host e um objetoCamada para que as camadas base sejam apresentadas no WebGENTE */
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

/*A classe overlay é usada para gerar as camadas overlays do WebGENTE (presentes na pasta conf tanto em logged > overlay.js quanto em anon > overlay.js).
Essa classe vai definir vários parâmetros para as camadas overlay como o nome que vai aparecer no WebGENTE, onde essa camada se encontra no
servidor de mapas GeoServer (workspace:camada), o nome do grupo que estará essa camada no WebGENTE, a criação de arrays (prop_querys) para 
definir os atributos que serão apresentados (alpha, numeric e alternative) e os que serão restritos, assim como atributos default modificáveis*/
class overlay{
	//public

	constructor(nome, layers, grupo,alpha,numeric,prop_alternative,restricted, maxZoom, format, transparent,tiled){
		//Parâmetros dinâmicos da classe
		this.nome = nome;
		this.layers = layers;
		this.grupo = grupo;
		//inicializa os arrays alpha e numeric para serem concatenados no prop_querry
		this.alpha =(alpha==undefined)?[]:alpha ;
		this.numeric =(numeric==undefined)? []: numeric;
		this.prop_query = this.alpha.concat(this.numeric);
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

