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
            dataType: "json", // Expect JSON response
            success: function(response){
                alert(response.message); // Display the message from PHP
                if(response.status === "success") {
                    window.location.href = "main_chat.html";
                }
            },
            error: function(){
                alert("Error during AJAX request");
            }
        });
    });
});
