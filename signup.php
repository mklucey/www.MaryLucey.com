<?php
include 'db_connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $email = $_POST['email'];

    // Validate input
    if (empty($username) || empty($password) || empty($email)) {
        echo "Signup failed. Please fill out all fields.";
    } else {
        // Hash the password (use a secure hashing algorithm)
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        // Check if the username already exists
        $checkUsernameQuery = "SELECT * FROM users WHERE username = '$username'";
        $checkUsernameResult = mysqli_query($conn, $checkUsernameQuery);

        if (mysqli_num_rows($checkUsernameResult) > 0) {
            echo "Signup failed. Username already exists.";
        } else {
            // Insert user data into the database
            $insertUserQuery = "INSERT INTO users (username, password, email) VALUES ('$username', '$hashedPassword', '$email')";
            $result = mysqli_query($conn, $insertUserQuery);

            if ($result) {
                header('Location: login.html'); // Redirect to login page
                exit();
            } else {
                echo "Signup failed. Please try again.";
            }
        }
    }
}
?>
