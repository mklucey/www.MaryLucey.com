$(document).ready(function () {
	$('#signupForm').submit(function (event) {
		event.preventDefault();
		
		var username = $('#username').val();
        var password = $('#password').val();
        var email = $('#email').val();
		
		 // Validate input
        if (username === '' || password === '' || email === '') {
            alert("Signup failed. Please fill out all fields.");
