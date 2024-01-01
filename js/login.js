// login.js

$(document).ready(function() {
    $("#loginForm").submit(function(e) {
        e.preventDefault(); // prevent the form from submitting in the traditional way

        // AJAX request
        $.ajax({
            type: "POST",
            url: "login.php",
            data: $("#loginForm").serialize(), // serializes the form's elements
            success: function(response) {
                console.log(response); // Log the response in the console for debugging
                if (response.trim() === "Login successful. Enjoy chatting") {
                    alert("Login successful. Enjoy chatting"); // Debugging: show an alert
                    window.location.href = "main_chat.html"; // redirect to the main_chat.html page
                } else {
                    alert("Login failed. Please try again"); // Debugging: show an alert
                }
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText); // Log any errors to the console
            }
        });
    });
});
