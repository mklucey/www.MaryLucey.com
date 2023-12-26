$(document).ready(function () {
	$('#signupForm').submit(function (event) {
		event.preventDefault();
		
		var username = $('#username').val();
        var password = $('#password').val();
        var email = $('#email').val();
		
		 // Validate input
        if (username === '' || password === '' || email === '') {
            alert("Signup failed. Please fill out all fields.");
		 } else {
            // Send data to the server using AJAX
            $.ajax({
                type: 'POST',
                url: 'signup.php',
                data: {
                    username: username,
                    password: password, // Send the plain password
                    email: email
                },
				success: function (response) {
                    alert(response);
                    if (response.includes("successful")) {
                        window.location.href = 'login.html'; // Redirect to login page
                    } else {
                        // Signup failed, stay on the signup page
                    }
                },
				 error: function () {
                     alert("Signup failed. Please try again.");
                }
            });
        }
    });
});
