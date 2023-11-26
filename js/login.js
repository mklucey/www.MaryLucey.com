document.addEventListener('DOMContentLoaded', function() {
	const loginForm = document.getElementById('loginForm');
	const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
	
	 // Event listener for submitting the login form
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
		
		const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username !== '' && password !== '') {
            // Send the login request to the server using AJAX
            login(username, password);
        }

        // Clear the input fields
        usernameInput.value = '';
        passwordInput.value = '';
    });
