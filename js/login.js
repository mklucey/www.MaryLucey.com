$(document).ready(function(){
    $("#loginForm").submit(function(event){
        event.preventDefault();
        var username = $("#username").val();
        var password = $("#password").val();

        // Validate input fields
        if(username === '' || password === '') {
            alert("Please enter both username and password");
            return;
        }

        // AJAX request to login.php
        $.ajax({
            type: "POST",
            url: "login.php",
            data: {username: username, password: password},
            success: function(response){
                alert(response); // Display the message from PHP
                if(response.includes("successful")) {
                    window.location.href = "main_chat.html";
                }
            },
            error: function(){
                alert("Error during AJAX request");
            }
        });
    });
});

