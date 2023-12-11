<?php
$servername = "fdb1032.awardspace.net";
$username = "4413656_chatapp";
$password = "Rippy324";
$database = "4413656_chatapp";

$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}



?>