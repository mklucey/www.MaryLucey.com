<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: login.html");
    exit();
}

require_once 'db_connection.php';

$user_id = $_SESSION['user_id'];
$sql = "SELECT * FROM users WHERE id = '$user_id'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();

    // Display online users
    $sqlAllUsers = "SELECT * FROM users WHERE id != '$user_id'";
    $resultAllUsers = $conn->query($sqlAllUsers);

    echo "<h1>Main Chat</h1>";
	
	 if ($resultAllUsers->num_rows > 0) {
        echo "Users online:<br>";
        while ($row = $resultAllUsers->fetch_assoc()) {
            echo $row['username'] . "<br>";
        }
    } else {
        echo "No users online.";
    }
	
	// Handle chat message submission
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $message = $_POST['message'];

        // Insert the chat message into the database or handle as needed
        // For example, you can insert the message into a 'messages' table
        $insertMessageSQL = "INSERT INTO messages (user_id, message) VALUES ('$user_id', '$message')";
        if ($conn->query($insertMessageSQL) === TRUE) {
            echo "<p>Message sent: $message</p>";
        } else {
            echo "Error: " . $insertMessageSQL . "<br>" . $conn->error;
        }
    }
	
	 // Sample: Display recent chat messages
    $sqlRecentMessages = "SELECT * FROM messages WHERE user_id = '$user_id' ORDER BY timestamp DESC LIMIT 10";
    $resultRecentMessages = $conn->query($sqlRecentMessages);

    echo "<h2>Recent Messages</h2>";

    if ($resultRecentMessages->num_rows > 0) {
        while ($row = $resultRecentMessages->fetch_assoc()) {
            echo "<p>" . $row['message'] . "</p>";
        }
    } else {
        echo "No recent messages.";
    }
	
	} else {
        echo "User not found";
    }

$conn->close();




?>