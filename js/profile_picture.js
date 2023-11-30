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
	
	  // Function to send a new profile picture to the server
    function updateProfilePicture(newProfilePicture) {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // Update the UI or handle success as needed
                    console.log('Profile picture updated successfully');
                } else {
                    // Handle error response from the server
                    console.error('Failed to update profile picture');
                }
            }
        };


