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
			success: function (response) {
                alert(response); // Display the response message

                if (response.includes('Login successful')) {
                    // Redirect to the main chat page upon successful login
                    window.location.href = 'main_chat.html';
                }
            },
			 error: function () {
                 alert('Error submitting the form');
            }
        });
    });
});

