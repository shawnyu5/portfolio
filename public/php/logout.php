<?php
session_start();
unset($_COOKIE['PHPSESSID']);
setcookie('PHPSESSID', '', time() - 3600, '/');
session_destroy();

header('Location: /');