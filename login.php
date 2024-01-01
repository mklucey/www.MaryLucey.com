<?php
// login.php

include 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Check credentials in the database
    $sql = "SELECT * FROM login WHERE username = '$username' AND password = '$password'";
    $result = $conn->query($sql);

    if (!$result) {
        echo "Error: " . $sql . "<br>" . $conn->error; // Output any SQL errors
    } else {
        if ($result->num_rows > 0) {
            echo "success";
        } else {
            echo "failure";
        }
    }
}

$conn->close();
?>
