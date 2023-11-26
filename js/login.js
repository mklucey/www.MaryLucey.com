document.addEventListener('DOMContentLoaded', function() {
	const loginForm = document.getElementById('loginForm');
	const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
	
	 // Event listener for submitting the login form
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
