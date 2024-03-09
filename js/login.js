$(document).ready(function() {
    // Handle form submission using AJAX
    $("#loginForm").submit(function(e) {
        e.preventDefault();

        // Get form data
        var username = $("#username").val();
        var password = $("#password").val();

        // AJAX request to login.php
        $.ajax({
            type: "POST",
            url: "login.php",
            data: {
                username: username,
                password: password
            },
            success: function(response) {
                // Display the response message
                alert(response);

                // No need to handle redirection here, as PHP handles it on success
            }
        });
    });
});
