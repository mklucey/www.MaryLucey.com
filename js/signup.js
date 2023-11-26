// signup.js
document.addEventListener('DOMContentLoaded', function() {
	const signupForm = document.getElementById('signupForm');
	const usernameInput = document.getElementById('username');
	const passwordInput = document.getElementById('password');
	const emailAddressInput = document.getElementById('email_address');
	
	// Event listener for submitting the signup form
	signupForm.addEventListener('submit', function(event) {
		event.preventDefault();
		
		const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        const emailAddress = emailAddressInput.value.trim();
		
		 if (username !== '' && password !== '' && emailAddress !== '') {
            // Send the signup request to the server using AJAX
            signup(username, password, emailAddress);
         }

        // Clear the input fields
        usernameInput.value = '';
        passwordInput.value = '';
        emailAddressInput.value = '';
    });
	
	// Function to send a signup request to the server
    function signup(username, password, emailAddress) {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // Redirect or update the UI based on the server response
                    console.log('Signup successful');
                } else {
                    // Handle error response from the server
                    console.error('Failed to signup');
                }
            }
        };

