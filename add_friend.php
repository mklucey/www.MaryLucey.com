<?php
// add_friend.php

include 'db_connection.php';

session_start();

if (!isset($_SESSION['username'])) {
    header('Location: login.php');
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $friendUsername = $_POST['friend_username'];




?>