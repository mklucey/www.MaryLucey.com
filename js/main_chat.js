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
		  
		   // Clear the input field
        messageInput.value = '';
    });
	
	// Function to send a message to the server
	function sendMessage(message) {
		const xhr = new XMLHttpRequest();
		 xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // Update the UI or handle success as needed
                    const newMessage = document.createElement('div');
                    newMessage.textContent = message;
                    messagesContainer.appendChild(newMessage);
                } else {
                    // Handle error response from the server
                    console.error('Failed to send message');
                }
            }
        };
		
		xhr.open('POST', 'main_chat.php', true);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.send('message=' + encodeURIComponent(message));
    }
	
	// Function to periodically fetch and update messages
	function fetchMessages() {
		const xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
		 if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // Update the UI with the fetched messages
                    messagesContainer.innerHTML = xhr.responseText;
                } else {
                    // Handle error response from the server
                    console.error('Failed to fetch messages');
                }
            }
        };

        xhr.open('GET', 'main_chat.php', true);
        xhr.send();
    }



