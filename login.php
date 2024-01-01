<?php
// login.php

include 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $response = array(); // Create an array for response

    $username = $_POST["username"];
    $password = $_POST["password"];

    // Use prepared statements to prevent SQL injection
    $stmt = $conn->prepare("SELECT * FROM login WHERE username = ? AND password = ?");
    $stmt->bind_param("ss", $username, $password);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $response['status'] = "success";
    } else {
        $response['status'] = "failure";
    }

    $stmt->close();

    // Send the JSON-encoded response
    header('Content-Type: application/json');
    echo json_encode($response);
}

$conn->close();
?>
