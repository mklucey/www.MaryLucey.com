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
                if (response.success) {
                    alert('Login successful. Enjoy chatting!');
                    window.location.href = 'main_chat.html'; // Redirect to main chat page
                } else {
                    alert('Login failed. Please try again.');
                }
            }
        });
    });
});
