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
