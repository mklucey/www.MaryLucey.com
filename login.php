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
            header("Location: main_chat.html");
            exit(); // Ensure no further code execution after redirection
        } else {
            // Incorrect password
            echo "Incorrect password";
        }
    } else {
        // User not found
        echo "User not found";
    }

    // Close the statement
    $stmt->close();

    // Close the connection
    $conn->close();
}
?>
