<?php
// signup.php

include 'db_connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$username = $_POST['username'];
	$password = password_hash($_POST['password'], PASSWORD_DEFAULT);
	$email_address = $_POST['email_address'];
	
	
	 // Perform input validation if needed
	 
	 $query = "INSERT INTO users (username, password, email_address) VALUES ('$username', '$password', '$email_address')";
     $result = $mysqli->query($query);
	 
	 if ($result) {
         header('Location: login.php');
         exit();
    } else {
        echo 'Registration failed';
    }
}

?>