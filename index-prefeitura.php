<!doctype html>
<html lang="pt">
  <head>
  <?php

    if(!isset($_SESSION)){
      session_start();
    }
    if(!isset($_SESSION['nome']) || !isset($_SESSION['cpf'])){
      session_destroy();
      header('refresh: 0.001; index-anonimo.html');
      exit;
    }     
  ?>
    
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes">

    <link rel="icon" href="favicon.ico">
    
    <!--CSS do Leaflet-->
    <link rel="stylesheet" href="css/leaflet/leaflet.css">

    <!--Javascript do Leaflet-->
    <script src="js/leaflet/leaflet.js"></script>
    <script src="js/leaflet/leaflet-src.esm.js"></script>
    <script src="js/leaflet/leaflet-src.js"></script>

    <!-- Plugin mini mapa: https://github.com/Norkart/Leaflet-MiniMap -->
    <link rel="stylesheet" href="css/plugins/Control.MiniMap.css">
    <script src="js/mapa/plugins/Control.MiniMap.min.js" type="text/javascript"></script>

    <!-- Plugin para agrupar camadas: https://github.com/ismyrnow/leaflet-groupedlayercontrol  -->
    <link rel="stylesheet" href="css/plugins/groupedlayercontrol/leaflet.groupedlayercontrol.css">
    <script src="js/mapa/plugins/groupedlayercontrol/leaflet.groupedlayercontrol.js" type="text/javascript"></script>

    <!--Plugin de desenho de polígonos: https://github.com/Leaflet/Leaflet.draw/tree/leaflet-master-->
    <link rel="stylesheet" href="css/plugins/leaflet.draw.css">
    <script src="js/mapa/plugins/Leaflet.draw/Leaflet.draw.js"></script>

    <script src="js/mapa/plugins/Leaflet.draw/edit/handler/Edit.Poly.js"></script>
    <script src="js/mapa/plugins/Leaflet.draw/edit/handler/Edit.SimpleShape.js"></script>
    <script src="js/mapa/plugins/Leaflet.draw/edit/handler/Edit.Circle.js"></script>
    <script src="js/mapa/plugins/Leaflet.draw/edit/handler/Edit.Rectangle.js"></script>

    <script src="js/mapa/plugins/Leaflet.draw/draw/handler/Draw.Feature.js"></script>
    <script src="js/mapa/plugins/Leaflet.draw/draw/handler/Draw.Polyline.js"></script>
    <script src="js/mapa/plugins/Leaflet.draw/draw/handler/Draw.Polygon.js"></script>
    <script src="js/mapa/plugins/Leaflet.draw/draw/handler/Draw.SimpleShape.js"></script>
    <script src="js/mapa/plugins/Leaflet.draw/draw/handler/Draw.Rectangle.js"></script>
    <script src="js/mapa/plugins/Leaflet.draw/draw/handler/Draw.Circle.js"></script>
    <script src="js/mapa/plugins/Leaflet.draw/draw/handler/Draw.Marker.js"></script>

    <script src="js/mapa/plugins/Leaflet.draw/ext/LatLngUtil.js"></script>
    <script src="js/mapa/plugins/Leaflet.draw/ext/GeometryUtil.js"></script>
    <script src="js/mapa/plugins/Leaflet.draw/ext/LineUtil.Intersect.js"></script>
    <script src="js/mapa/plugins/Leaflet.draw/ext/Polyline.Intersect.js"></script>
    <script src="js/mapa/plugins/Leaflet.draw/ext/Polygon.Intersect.js"></script>

    <script src="js/mapa/plugins/Leaflet.draw/Control.Draw.js"></script>
    <script src="js/mapa/plugins/Leaflet.draw/Tooltip.js"></script>
    <script src="js/mapa/plugins/Leaflet.draw/Toolbar.js"></script>

    <script src="js/mapa/plugins/Leaflet.draw/draw/DrawToolbar.js"></script>
    <script src="js/mapa/plugins/Leaflet.draw/edit/EditToolbar.js"></script>
    <script src="js/mapa/plugins/Leaflet.draw/edit/handler/EditToolbar.Edit.js"></script>
    <script src="js/mapa/plugins/Leaflet.draw/edit/handler/EditToolbar.Delete.js"></script>

    <!-- jQuery CDN --> 
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script> 
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

    <!--Javascript do mapa-->
    <script src="js/mapa/main.js"></script>
    <script src="js/mapa/submenu_pesquisas.js"></script>
    <script src="js/mapa/classes.js"></script>
      <script src="js/mapa/table_filter.js"></script>
    <!--<script src="js/mapa/drag-and-drop.js"></script>-->

<<<<<<< HEAD
    <!-- Carregando configurações de mapa para o usuário anonimo -->
    <script src="conf/startup.js"></script>
    <script src="conf/anon/base.js"></script>
    <script src="conf/anon/overlay.js"></script>  
=======
    <!-- Camadas do mapa -->
    <script src="conf/startup.js"></script>
    <script src="conf/base.js"></script>
    <script src="conf/overlay-prefeitura.js"></script>  
>>>>>>> c4507dcb0089bb7df6ff265412b2c4e5458ea263

    <!--Javascript do menu principal superior-->
    <script src="js/menu-principal/barraEdicao.js"></script>
    <script src="js/menu-principal/barraPesquisas.js"></script>
    <script src="js/menu-principal/redirecionamento-paginas.js"></script>
    <script src="js/menu-principal/exportar-mapa.js"></script>
    <script src="js/menu-principal/localizacao.js"></script>

    <!-- Bootstrap JS-->
    <script src="js/bootstrap/bootstrap.bundle.js"></script>
    <script src="js/bootstrap/bootstrap.bundle.min.js"></script>
    <script src="js/bootstrap/bootstrap.js"></script>
    <script src="js/bootstrap/bootstrap.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

    <!--CSS criado-->
    <link rel="stylesheet" href="css/files/mapa/config.css">
    <link rel="stylesheet" href="css/files/menu-principal/menu.css">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap/bootstrap.css">
    <link rel="stylesheet" href="css/bootstrap/bootstrap.min.css">
    <link rel="stylesheet" href="css/bootstrap/bootstrap-grid.css">
    <link rel="stylesheet" href="css/bootstrap/bootstrap-grid.min.css">
    <link rel="stylesheet" href="css/bootstrap/bootstrap-reboot.css" >
    <link rel="stylesheet" href="css/bootstrap/bootstrap-reboot.min.css">

    <!--GetFeatureInfo plugin-->
    <script src="js/mapa/plugins/GetFeatureInfo/leaflet.wms.js"></script>
    <script src="js/mapa/plugins/GetFeatureInfo/json2table.js"></script>
    
    <!-- EasyButton -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leaflet-easybutton@2/src/easy-button.css">
    <script src="https://cdn.jsdelivr.net/npm/leaflet-easybutton@2/src/easy-button.js"></script>

     <!--Plugin: https://github.com/rowanwins/leaflet-easyPrint-->
     <script src="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.js"></script> <!--Plugin externo para download png do mapa-->
     <script src="js/mapa/plugins/Leaflet-EasyPrint/dist/bundle.js"></script>
    

    <title>WebGENTE</title>
  </head>
  <body onload="main()">
  	<div id="menu">
  		<nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#"><img src="img/webgente-fundo-escuro-120x40.png" alt=""></a>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
         
          </ul>
          <p id="bem-vindo">Prefeitura Municipal de Bom Despacho</p>
          &nbsp
          <button class="btn btn-outline-primary my-2 my-sm-0" type="button" onclick="logoutPrefeitura()">Sair</button>

        </div>
      </nav>
  	</div>
  
    <!--Div onde o mapa será desenhado-->
    <div id="barraPesquisas"></div>
    <div id="mapa">
      <div id="consultaPesquisa"></div>
    </div>
  </body>
</html>
