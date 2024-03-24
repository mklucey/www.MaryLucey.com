<?php
include 'db_connection.php'; // Include the database connection script

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Fetch username and password from form
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Check if username and password are correct
    $sql = "SELECT * FROM login WHERE username = '$username' AND password = '$password'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        // Login successful
        echo "Login successful. Enjoy chatting";
        // Redirect to main_chat.html
        header("Location: main_chat.html");
        exit;
    } else {
        // Login failed
        echo "Login failed. Please try again";
    }
}

mysqli_close($conn);
?>
