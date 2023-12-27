$(document).ready(function () {
    $('#loginForm').submit(function (event) {
        event.preventDefault();

        var formData = $(this).serialize(); // Serialize the form data

        $.ajax({
            type: 'POST',
            url: 'login.php',
            data: formData,
            success: function (response) {
                alert(response);

                if (response.includes('Login successful. Enjoy chatting.')) {
                    window.location.href = 'main_chat.html';
                }
            },
            error: function () {
                alert('Username and/or password is incorrect. Please try again.');
            }
        });
    });
});
