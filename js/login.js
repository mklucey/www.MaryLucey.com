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
            dataType: 'json', // Specify the expected data type
            success: function (response) {
                alert(response.message); // Display the response message

                if (response.status === 'success') {
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
