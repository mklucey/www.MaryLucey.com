document.addEventListener('DOMContentLoaded', function() {
	const addFriendForm = document.getElementById('addFriendForm');
    const friendUsernameInput = document.getElementById('friend_username');
	
	 // Event listener for submitting a friend request
    addFriendForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const friendUsername = friendUsernameInput.value.trim();

        if (friendUsername !== '') {
            // Send the friend request to the server using AJAX
            sendFriendRequest(friendUsername);
        }

        // Clear the input field
        friendUsernameInput.value = '';
    });