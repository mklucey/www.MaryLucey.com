<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: login.html");
    exit();
}

require_once 'db_connection.php';

$user_id = $_SESSION['user_id'];
$sql = "SELECT * FROM users WHERE id = '$user_id'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();

    // Display online users
    $sqlAllUsers = "SELECT * FROM users WHERE id != '$user_id'";
    $resultAllUsers = $conn->query($sqlAllUsers);

    echo "<h1>Main Chat</h1>";



?>