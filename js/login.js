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
                alert(response); // show the response from the php script
                if (response.includes("successful")) {
                    window.location.href = "main_chat.html"; // redirect to the main_chat.html page
                }
            }
        });
    });
});
