<?php
$servername = "fdb1032.awardspace.net";
$username = "4417646_chatapp";
$password = ":MUF-z-m7)%yqN:T";
$database = "4417646_chatapp";

// Use htmlspecialchars to prevent sensitive data exposure
$conn = mysqli_connect($servername, $username, htmlspecialchars($password), $database);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
