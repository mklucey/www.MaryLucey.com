<?php
include 'db_connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$username = $_POST['username'];
	$password = $_POST['password'];
	$email = $_POST['email'];
	
	// Validate input
    if (empty($username) || empty($password) || empty($email)) {
        echo "Signup failed. Please fill out all fields.";
	} else {
        // Hash the password (use a secure hashing algorithm)
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
		
		 // Insert user data into the database
        $sql = "INSERT INTO users (username, password, email) VALUES ('$username', '$hashedPassword', '$email')";
        $result = mysqli_query($conn, $sql);
		
		 if ($result) {
             echo "Signup successful. You can now login.";
             header('Location: login.html'); // Redirect to login page
             exit();
		 } else {
            echo "Signup failed. Please try again.";
            header('Location: signup.html'); // Redirect to signup page
            exit();
        }
    }
}











?>