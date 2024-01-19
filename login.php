<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Include the file with database connection details
    include 'db_connection.php';

    // Get user input
    $username = $_POST["username"];
    $password = $_POST["password"];

    // SQL query to check if the provided username and password match in the database
    $sql = "SELECT * FROM login WHERE username = '$username' AND password = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Login successful
        echo "Login successful. Enjoy chatting!";
    } else {
        // Login failed
        echo "Login failed. Please try again";
    }

    // No need to close the connection here if it's handled in db_connection.php
}
?>
