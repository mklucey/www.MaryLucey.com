$(document).ready(function () {
    $('#loginForm').submit(function (event) {
        event.preventDefault();

        var formData = new FormData(this);

        $.ajax({
            type: 'POST',
            url: 'login.php',
            data: formData,
            contentType: false,
            processData: false,
            success: function (response) {
                alert(response);

                if (response.includes('Login successful. Enjoy chatting.')) {
                    window.location.href = 'main_chat.html';
                }
            },
            error: function () {
                alert('Usename and/or password is incorrect. Please try again.');
            }
        });
    });
});
