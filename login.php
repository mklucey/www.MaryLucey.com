<?php
include 'db_connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$username = $_POST['username'];
    $password = $_POST['password'];
	
	// Validate input
    if (empty($username) || empty($password)) {
        echo "Login failed. Please enter both username and password.";


?>