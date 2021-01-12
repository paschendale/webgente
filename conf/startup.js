// Definindo latitude, longitude e zoom para a inicialização do mapa
var init = {
	latitude: -19.737342, 
	longitude: -45.251930, 
	zoomInicial: 18
};

// Definindo site base para processamento do 360°
var sitebase = 'https://www.genteufv.com.br/psv/index.html?';

//Definindo crs para a ferramenta de coordenadas
var epsgcode="EPSG:31983";
proj4.defs( "EPSG:31983","+proj=utm +zone=23 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
