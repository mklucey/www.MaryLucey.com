<?php
session_start();
require_once 'db_connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	$username = $_POST['username'];
	$password = $_POST['password'];
	
	$sql = "SELECT * FROM users WHERE username = '$username'";
	$result = $conn->query($sql);


?>