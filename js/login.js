// login.js

$(document).ready(function() {
    $("#loginForm").submit(function(e) {
        e.preventDefault();

        $.ajax({
            type: "POST",
            url: "login.php",
            data: $("#loginForm").serialize(),
            dataType: "json", // Expect JSON response
            success: function(response) {
                console.log(response);

                if (response.status === "success") {
                    alert("Login successful. Enjoy chatting");
                    window.location.href = "main_chat.html";
                } else {
                    alert("Login failed. Please try again");
                }
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });
});
