$(document).ready(function() {
    // Fetch and display current user's data
    $.ajax({
        url: 'main_chat.php',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            $('#currentUsername').text(data.currentUserData.username);

            // Display user list
            var userListHtml = '';
            $.each(data.userList, function(index, user) {
                userListHtml += '<div data-user-id="' + user.id + '">' + user.username + '</div>';
            });
            $('#userList').html(userListHtml);

            // Display chat messages
            var chatMessagesHtml = '';
            $.each(data.chatMessages, function(index, message) {
                chatMessagesHtml += '<div><strong>' + message.sender_username + ':</strong> ' + message.content + ' (' + message.timestamp + ')</div>';
            });
            $('#chatMessages').html(chatMessagesHtml);
        },
        error: function() {
            console.error('Error fetching data');
        }
    });

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
            dataType: 'json',
            success: function(response) {
                // Handle success response
                console.log(response);

                // Assuming the response includes the newly sent message data
                var newMessageHtml = '<div><strong>' + response.sender_username + ':</strong> ' + response.content + ' (' + response.timestamp + ')</div>';
                $('#chatMessages').prepend(newMessageHtml); // Prepend the new message to the chat area
            },
            error: function() {
                // Handle error
                console.error('Error submitting chat message');
            }
        });
    });

    // Handle user selection
    $('#userList').on('click', 'div', function() {
        $('#userList div').removeClass('active');
        $(this).addClass('active');
    });
});
