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

if ($resultCurrentUser && mysqli_num_rows($resultCurrentUser) > 0) {
    $currentUserData = mysqli_fetch_assoc($resultCurrentUser);
} else {
    echo json_encode(['error' => 'User not found.']);
    exit();
}

$sqlUserList = "SELECT id, username FROM users WHERE id != $currentUserId";
$resultUserList = mysqli_query($conn, $sqlUserList);

$userListData = [];

while ($row = mysqli_fetch_assoc($resultUserList)) {
    $userListData[] = ['id' => $row['id'], 'username' => $row['username']];
}








?>