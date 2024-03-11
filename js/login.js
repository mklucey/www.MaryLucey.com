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

                // Debugging statement
                console.log("Response from server: ", response);

                // Redirect to main_chat.html on successful login
                if (response === "Login successful") {
                    window.location.href = "main_chat.html";
                }
            },
            error: function(xhr, status, error) {
                // Debugging statement for AJAX error
                console.log("AJAX error:", error);
            }
        });
    });
});
