<?php
$servername = "fdb1033.awardspace.net";
$username = "4417646_chatapp";
$password = "Rippy324?";
$database = "4417646_chatapp";

$conn = mysqli_connect($servername, $username, $password, $database);


if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
