<?php

$host = "localhost";
$username = "root";
$password = "root"; 
$database = "chat_app";

// Create a new mysqli connection
$conn = new mysqli($host, $username, $password, $database);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Optionally, set the character set to utf8 or another appropriate value
$conn->set_charset("utf8");
?>