<?php
include 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // SQL injection prevention
    $username = mysqli_real_escape_string($conn, $username);
    $password = mysqli_real_escape_string($conn, $password);

    $sql = "SELECT * FROM login WHERE username='$username' AND password='$password'";
    $result = $conn->query($sql);

    if (!$result) {
        // Handle query error
        $response = array("status" => "error", "message" => "Query error: " . $conn->error);
        echo json_encode($response);
        exit();
    }

    if ($result->num_rows > 0) {
        // Login successful
        $response = array("status" => "success", "message" => "Login successful. Enjoy chatting");
        echo json_encode($response);
        exit();
    } else {
        // Login failed
        $response = array("status" => "error", "message" => "Login failed. Please try again");
        echo json_encode($response);
        exit();
    }
}

$conn->close();
?>
