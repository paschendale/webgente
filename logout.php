<?php

  	session_start();
    session_destroy();
    header('refresh: 0.001; index-anonimo.html');
 	exit;

?>