<?php
// add_friend.php

include 'db_connection.php';

session_start();

if (!isset($_SESSION['username'])) {
    header('Location: login.php');
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $friendUsername = $_POST['friend_username'];
	
	// Update the friends table in the database
    $query = "INSERT INTO friends (user_id, friend_id) VALUES ('{$_SESSION['username']}', '$friendUsername')";
    $result = $mysqli->query($query);





?>