$(document).ready(function () {
	$('#signupForm').submit(function (event) {
		event.preventDefault();
		
		var username = $('#username').val();
		var password = $('#password').val();
		var email = $('#email').val();
		
	    $.ajax({
			type: 'POST',
			url: 'signup.php',
			 data: {
                username: username,
                password: password,
                email: email
            },
			 success: function (response) {
                if (response === "success") {
			
			