<?php
// private_chat.php

include 'db_connection.php';

session_start();

if (!isset($_SESSION['username'])) {
	header('Location: login.php');
	exit();
}

$friendUsername = $_GET['friend'];
// Fetch and display private messages with $friendUsername
$query = "SELECT * FROM messages WHERE (sender='$friendUsername' AND receiver='{$_SESSION['username']}') OR (sender='{$_SESSION['username']}' AND receiver='$friendUsername')";
$result = $mysqli->query($query);


$privateMessages = [];
while ($row = $result->fetch_assoc()) {
    $privateMessages[] = $row;
}




?>