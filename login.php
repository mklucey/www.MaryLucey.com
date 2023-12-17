<?php
include 'db_connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$username = $_POST['username'];
    $password = $_POST['password'];
	
	// Validate input
    if (empty($username) || empty($password)) {
        echo "Login failed. Please enter both username and password.";
	} else {
        // Fetch user data from the database
        $sql = "SELECT * FROM users WHERE username = '$username'";
        $result = mysqli_query($conn, $sql);
		
		if ($result && mysqli_num_rows($result) > 0) {
            $row = mysqli_fetch_assoc($result);
			
			 // Verify the password
            if (password_verify($password, $row['password'])) {
                // Start a session and store user data
                session_start();
                $_SESSION['user_id'] = $row['id'];
                $_SESSION['username'] = $row['username'];

                // Display success message
                echo "Login successful. Enjoy chatting.";

                exit();


?>