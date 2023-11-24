<?php
// login.php

include 'db_connection.php';

session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
	$password = $_POST['password'];
	
	 $query = "SELECT * FROM users WHERE username='$username'";
     $result = $mysqli->query($query);
	 
	   if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if (password_verify($password, $row['password'])) {
            $_SESSION['username'] = $username;
            header('Location: main_chat.php');
            exit();
        } else {
            echo 'Invalid password';
        }
    } else {
        echo 'User not found';
    }
}


?>