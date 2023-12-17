<?php
include 'db_connection.php';

session_start();

if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}

$currentUserId = $_SESSION['user_id'];
$sqlCurrentUser = "SELECT * FROM users WHERE id = $currentUserId";
$resultCurrentUser = mysqli_query($conn, $sqlCurrentUser);








?>