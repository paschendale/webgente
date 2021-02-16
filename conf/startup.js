// Definindo latitude, longitude e zoom para a inicialização do mapa
var init = {
	latitude: -20.754649, 
	longitude: -42.873321, 
	zoomInicial: 20
};

// Definindo site base para processamento do 360°
var sitebase = 'http://localhost/webgente/psv/index.html?';

//Definindo crs para a ferramenta de coordenadas
var epsgcode="EPSG:31983";
proj4.defs( "EPSG:31983","+proj=utm +zone=23 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
