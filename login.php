<?php
session_start();
include 'db_connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Validate input
    if (empty($username) || empty($password)) {
        echo "Login failed. Please enter both username and password.";
    } else {
        // Use prepared statement to prevent SQL injection
        $stmt = $conn->prepare("SELECT * FROM login WHERE username = ?");
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result && $result->num_rows > 0) {
            $row = $result->fetch_assoc();

            // Verify the password
            if (password_verify($password, $row['password'])) {
                // Store user data in the session
                $_SESSION['user_id'] = $row['id'];
                $_SESSION['username'] = $row['username'];

                // Respond with JSON indicating success
                echo json_encode(array("status" => "success", "message" => "Login successful. Enjoy chatting."));
            } else {
                // Respond with JSON indicating failure
                echo json_encode(array("status" => "error", "message" => "Username and/or password is incorrect. Please try again."));
            }
        } else {
            // Respond with JSON indicating failure
            echo json_encode(array("status" => "error", "message" => "Username and/or password is incorrect. Please try again."));
        }
        $stmt->close();
    }
}
?>

