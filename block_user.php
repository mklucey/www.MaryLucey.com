<?php
// block_user.php

include 'db_connection.php';

session_start();

if (!isset($_SESSION['username'])) {
    header('Location: login.php');
    exit();
}




?>