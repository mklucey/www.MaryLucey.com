<?php
// private_chat.php

include 'db_connection.php';

session_start();

if (!isset($_SESSION['username'])) {
	header('Location: login.php');




?>