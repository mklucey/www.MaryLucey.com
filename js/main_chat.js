$(document).ready(function () {
    // Fetch initial chat data
    $.ajax({
        url: 'main_chat.php',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            try {
                if (data && data.currentUserData && data.userList && data.chatMessages) {
                    // Display current user's username
                    $('#currentUsername').text(data.currentUserData.username);

                    // Display user list
                    var userListHtml = '';
                    data.userList.forEach(function (user) {
                        userListHtml += '<div data-user-id="' + user.id + '">' + user.username + '</div>';
                    });
                    $('#userList').html(userListHtml);

                    // Display chat messages
                    var chatMessagesHtml = '';
                    data.chatMessages.forEach(function (message) {
                        chatMessagesHtml += '<div><strong>' + message.sender_username + ':</strong> ' + message.content + ' (' + message.timestamp + ')</div>';
                    });
                    $('#chatMessages').html(chatMessagesHtml);
                } else {
                    console.error('Invalid or incomplete data received:', data);
                }
            } catch (error) {
                console.error('Error handling response:', error);
                console.log('Raw response:', data);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('Error fetching initial chat data:', textStatus, errorThrown);
            console.log(jqXHR.responseText);
        }
    });

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
                try {
                    // Check if the response is valid JSON
                    if (response && typeof response === 'object') {
                        // Assuming the response includes the newly sent message data
                        var newMessageHtml = '<div><strong>' + response.sender_username + ':</strong> ' + response.content + ' (' + response.timestamp + ')</div>';
                        $('#chatMessages').prepend(newMessageHtml); // Prepend the new message to the chat area
                    } else {
                        console.error('Invalid JSON response:', response);
                    }
                } catch (error) {
                    console.error('Error handling response:', error);
                    console.log('Raw response:', response);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error('Error submitting chat message:', textStatus, errorThrown);
                console.log(jqXHR.responseText);
            }
        });
    });
});
