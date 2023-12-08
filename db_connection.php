<?php
$host = "sql300.ezzeblog.com";
$username = "qblog_35545457";
$password = "Tippy244";
$database = "qblog_35545457_mydatabase";

// Create a new mysqli connection
$conn = new mysqli($host, $username, $password, $database);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Optionally, set the character set to utf8 or another appropriate value
$conn->set_charset("utf8");
?>
