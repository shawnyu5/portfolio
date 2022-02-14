<?php
session_start();
include 'variables.php';

// If the user is already logged in, destroy the session and redirect to the login page
unset($_COOKIE['PHPSESSID']);
setcookie('PHPSESSID', '', time() - 3600, '/');
session_destroy();

// login page
header('Location: https://github.com/login/oauth/authorize?client_id='.$client_id);
