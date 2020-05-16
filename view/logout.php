<?php

  	session_start();
    session_destroy();
    header('refresh: 0.001; ../view/index-anonimo.html');
 	exit;

?>