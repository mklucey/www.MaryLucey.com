// private_chat.js
document.addEventListener('DOMContentLoaded', function() {
	const privateMessageForm = document.getElementById('privateMessageForm');
	const privateMessageInput = document.getElementById('privateMessageInput');
    const privateMessagesContainer = document.getElementById('privateMessages');
	
	 // Event listener for submitting a private message
    privateMessageForm.addEventListener('submit', function(event) {
        event.preventDefault();
		
		const privateMessage = privateMessageInput.value.trim();

        if (privateMessage !== '') {
            // Send the private message to the server using AJAX
            sendPrivateMessage(privateMessage);
        }
		
		// Clear the input field
        privateMessageInput.value = '';
    });
	
	// Function to send a private message to the server
    function sendPrivateMessage(privateMessage) {
		const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
			if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // Update the UI with the fetched private messages
                    privateMessagesContainer.innerHTML = xhr.responseText;
                } else {
                    // Handle error response from the server
                    console.error('Failed to send private message');
                }
            }
        };
		
		xhr.open('POST', 'private_chat.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('private_message=' + encodeURIComponent(privateMessage));
    }
	
	// Function to periodically fetch and update private messages
    function fetchPrivateMessages() {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // Update the UI with the fetched private messages
                    privateMessagesContainer.innerHTML = xhr.responseText;
                } else {
                    // Handle error response from the server
                    console.error('Failed to fetch private messages');
                }
            }
        };
		
		  xhr.open('GET', 'private_chat.php', true);
          xhr.send();
    }

    // Fetch private messages initially and set up a timer for periodic updates
    fetchPrivateMessages();
    setInterval(fetchPrivateMessages, 5000); // Update every 5 seconds (adjust as needed)
});





