$(document).ready(function() {
    $('#loginForm').submit(function(e) {
        e.preventDefault(); // Prevent form submission
        var username = $('#username').val();
        var password = $('#password').val();

        // AJAX call to login.php
        $.ajax({
            type: 'POST',
            url: 'login.php',
            data: {
                username: username,
                password: password
            },
            success: function(response) {
                // Display response message
                alert(response);
                if (response === "Login successful. Enjoy chatting") {
                    window.location.href = "main_chat.html";
                }
            }
        });
    });
});
