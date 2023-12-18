// Handle chat form submission
$('#chatForm').submit(function (event) {
    event.preventDefault();

    var message = $('#message').val();
    var receiverId = $('#userList div.active').data('user-id');

    // Perform AJAX request to handle the form submission in the same main_chat.php file
    $.ajax({
        url: 'main_chat.php',
        method: 'POST',
        data: { message: message, receiver_id: receiverId },
        dataType: 'json',
        success: function (response) {
            // Check if the response is valid JSON
            if (response && typeof response === 'object') {
                // Handle success response
                console.log(response);

                // Assuming the response includes the newly sent message data
                var newMessageHtml = '<div><strong>' + response.sender_username + ':</strong> ' + response.content + ' (' + response.timestamp + ')</div>';
                $('#chatMessages').prepend(newMessageHtml); // Prepend the new message to the chat area
            } else {
                console.error('Invalid JSON response:', response);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            // Log specific error details to the console
            console.error('Error submitting chat message:', textStatus, errorThrown);

            // Log the response text for further debugging
            console.log(jqXHR.responseText);
        }
    });
});
