<?php
// profile_picture.php

include 'db_connection.php';

session_start();

if (!isset($_SESSION['username'])) {
    header('Location: login.php');
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $newProfilePicture = $_POST['new_profile_picture'];
	
	// Update the profile picture in the database
    $query = "UPDATE users SET profile_picture='$newProfilePicture' WHERE username='{$_SESSION['username']}'";
    $result = $mysqli->query($query);
	
	if ($result) {
        echo 'Profile picture updated successfully';
    } else {
        echo 'Failed to update profile picture';
    }
}





?>