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
        var receiverId = $('#userList div.active').data('user-id'); // Assuming you have an active class for the selected user

