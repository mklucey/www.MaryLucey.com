<?php
// Enable error reporting for debugging purposes
error_reporting(E_ALL);
ini_set('display_errors', 1);


include 'db_connection.php';

session_start();

if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}

$currentUserId = $_SESSION['user_id'];
$sqlCurrentUser = "SELECT * FROM users WHERE id = $currentUserId";
$resultCurrentUser = mysqli_query($conn, $sqlCurrentUser);

if ($resultCurrentUser && mysqli_num_rows($resultCurrentUser) > 0) {
    $currentUserData = mysqli_fetch_assoc($resultCurrentUser);
} else {
    echo json_encode(['error' => 'User not found.']);
    exit();
}

$sqlUserList = "SELECT id, username FROM users WHERE id != $currentUserId";
$resultUserList = mysqli_query($conn, $sqlUserList);

$userListData = [];

while ($row = mysqli_fetch_assoc($resultUserList)) {
    $userListData[] = ['id' => $row['id'], 'username' => $row['username']];
}

// Fetch chat messages
$sqlChatMessages = "SELECT m.content, m.timestamp, u.username AS sender_username FROM messages m
                   INNER JOIN users u ON m.sender_id = u.id
                   WHERE m.receiver_id = $currentUserId
                   ORDER BY m.timestamp DESC
                   LIMIT 10"; // Adjust the query based on your requirements

$resultChatMessages = mysqli_query($conn, $sqlChatMessages);

$chatMessages = [];

while ($row = mysqli_fetch_assoc($resultChatMessages)) {
    $chatMessages[] = [
        'content' => $row['content'],
        'timestamp' => $row['timestamp'],
        'sender_username' => $row['sender_username']
    ];
}

// Return JSON data
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Handle the form submission and return the newly sent message data
    $messageContent = $_POST['message'];
    $receiverId = $_POST['receiver_id']; // Assuming you have a receiver_id in the form data

    // Perform the necessary database operations to save the new message
    $sqlInsertMessage = "INSERT INTO messages (sender_id, receiver_id, content) VALUES (?, ?, ?)";
    $stmtInsertMessage = mysqli_prepare($conn, $sqlInsertMessage);

    // Assuming you have a session variable for the sender_id
    $senderId = $_SESSION['user_id'];

    mysqli_stmt_bind_param($stmtInsertMessage, "iis", $senderId, $receiverId, $messageContent);
    $resultInsertMessage = mysqli_stmt_execute($stmtInsertMessage);

    if (!$resultInsertMessage) {
        echo json_encode(['error' => 'Error saving the message to the database.']);
        exit();
    }

    // Assuming the response includes the newly sent message data
    $response = [
        'content' => $messageContent,
        'timestamp' => date('Y-m-d H:i:s'), // Use the current timestamp
        'sender_username' => $currentUserData['username']
    ];

    // Set the content type to JSON
    header('Content-Type: application/json');
    
    echo json_encode($response);
    exit();
} else {
    // Return initial data for the chat page
    $responseData = [
        'currentUserData' => $currentUserData,
        'userList' => $userListData,
        'chatMessages' => $chatMessages
    ];

    // Set the content type to JSON
    header('Content-Type: application/json');
    
    echo json_encode($responseData);
    exit();
}
?>
