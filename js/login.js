// Use strict mode to catch common coding mistakes
'use strict';

$(document).ready(function () {
    // Form submission event
    $('#loginForm').submit(function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Create a FormData object with the form data
        var formData = new FormData(this);

        // AJAX request
        $.ajax({
            type: 'POST',
            url: 'login.php',
            data: formData,
            contentType: false,
            processData: false,
            success: function (response) {
                // Display response
                alert(response);

                // Check if the response contains success message
                if (response.includes('Login successful. Enjoy chatting.')) {
                    // Redirect to the main chat page
                    window.location.href = 'main_chat.html';
                }
            },
            error: function () {
                // Display error message
                alert('Username and/or password is incorrect. Please try again.');
            }
        });
    });
});
