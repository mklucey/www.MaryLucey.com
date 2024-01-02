<?php
// login.php

include 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $response = array(); // Create an array for response

    $username = $_POST["username"];
    $password = $_POST["password"];

    // Use prepared statements to prevent SQL injection
    $stmt = $conn->prepare("SELECT password FROM login WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($hashed_password);
        $stmt->fetch();

        // Verify the password using password_verify
        if (password_verify($password, $hashed_password)) {
            $response['status'] = "success";
        } else {
            $response['status'] = "failure";
        }
    } else {
        $response['status'] = "failure";
    }

    // Send the JSON-encoded response
    header('Content-Type: application/json');
    echo json_encode($response);

    $stmt->close(); // Close the prepared statement
}

$conn->close();
?>
