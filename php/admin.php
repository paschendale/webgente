<!DOCTYPE html>
<html>
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
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title>Prefeitura Municipal</title>

    <!-- Bootstrap CSS CDN -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
    <!-- Our Custom CSS -->
    <link rel="stylesheet" href="../css/files/style-user-logado.css">

    <!-- Font Awesome JS -->
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/solid.js" integrity="sha384-tzzSw1/Vo+0N5UhStP3bvwWPq+uvzCMfrN1fEFe+xBmv1C/AtVX5K0uZtmcHitFZ" crossorigin="anonymous"></script>
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js" integrity="sha384-6OIrr52G08NpOFSZdxxz1xdNSndlD4vdcf/q2myIUVO0VsqaGHJsB0RaBE01VTOY" crossorigin="anonymous"></script>

    <!--Axios CDN-->
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

    <!-- jQuery CDN --> 
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script> 
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.10/jquery.mask.js"></script>

    <!-- Jquery Mask -->     
    <script src="../js/plugins/jquery.mask/jquery.mask.min.js"></script>
    <script src="../js/plugins/jquery.mask/jquery.validate.min.js"></script> 
    <script src="../js/plugins/jquery.mask/additional-methods.min.js"></script>
    <script src="../js/plugins/jquery.mask/messages_pt_BR.js"></script> 

     <!--Javascript do menu principal superior-->
    <script src="../js/call_functions.js"></script>

    <script src="content/newUser.js"></script>
    <script src="content/about.js"></script>
    <script src="content/users.js"></script>
    <script src="content/newLayer.js"></script>
</head>

<body>
    <div class="wrapper">
        <!-- Sidebar  -->
        <nav id="sidebar">
            <div class="sidebar-header">
                <h3>Cidade - UF</h3>
            </div>

            <ul class="list-unstyled components">
                <p>Seja Bem-Vindo</p>
                <li class="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Camadas</a>
                    <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <button type="button" class="btn btn-link" onclick="newLayer()" style="color: white; margin-left: 15px;">Nova Camada</button>
                        </li>
                        <li>
                            <button type="button" class="btn btn-link" onclick="()" style="color: white; margin-left: 15px;">Ativar/ Desativar Camadas</button>
                        </li>
                        <li>
                            <button type="button" class="btn btn-link" onclick="()" style="color: white; margin-left: 15px;">Excluir Camadas</button>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Usuários</a>
                    <ul class="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <button type="button" class="btn btn-link" onclick="newUser()" style="color: white; margin-left: 15px;">Novo Usuário</button>
                        </li>
                        <li>
                            <button type="button" class="btn btn-link" onclick="users()" style="color: white; margin-left: 15px;">Ver Usuários</button>
                        </li>
                        <li>
                            <button type="button" class="btn btn-link" onclick="()" style="color: white; margin-left: 15px;">Excluir Usuários</button>
                        </li>
                    </ul>
                </li>
                <li>
                    <button type="button" class="btn btn-link" onclick="about()" style="color: white; font-size: 17px;">Sobre</button>
                </li>
                <li>
                    <a href="#">Contato</a>
                </li>
            </ul>
            <img src="../img/webgente-fundo-escuro-120x40.png" style="margin-top: 85%; margin-left: 22%;">
        </nav>

        <!-- Page Content  -->
        <div id="content">

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">

                    <button type="button" id="sidebarCollapse" class="btn btn-dark">
                        <i class="fas fa-align-left"></i>
                        <span>Menu lateral</span>
                    </button>
                    <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-align-justify"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="nav navbar-nav ml-auto">
                            <li class="nav-item">
                                <!--<a class="nav-link" href="#" onclick="logout()">Sair</a>-->
                                <button type="button" class="btn btn-dark" onclick="logout()">Sair</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div id="conteudo-principal"></div>
        </div>
    </div>

    <!-- jQuery CDN - Slim version (=without AJAX) -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <!-- Popper.JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
    <!-- Bootstrap JS -->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>

    <script type="text/javascript">
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
        });
    </script>
</body>

</html>