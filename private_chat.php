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
    // Implement private chat page functionality here

    // Sample: Display private messages
    $sqlPrivateMessages = "SELECT * FROM messages WHERE receiver_id = '$user_id'";
    $resultPrivateMessages = $conn->query($sqlPrivateMessages);

    if ($resultPrivateMessages->num_rows > 0) {
        echo "Private messages:<br>";
        while ($row = $resultPrivateMessages->fetch_assoc()) {
            echo $row['message'] . "<br>";
        }
    } else {
        echo "No private messages.";
    }











?>