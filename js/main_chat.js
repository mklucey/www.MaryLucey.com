// main_chat.js
document.addEventListener('DOMContentLoaded', function() {
	const messageForm = document.getElementById('messageForm');
	const messageInput = document.getElementById('messageInput');
	const messagesContainer = document.getElementById('messages');
	
	// Event listener for submitting a message
	 messageForm.addEventListener('submit', function(event) {
		 event.preventDefault();
		 
		 const message = messageInput.value.trim();
		 
		  if (message !== '') {
			  // Send the message to the server using AJAX
             sendMessage(message);
          }
