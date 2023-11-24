<?php
// block_user.php

include 'db_connection.php';

session_start();

if (!isset($_SESSION['username'])) {
    header('Location: login.php');
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $blockedUsername = $_POST['blocked_username'];
	
	 // Check if the user exists
    $checkUserQuery = "SELECT * FROM users WHERE username='$blockedUsername'";
    $checkUserResult = $mysqli->query($checkUserQuery);
	
	 if ($checkUserResult->num_rows > 0) {
        // User exists, proceed with blocking

        // Check if the user is already blocked
        $checkBlockQuery = "SELECT * FROM blocked_users WHERE user_id='{$_SESSION['username']}' AND blocked_id='$blockedUsername'";
        $checkBlockResult = $mysqli->query($checkBlockQuery);

        if ($checkBlockResult->num_rows === 0) {
            // User is not blocked, block the user
            $blockQuery = "INSERT INTO blocked_users (user_id, blocked_id) VALUES ('{$_SESSION['username']}', '$blockedUsername')";
            $blockResult = $mysqli->query($blockQuery);
			
			if ($blockResult) {
                echo 'User blocked successfully';
            } else {
                echo 'Failed to block user';
            }
        } else {
            echo 'User is already blocked';
        }
    } else {
        echo 'User not found';
    }
}

			
			





?>