<?php
require_once 'db_connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	$username = $_POST['username'];
	$password = password_hash($_POST['password'], PASSWORD_DEFAULT);
	$email = $_POST['email'];
	
	$sql = "INSERT INTO users (username, password, email) VALUES ('$username', '$password', '$email')";
	
	if ($conn->query($sql) === TRUE) {
        echo "User registered successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}


?>