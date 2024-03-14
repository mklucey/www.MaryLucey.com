<?php
session_start();
include('db_connection.php');

$response = array('success' => false);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if(isset($_POST['username']) && isset($_POST['password'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];

        // Sanitize inputs to prevent SQL injection
        $username = mysqli_real_escape_string($conn, $username);
        $password = mysqli_real_escape_string($conn, $password);

        $sql = "SELECT * FROM login WHERE username = '$username'";
        $result = mysqli_query($conn, $sql);

        if ($result && mysqli_num_rows($result) == 1) {
            $user_data = mysqli_fetch_assoc($result);
            if (password_verify($password, $user_data['password'])) {
                $_SESSION['username'] = $username;
                $response['success'] = true;
            }
        }
    }
}

header('Content-Type: application/json');
echo json_encode($response);
?>
