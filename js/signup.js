$(document).ready(function () {
	$('#signupForm').submit(function (event) {
		event.preventDefault();
		
		var username = $('#username').val();
		var password = $('#password').val();
		var email = $('#email').val();