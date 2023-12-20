<?php
$servername = "fdb1033.awardspace.net";
$username = "4417646_chatapp";
$password = "tdzOGRqM9Cl6C?@p";
$database = "4417646_chatapp";

// Use htmlspecialchars to prevent sensitive data exposure
$conn = mysqli_connect($servername, $username, htmlspecialchars($password), $database);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
