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




