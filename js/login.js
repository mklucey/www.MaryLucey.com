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
	
	 // Function to send a login request to the server
    function login(username, password) {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // Redirect or update the UI based on the server response
                    console.log('Login successful');
                } else {
                    // Handle error response from the server
                    console.error('Failed to login');
                }
            }
        };

        xhr.open('POST', 'login.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password));
    }
});
