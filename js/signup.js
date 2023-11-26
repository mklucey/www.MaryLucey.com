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
