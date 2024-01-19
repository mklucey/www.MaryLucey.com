<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Include the file with database connection details
    include 'db_connection.php';

    // Get user input
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Use prepared statements to prevent SQL injection
    $stmt = $conn->prepare("SELECT * FROM login WHERE username = ? AND password = ?");
    $stmt->bind_param("ss", $username, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // Login successful
        echo "Login successful. Enjoy chatting!";
    } else {
        // Login failed
        echo "Login failed. Please try again";
    }

    // Close the statement
    $stmt->close();

    // No need to close the connection here if it's handled in db_connection.php
}
?>
