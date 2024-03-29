<!doctype html>
<html lang="pt">
  <head>
    <?php

      if(!isset($_SESSION)){
          session_start();
      }
      if(!isset($_SESSION['nome'])){
          session_destroy();
          header('refresh: 0.001; index.html');
          exit;
      }     

    ?>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes">

    <link rel="icon" href="favicon.ico">
    
    <!--CSS do Leaflet-->
    <link rel="stylesheet" href="../css/leaflet/leaflet.css">

    <!--Javascript do Leaflet-->
    <script src="../js/leaflet/leaflet.js"></script>

    <!--Plugin photosphereviewer: https://github.com/JeremyHeleine/WP-Photo-Sphere-->
    <script src="../js/plugins/photosphere/three.min.js"></script>
    <script src="../js/plugins/photosphere/photo-sphere-viewer.min.js"></script>

    <!-- Plugin mini mapa: https://github.com/Norkart/Leaflet-MiniMap -->
    <link rel="stylesheet" href="../css/plugins/Control.MiniMap.css">
    <script src="../js/plugins/Control.MiniMap.min.js" type="text/javascript"></script>

    <!-- Plugin para agurpar camadas: https://github.com/ismyrnow/leaflet-groupedlayercontrol  -->
    <link rel="stylesheet" href="../css/plugins/groupedlayercontrol/leaflet.groupedlayercontrol.css">
    <script src="../js/plugins/groupedlayercontrol/leaflet.groupedlayercontrol.js" type="text/javascript"></script>

    <!--Plugin de desenho de polígonos: https://github.com/Leaflet/Leaflet.draw/tree/leaflet-master-->
    <link rel="stylesheet" href="../css/plugins/leaflet.draw.css">
    <script src="../js/plugins/Leaflet.draw/Leaflet.draw.js"></script>

    <script src="../js/plugins/Leaflet.draw/edit/handler/Edit.Poly.js"></script>
    <script src="../js/plugins/Leaflet.draw/edit/handler/Edit.SimpleShape.js"></script>
    <script src="../js/plugins/Leaflet.draw/edit/handler/Edit.Circle.js"></script>
    <script src="../js/plugins/Leaflet.draw/edit/handler/Edit.Rectangle.js"></script>

    <script src="../js/plugins/Leaflet.draw/draw/handler/Draw.Feature.js"></script>
    <script src="../js/plugins/Leaflet.draw/draw/handler/Draw.Polyline.js"></script>
    <script src="../js/plugins/Leaflet.draw/draw/handler/Draw.Polygon.js"></script>
    <script src="../js/plugins/Leaflet.draw/draw/handler/Draw.SimpleShape.js"></script>
    <script src="../js/plugins/Leaflet.draw/draw/handler/Draw.Rectangle.js"></script>
    <script src="../js/plugins/Leaflet.draw/draw/handler/Draw.Circle.js"></script>
    <script src="../js/plugins/Leaflet.draw/draw/handler/Draw.Marker.js"></script>

    <script src="../js/plugins/Leaflet.draw/ext/LatLngUtil.js"></script>
    <script src="../js/plugins/Leaflet.draw/ext/GeometryUtil.js"></script>
    <script src="../js/plugins/Leaflet.draw/ext/LineUtil.Intersect.js"></script>
    <script src="../js/plugins/Leaflet.draw/ext/Polyline.Intersect.js"></script>
    <script src="../js/plugins/Leaflet.draw/ext/Polygon.Intersect.js"></script>

    <script src="../js/plugins/Leaflet.draw/Control.Draw.js"></script>
    <script src="../js/plugins/Leaflet.draw/Tooltip.js"></script>
    <script src="../js/plugins/Leaflet.draw/Toolbar.js"></script>

    <script src="../js/plugins/Leaflet.draw/draw/DrawToolbar.js"></script>
    <script src="../js/plugins/Leaflet.draw/edit/EditToolbar.js"></script>
    <script src="../js/plugins/Leaflet.draw/edit/handler/EditToolbar.Edit.js"></script>
    <script src="../js/plugins/Leaflet.draw/edit/handler/EditToolbar.Delete.js"></script>

    <!--Plugin para imprimir mapa: https://github.com/Igor-Vladyka/leaflet.browser.print-->
    <script src="../js/plugins/Leaflet.browser.print/leaflet.browser.print.js"></script>
    <script src="../js/plugins/Leaflet.browser.print/leaflet.browser.print.sizes.js"></script>
    <script src="../js/plugins/Leaflet.browser.print/leaflet.browser.print.utils.js"></script>

    <!--GetFeatureInfo plugin-->
    <script src="../js/plugins/GetFeatureInfo/leaflet.wms.js"></script>
    <script src="../js/auxiliary_functions.js"></script>
    
    <!-- EasyButton -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leaflet-easybutton@2/src/easy-button.css">
    <script src="https://cdn.jsdelivr.net/npm/leaflet-easybutton@2/src/easy-button.js"></script>

    <!--Plugin: https://github.com/rowanwins/leaflet-easyPrint-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.js"></script> 

    <!--Plugin externo para download png do mapa-->
    <script src="../js/plugins/Leaflet-EasyPrint/dist/bundle.js"></script>

    <!-- jQuery CDN --> 
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script> 
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

    <!--Javascript do mapa-->
    <script src="../js/main.js"></script>
    <script src="../js/class.js"></script>
    <script src="../js/search_functions.js"></script>

    <!--<script src="js/mapa/drag-and-drop.js"></script>-->

    <!-- Camadas do mapa -->
    <script src="../conf/startup.js"></script>
    <script src="../conf/anon/base.js"></script>
    <script src="../conf/anon/overlay.js"></script>  


    <!--Javascript do menu principal superior-->
    <script src="../js/call_functions.js"></script>

    <!-- Bootstrap JS-->
    <script src="../js/bootstrap/bootstrap.bundle.js"></script>
    <script src="../js/bootstrap/bootstrap.bundle.min.js"></script>
    <script src="../js/bootstrap/bootstrap.js"></script>
    <script src="../js/bootstrap/bootstrap.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

    <!--CSS criado-->
    <link rel="stylesheet" href="../css/files/map.css">
    <link rel="stylesheet" href="../css/files/menu.css">
    <link rel="stylesheet" href="../css/files/login.css">
    <link rel="stylesheet" href="../css/files/index-logged.css">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="../css/bootstrap/bootstrap.css">
    <link rel="stylesheet" href="../css/bootstrap/bootstrap.min.css">
    <link rel="stylesheet" href="../css/bootstrap/bootstrap-grid.css">
    <link rel="stylesheet" href="../css/bootstrap/bootstrap-grid.min.css">
    <link rel="stylesheet" href="../css/bootstrap/bootstrap-reboot.css" >
    <link rel="stylesheet" href="../css/bootstrap/bootstrap-reboot.min.css">
    
     <!-- Jquery Mask -->
     <script src="../js/plugins/jquery.mask/jquery.mask.min.js"></script>
     <script src="../js/plugins/jquery.mask/jquery.validate.min.js"></script> 
     <script src="../js/plugins/jquery.mask/additional-methods.min.js"></script>
     <script src="../js/plugins/jquery.mask/messages_pt_BR.js"></script> 

    <title>WebGENTE</title>
  </head>
  <body>

  	<header>
  		<nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#"><img src="img/webgente-fundo-escuro-120x40.png" alt=""></a>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <p id="texto-cabeçalho">Cadastro de novos usuários.</p>
        </div>
      </nav>
  	</header>

    <section id="cadastro-usuario">
      <div id="local">
          <a href="admin.php">Painel do administrador</a>/ Cadastro de novos usuários
        </div>
      <div class="row">
        <div class="col-1 col-sm-2 col-xl-2"></div>
          <div class="col-10 col-sm-8 col-xl-8">
            <br>
            <form action="redirect/redirect-register.php" method="POST" id="formulario" name="formulario">
              <label for="nome">Nome</label>
                <input type="text" class="form-control" id="nome" name="nome" placeholder="Nome completo" required>
              <label for="cpf">CPF</label> 
                <input type="text" class="form-control" id="cpf" name="cpf" placeholder="CPF" required>
              <label for="data-nascimento">Data de nascimento</label>
                <input type="date" class="form-control" id="data-nascimento" name="data-nascimento" required>
              <label for="sexo">Sexo</label>
              <br>
                <input type="radio" id="sexo" name="sexo" value="masculino"> Masculino
                <input type="radio" id="sexo" name="sexo" value="feminino"> Feminino
                <input type="radio" id="sexo" name="sexo" value="nao-informar"> Não informar
              <br>
              <label for="faixa-etaria">Faixa etária</label>
                <select class="form-control" id="faixa-etaria" name="faixa-etaria">
                  <option>----</option>
                  <option value="menores-15-anos">Menores de 15 anos</option>
                  <option value="entre-16-e-64-anos">Entre 16 e 64 anos</option>
                  <option value="a-partir-de-65-anos">A partir de 65 anos</option>
                </select>
              <label for="celular">Celular</label>
                <input type="text" class="form-control" id="celular" name="celular" placeholder="Celular">
              <label for="email">Email</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="Email" required>
              <label for="senha">Senha</label>
                <input type="password" class="form-control" id="senha" name="senha" placeholder="Senha" required>
              <br>
              <button type="submit" class="btn btn-secondary btn-lg btn-block" id="enviar">Cadastrar</button>
            </form>
          </div>
        <div class="col-1 col-sm-2 col-xl-2"></div>
      </div>
    </section>

    <footer>
    </footer>

  </body>
</html>
