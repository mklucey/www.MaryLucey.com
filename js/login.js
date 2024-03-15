// Updated JavaScript code to handle login form response object correctly

$(document).ready(function() {
    $('#loginForm').submit(function(e) {
        e.preventDefault(); // Prevent form submission

        // Get form data
        var formData = $(this).serialize();

        // Send AJAX request
        $.ajax({
            type: 'POST',
            url: 'login.php',
            data: formData,
            dataType: 'json', // Specify JSON data type
            success: function(response) {
                if (response && response.success) {
                    alert('Login successful. Enjoy chatting!');
                    window.location.href = 'main_chat.html'; // Redirect to main chat page
                } else {
                    if (response && response.error) {
                        alert('Login failed: ' + response.error);
                    } else {
                        alert('Login failed. Please try again.');
                    }
                }
            },
            error: function(xhr, status, error) {
                console.error('AJAX Error:', error);
            }
        });
    });
});
