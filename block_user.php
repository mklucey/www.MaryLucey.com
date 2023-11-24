<?php
// block_user.php

include 'db_connection.php';

session_start();

if (!isset($_SESSION['username'])) {
    header('Location: login.php');
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $blockedUsername = $_POST['blocked_username'];
	
	 // Check if the user exists
    $checkUserQuery = "SELECT * FROM users WHERE username='$blockedUsername'";
    $checkUserResult = $mysqli->query($checkUserQuery);




?>