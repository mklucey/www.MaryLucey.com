<?php
session_start();
include('db_connection.php');

$response = array('success' => false);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if(isset($_POST['username']) && isset($_POST['password'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];

        // Use prepared statement to prevent SQL injection
        $stmt = $conn->prepare("SELECT * FROM login WHERE username = ?");
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $result = $stmt->get_result();

        if (!$result) {
            // Query failed
            $response['error'] = mysqli_error($conn);
        } else {
            if ($result->num_rows == 1) {
                $user_data = $result->fetch_assoc();
                if (password_verify($password, $user_data['password'])) {
                    $_SESSION['username'] = $username;
                    $response['success'] = true;
                } else {
                    // Password verification failed
                    $response['error'] = "Incorrect password";
                }
            } else {
                // Username not found
                $response['error'] = "User not found";
            }
        }
    } else {
        // Missing username or password
        $response['error'] = "Missing username or password";
    }
}

// Send the response as JSON
echo json_encode($response);
?>
