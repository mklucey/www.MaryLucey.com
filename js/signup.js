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
                var parts = response.split("|");
                var status = parts[0];
                var message = parts[1];

                if (status === "success") {
                    alert(message);
                    window.location.href = 'login.html'; // Redirect to login page
                } else {
                    $('#signupError').text(message);
                }
            },
            error: function () {
                alert('An error occurred during the signup process. Please try again.');
            }
        });
    });
});
