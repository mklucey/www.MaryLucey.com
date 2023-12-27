'use strict';

$(document).ready(function () {
    $('#loginForm').submit(function (event) {
        event.preventDefault();

        var formData = new FormData(this);

        $.ajax({
            type: 'POST',
            url: 'login.php',
            data: formData,
            contentType: false,
            processData: false,
            success: function (response) {
                console.log('AJAX success:', response);

                // Display success message
                alert('Login successful. Enjoy chatting.');

                // Redirect to main_chat.html
                window.location.href = 'main_chat.html';
            },
            error: function (error) {
                console.error('AJAX error:', error);

                // Display error message
                alert('Login failed. Please try again.');
            }
        });
    });
});
