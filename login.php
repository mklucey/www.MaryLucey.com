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

    if ($result->num_rows > 0) {
        // Login successful
        echo "Login successful. Enjoy chatting";
        // Redirect to main_chat.html
        header("Location: main_chat.html");
        exit();
    } else {
        // Login failed
        echo "Login failed. Please try again";
    }
}

$conn->close();
?>
