document.addEventListener('DOMContentLoaded', function() {
	const profileForm = document.getElementById('profileForm');
    const newProfilePictureInput = document.getElementById('new_profile_picture');
	
	 // Event listener for submitting a new profile picture
     profileForm.addEventListener('submit', function(event) {
         event.preventDefault();
		 
		 const newProfilePicture = newProfilePictureInput.value.trim();

        if (newProfilePicture !== '') {
            // Send the new profile picture to the server using AJAX
            updateProfilePicture(newProfilePicture);
        }

        // Clear the input field
        newProfilePictureInput.value = '';
    });


