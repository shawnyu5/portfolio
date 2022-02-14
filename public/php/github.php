<?php
session_start();
include 'variables.php';
# send a post request to get the access token
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://github.com/login/oauth/access_token");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, "client_id=". $client_id ."&client_secret=" . $client_secret . "&code=" . $_GET['code']);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Accept: application/xml'));
$result = curl_exec($ch);
curl_close($ch);

$xml = simplexml_load_string($result);
$access_token = $xml->access_token;
$redirect_uri = $xml->redirect_uri;

# get user information from github api and set the authorization header to the access token and set the user-agent to "Mozilla/5.0"
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://api.github.com/user");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Authorization: token ' . $access_token, 'User-Agent: Mozilla/5.0'));
$result = curl_exec($ch);
curl_close($ch);

# parse the result json and get the login and id
$json = json_decode($result, true);
$username = $json['login'];
$id = $json['id'];

# if the user id is the same as 15690606 then create a session and redirect to the index page
if ($id == $authorized_github_id) {
    $_SESSION['id'] = $id;
} else {
    unset($_COOKIE['PHPSESSID']);
    setcookie('PHPSESSID', '', time() - 3600, '/');
    session_destroy();
    echo "Your github account is not authorized to access this page.";
    exit();
}

header("Location: /");