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




