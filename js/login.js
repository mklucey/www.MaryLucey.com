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
            dataType: "json", // Expect JSON response
            success: function(response) {
                // Display the response message
                alert(response.message);

                // Debugging statement
                console.log("Response from server: ", response);

                // Redirect to main_chat.html on successful login
                if (response.status === "success") {
                    window.location.href = "main_chat.html";
                }
            },
            error: function(xhr, status, error) {
                // Display error message for AJAX error
                alert("Login failed. Please try again.");
                console.log("AJAX error:", error);
            }
        });
    });
});
