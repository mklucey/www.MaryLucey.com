$(document).ready(function() {
	// Fetch and display current user's data
	 $.ajax({
        url: 'main_chat.php',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            $('#currentUsername').text(data.currentUserData.username);
