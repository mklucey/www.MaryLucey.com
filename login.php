<?php
// login.php

include 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $response = array(); // Create an array for response

    $username = $_POST["username"];
    $password = $_POST["password"];

    // Print SQL query for debugging
    $sql = "SELECT * FROM login WHERE username = '$username' AND password = '$password'";
    echo "SQL Query: $sql";

    $result = $conn->query($sql);

    if ($result === false) {
        $response['status'] = "error";
        $response['message'] = "Error executing the SQL query: " . $conn->error;
    } else {
        if ($result->num_rows > 0) {
            $response['status'] = "success";
        } else {
            $response['status'] = "failure";
        }
    }

    // Send the JSON-encoded response
    header('Content-Type: application/json');
    echo json_encode($response);
}

$conn->close();
?>
