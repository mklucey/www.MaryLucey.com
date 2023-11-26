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
	
	  // Function to send a friend request to the server
    function sendFriendRequest(friendUsername) {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // Update the UI or handle success as needed
                    console.log('Friend request sent successfully');
                } else {
                    // Handle error response from the server
                    console.error('Failed to send friend request');
                }
            }
        };
		
		 xhr.open('POST', 'add_friend.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('friend_username=' + encodeURIComponent(friendUsername));
    }
});