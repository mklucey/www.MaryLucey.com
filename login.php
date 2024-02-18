<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Include the file with database connection details
    include 'db_connection.php';

    // Get user input
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Use prepared statements to prevent SQL injection
    $stmt = $conn->prepare("SELECT * FROM login WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // User found, check password
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            // Login successful
            echo "Login successful. Enjoy chatting!";
        } else {
            // Incorrect password
            echo "Login failed. Please try again.";
        }
    } else {
        // User not found
        echo "Login failed. Please try again.";
    }

    // Close the statement
    $stmt->close();

    // No need to close the connection here if it's handled in db_connection.php
}
?>
