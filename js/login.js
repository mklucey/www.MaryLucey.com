$(document).ready(function () {
	$('#loginForm').submit(function (event) {
		event.preventDefault();
		
		var username = $('#username').val();
        var password = $('#password').val();
		
		 $.ajax({
            type: 'POST',
            url: 'login.php',
            data: {
                username: username,
                password: password
            },

