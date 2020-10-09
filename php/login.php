<!DOCTYPE html>
<html lang="pt">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

   <!--CSS do Leaflet-->
    <link rel="stylesheet" href="../css/leaflet/leaflet.css">

    <!--Javascript do Leaflet-->
    <script src="../js/leaflet/leaflet.js"></script>
    <script src="../js/leaflet/leaflet-src.esm.js"></script>
    <script src="../js/leaflet/leaflet-src.js"></script>

    <!--Plugin photosphereviewer-->
    <script src="../js/mapa/plugins/photosphere/three.min.js"></script>
    <script src="../js/mapa/plugins/photosphere/photo-sphere-viewer.min.js"></script>

    <!-- Plugin mini mapa: https://github.com/Norkart/Leaflet-MiniMap -->
    <link rel="stylesheet" href="../css/plugins/Control.MiniMap.css">
    <script src="../js/mapa/plugins/Control.MiniMap.min.js" type="text/javascript"></script>

    <!-- Plugin para agurpar camadas: https://github.com/ismyrnow/leaflet-groupedlayercontrol  -->
    <link rel="stylesheet" href="../css/plugins/groupedlayercontrol/leaflet.groupedlayercontrol.css">
    <script src="../js/mapa/plugins/groupedlayercontrol/leaflet.groupedlayercontrol.js" type="text/javascript"></script>

    <!--Plugin de desenho de polígonos: https://github.com/Leaflet/Leaflet.draw/tree/leaflet-master-->
    <link rel="stylesheet" href="../css/plugins/leaflet.draw.css">
    <script src="../js/mapa/plugins/Leaflet.draw/Leaflet.draw.js"></script>

    <script src="../js/mapa/plugins/Leaflet.draw/edit/handler/Edit.Poly.js"></script>
    <script src="../js/mapa/plugins/Leaflet.draw/edit/handler/Edit.SimpleShape.js"></script>
    <script src="../js/mapa/plugins/Leaflet.draw/edit/handler/Edit.Circle.js"></script>
    <script src="../js/mapa/plugins/Leaflet.draw/edit/handler/Edit.Rectangle.js"></script>

    <script src="../js/mapa/plugins/Leaflet.draw/draw/handler/Draw.Feature.js"></script>
    <script src="../js/mapa/plugins/Leaflet.draw/draw/handler/Draw.Polyline.js"></script>
    <script src="../js/mapa/plugins/Leaflet.draw/draw/handler/Draw.Polygon.js"></script>
    <script src="../js/mapa/plugins/Leaflet.draw/draw/handler/Draw.SimpleShape.js"></script>
    <script src="../js/mapa/plugins/Leaflet.draw/draw/handler/Draw.Rectangle.js"></script>
    <script src="../js/mapa/plugins/Leaflet.draw/draw/handler/Draw.Circle.js"></script>
    <script src="../js/mapa/plugins/Leaflet.draw/draw/handler/Draw.Marker.js"></script>

    <script src="../js/mapa/plugins/Leaflet.draw/ext/LatLngUtil.js"></script>
    <script src="../js/mapa/plugins/Leaflet.draw/ext/GeometryUtil.js"></script>
    <script src="../js/mapa/plugins/Leaflet.draw/ext/LineUtil.Intersect.js"></script>
    <script src="../js/mapa/plugins/Leaflet.draw/ext/Polyline.Intersect.js"></script>
    <script src="../js/mapa/plugins/Leaflet.draw/ext/Polygon.Intersect.js"></script>

    <script src="../js/mapa/plugins/Leaflet.draw/Control.Draw.js"></script>
    <script src="../js/mapa/plugins/Leaflet.draw/Tooltip.js"></script>
    <script src="../js/mapa/plugins/Leaflet.draw/Toolbar.js"></script>

    <script src="../js/mapa/plugins/Leaflet.draw/draw/DrawToolbar.js"></script>
    <script src="../js/mapa/plugins/Leaflet.draw/edit/EditToolbar.js"></script>
    <script src="../js/mapa/plugins/Leaflet.draw/edit/handler/EditToolbar.Edit.js"></script>
    <script src="../js/mapa/plugins/Leaflet.draw/edit/handler/EditToolbar.Delete.js"></script>

    <!--Plugin para imprimir mapa: https://github.com/Igor-Vladyka/leaflet.browser.print-->
    <script src="../js/mapa/plugins/Leaflet.browser.print/leaflet.browser.print.js"></script>
    <script src="../js/mapa/plugins/Leaflet.browser.print/leaflet.browser.print.sizes.js"></script>
    <script src="../js/mapa/plugins/Leaflet.browser.print/leaflet.browser.print.utils.js"></script>

    <!-- jQuery CDN --> 
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script> 
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

    <!--Javascript do mapa-->
    <script src="../js/mapa/main.js"></script>
    <script src="../js/mapa/submenu_pesquisas.js"></script>
    <script src="../js/mapa/classes.js"></script>
      <script src="../js/mapa/table_filter.js"></script>
    <!--<script src="js/mapa/drag-and-drop.js"></script>-->

    <!-- Camadas do mapa -->
    <script src="../conf/startup.js"></script>
    <script src="../conf/base.js"></script>
    <script src="../conf/overlay-anonimo.js"></script>  
    <script src="../conf/360.js"></script>

    <!--Javascript do menu principal superior-->
    <script src="../js/menu-principal/barraEdicao.js"></script>
    <script src="../js/menu-principal/barraPesquisas.js"></script>
    <script src="../js/menu-principal/redirecionamento-paginas.js"></script>
    <script src="../js/menu-principal/exportar-mapa.js"></script>

    <!-- Bootstrap JS-->
    <script src="../js/bootstrap/bootstrap.bundle.js"></script>
    <script src="../js/bootstrap/bootstrap.bundle.min.js"></script>
    <script src="../js/bootstrap/bootstrap.js"></script>
    <script src="../js/bootstrap/bootstrap.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

    <!--CSS criado-->
    <link rel="stylesheet" href="../css/files/mapa/config.css">
    <link rel="stylesheet" href="../css/files/menu-principal/menu.css">
    <link rel="stylesheet" href="../css/files/login/login.css">
    <link rel="stylesheet" href="../css/files/login-prefeitura/style.css">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="../css/bootstrap/bootstrap.css">
    <link rel="stylesheet" href="../css/bootstrap/bootstrap.min.css">
    <link rel="stylesheet" href="../css/bootstrap/bootstrap-grid.css">
    <link rel="stylesheet" href="../css/bootstrap/bootstrap-grid.min.css">
    <link rel="stylesheet" href="../css/bootstrap/bootstrap-reboot.css" >
    <link rel="stylesheet" href="../css/bootstrap/bootstrap-reboot.min.css">

    <!--GetFeatureInfo plugin-->
    <script src="../js/mapa/plugins/GetFeatureInfo/leaflet.wms.js"></script>
    <script src="../js/mapa/plugins/GetFeatureInfo/json2table.js"></script>
    
    <!-- EasyButton -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leaflet-easybutton@2/src/easy-button.css">
    <script src="https://cdn.jsdelivr.net/npm/leaflet-easybutton@2/src/easy-button.js"></script>
    
    <!-- Jquery Mask -->
     <script src="../js/menu-principal/plugins/jquery.mask.min.js"></script>
     <script src="../js/menu-principal/plugins/jquery.validate.min.js"></script> 
     <script src="../js/menu-principal/plugins/additional-methods.min.js"></script>
     <script src="../js/menu-principal/plugins/localization/messages_pt_BR.js"></script> 
     <script src="../js/menu-principal/aplicacaoJMask.js"></script>

<body>

    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#"><img src="img/webgente-fundo-escuro-120x40.png" alt=""></a>
    </nav>
    <div class="container">
        <form method="POST" action="redirect/redirecionamento-login.php">
             <div class = row>
                <div class="col-xl-4 col-sm-2" id="left">
                </div>
                <div id="login" name="login" class="col-xl-4 col-sm-8">
                    <div class="form-group">
                        <input type="text" class="form-control" id="usuario" name="usuario" aria-describedby="emailHelp" placeholder="CPF">
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" id="senha" name="senha" placeholder="Senha">
                        <small id="emailHelp" class="form-text text-muted">Mantenha em segurança sua senha</small>
                    </div>
                    <button type="submit" class="btn btn-secondary btn-lg btn-block" id="botao" name="botao">Enviar</button>
                    <br>
                    <br>
                    <button type="button" class="btn btn-light btn-sm" data-toggle="modal" data-target="#exampleModalCenter">Esqueceu sua senha ?</button>
                    <button type="button" class="btn btn-light btn-sm" onclick="recuperarSenhaLogado()">Trocar senha</button>

                    <!-- Modal -->
                      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLongTitle">Esqueci minha senha ?</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div class="modal-body">
                              <p>Solicite uma nova senha ao Admin do sistema, por favor.</p>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                            </div>
                          </div>
                        </div>
                      </div>
                </div>
                <div class="col-xl-4 col-sm-2" id="right">
                </div>
             </div>
        </form>
    </div>
</body>
</html>