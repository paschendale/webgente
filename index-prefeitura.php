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

    <!--Plugin photosphereviewer-->
    <script src="js/mapa/plugins/photosphere/three.min.js"></script>
    <script src="js/mapa/plugins/photosphere/photo-sphere-viewer.min.js"></script>

    <!-- Plugin mini mapa: https://github.com/Norkart/Leaflet-MiniMap -->
    <link rel="stylesheet" href="css/plugins/Control.MiniMap.css">
    <script src="js/mapa/plugins/Control.MiniMap.min.js" type="text/javascript"></script>

    <!-- Plugin para agurpar camadas: https://github.com/ismyrnow/leaflet-groupedlayercontrol  -->
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

  	<!--Plugin para imprimir mapa: https://github.com/Igor-Vladyka/leaflet.browser.print-->
  	<script src="js/mapa/plugins/Leaflet.browser.print/leaflet.browser.print.js"></script>
  	<script src="js/mapa/plugins/Leaflet.browser.print/leaflet.browser.print.sizes.js"></script>
  	<script src="js/mapa/plugins/Leaflet.browser.print/leaflet.browser.print.utils.js"></script>

    <!-- jQuery CDN --> 
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script> 
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

    <!--Javascript do mapa-->
    <script src="js/mapa/main.js"></script>
    <script src="js/mapa/submenu_pesquisas.js"></script>
    <script src="js/mapa/classes.js"></script>
      <script src="js/mapa/table_filter.js"></script>
    <!--<script src="js/mapa/drag-and-drop.js"></script>-->

    <!-- Camadas do mapa -->
    <script src="conf/startup.js"></script>
    <script src="conf/base.js"></script>
    <script src="conf/overlay-prefeitura.js"></script>  

    <!--Javascript do menu principal superior-->
    <script src="js/menu-principal/barraEdicao.js"></script>
    <script src="js/menu-principal/barraPesquisas.js"></script>
    <script src="js/menu-principal/redirecionamento-paginas.js"></script>
    <script src="js/menu-principal/exportar-mapa.js"></script>

    <!-- Bootstrap JS-->
    <script src="js/bootstrap/bootstrap.bundle.js"></script>
    <script src="js/bootstrap/bootstrap.bundle.min.js"></script>
    <script src="js/bootstrap/bootstrap.js"></script>
    <script src="js/bootstrap/bootstrap.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

    <!--CSS criado-->
    <link rel="stylesheet" href="css/mapa/config.css">
    <link rel="stylesheet" href="css/menu-principal/menu.css">

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
    

    <title>WebGENTE</title>
  </head>
  <body onload="main()">
  	<div id="menu">
  		<nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <a class="navbar-brand" href="#"><img src="img/webgente-fundo-escuro-120x40.png" alt=""></a>


        <button type="button" class="btn btn-secondary btn-sm" data-toggle="modal" data-target="#exampleModalLong">Ajuda</button>

        
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
         
          </ul>
          <p id="bem-vindo">Prefeitura Municipal de Bom Despacho</p>
          &nbsp
          <button class="btn btn-secondary btn-sm" type="button" onclick="logout()">Sair</button>

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


<!-- Modal -->
<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLongTitle">Documentação de Ajuda do WebGENTE</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="container">
        <h4>Habilitando camadas</h4>
        <div class="row align-items-center">
        <div class="col-sm-2">
        <img src="img/layercontrol.PNG"></img>
        </div>
        <div class="col-sm">
        <p>Passe o mouse sobre a ferramenta para habilitar o controle de camadas, selecione cada camada, ou grupo de camadas, da forma como desejar, as camadas são sobrepostas na ordem da ativação, ou seja, se uma camada sobrepôs a outra de forma indesejada, basta desativar a e reativar novamente na ordem desejada.</p>
        </div>
        </div>
        </div> 
        <!--Fim do container-->
        <!-- Container de itens da help-->
        <div class="container">
        <br></br>
        <h4>Comandos de Zoom</h4>
        <div class="row align-items-center">
        <div class="col-sm-2">
        <img src="img/zoom-home.PNG"></img>
        </div>
        <div class="col-sm">
        <p>Os comandos com os símbolos '+' e '-' aumentam os níveis de zoom, para restaurar o nivel de zoom original do sistema, utilize o ícone <img src="img/home.png"></img>.</p>
        </div>
        </div>
        </div> 
        <!--Fim do container--> 
        <!-- Container de itens da help-->
        <div class="container">
        <br></br>
        <h4>Visualizar Informações</h4>
        <div class="row align-items-center">
        <div class="col-sm-2">
        <img src="img/info-but.PNG"></img>
        </div>
        <div class="col-sm">
        <p>Ao habilitar a ferramenta basta clicar em qualquer camada ativa para visualizar os atributos.</p>
        </div>
        </div>
        </div> 
        <!--Fim do container-->
        <!-- Container de itens da help-->
        <div class="container">
        <br></br>
        <h4>Pesquisa de Atributos</h4>
        <div class="row align-items-center">
        <div class="col-sm-2">
        <img src="img/search-but.PNG"></img>
        </div>
        <div class="col-sm">
        <p>...</p>
        </div>
        </div>
        </div> 
        <!--Fim do container-->  
        <!-- Container de itens da help-->
        <div class="container">
        <br></br>
        <h4>Ferramentas de Desenho</h4>
        <div class="row align-items-center">
        <div class="col-sm-2">
        <img  src="img/tools-but.PNG"></img>
        </div>
        <div class="col-sm">
        <p>...</p>
        </div>
        </div>
        </div> 
        <!--Fim do container-->
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>