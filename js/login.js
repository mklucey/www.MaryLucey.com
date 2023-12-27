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
            dataType: 'json', // Expect JSON response from the server
            success: function (response) {
                console.log('AJAX success:', response);

                if (response.status === 'success') {
                    console.log('Login successful. Enjoy chatting');
                    window.location.href = 'main_chat.html';
                } else {
                    alert(response.message);
                }
            },
            error: function (error) {
                console.error('AJAX error:', error);
                alert('Login failed. Please try again.');
            }
        });
    });
});
