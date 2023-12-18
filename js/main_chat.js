// Handle chat form submission
$('#chatForm').submit(function(event) {
    event.preventDefault();

    var message = $('#message').val();
    var receiverId = $('#userList div.active').data('user-id');

    // Perform AJAX request to handle the form submission in the same main_chat.php file
    $.ajax({
        url: 'main_chat.php',
        method: 'POST',
        data: { message: message, receiver_id: receiverId },
        dataType: 'text', // Treat the response as plain text
        success: function(response) {
            try {
                // Try to parse the response as JSON
                var jsonResponse = JSON.parse(response);

                // Handle success response
                console.log(jsonResponse);

                // Assuming the response includes the newly sent message data
                var newMessageHtml = '<div><strong>' + jsonResponse.sender_username + ':</strong> ' + jsonResponse.content + ' (' + jsonResponse.timestamp + ')</div>';
                $('#chatMessages').prepend(newMessageHtml); // Prepend the new message to the chat area
            } catch (e) {
                // Log an error if JSON parsing fails
                console.error('Error parsing JSON response:', e);
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // Log specific error details to the console
            console.error('Error submitting chat message:', textStatus, errorThrown);
        }
    });
});
