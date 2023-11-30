document.addEventListener('DOMContentLoaded', function() {
	const profileForm = document.getElementById('profileForm');
    const newProfilePictureInput = document.getElementById('new_profile_picture');
	
	 // Event listener for submitting a new profile picture
     profileForm.addEventListener('submit', function(event) {
         event.preventDefault();

