<?php
// login.php

include 'db_connection.php';

session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
	$password = $_POST['password'];
	
	 $query = "SELECT * FROM users WHERE username='$username'";
     $result = $mysqli->query($query);


?>