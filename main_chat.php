<?php
// main_chat.php

include 'db_connection.php';

session_start();

if (!isset($_SESSION['username'])) {
	header('Location: login.php');
	exit();
}

// Fetch and display messages
$query = "SELECT * FROM messages";
$result = $mysqli->query($query);


?>