<?php
include 'db_connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];
	
	// Validate input
    if (empty($username) || empty($password)) {
        echo "Login failed. Please enter both username and password.";
	} else {
        // Use prepared statement to prevent SQL injection
        $stmt = $conn->prepare("SELECT * FROM login WHERE username = ?");
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $result = $stmt->get_result();



?>