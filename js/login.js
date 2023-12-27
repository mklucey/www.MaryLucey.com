$(document).ready(function () {
    $('#loginForm').submit(function (event) {
        event.preventDefault();
		
		var username = $('#username').val();
        var password = $('#password').val();

