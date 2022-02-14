<?php
session_start();

include 'variables.php';

$status = isset($_SESSION['id']) && $_SESSION['id'] == $authorized_github_id;
if (!$status) {
    unset($_COOKIE['PHPSESSID']);
    setcookie('PHPSESSID', '', time() - 3600, '/');
    session_destroy();
}

// encode json response
header("Content-type: application/json");
echo json_encode(array('status' => $status));
