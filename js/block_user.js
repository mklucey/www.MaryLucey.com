// block_user.js
document.addEventListener('DOMContentLoaded', function() {
    const blockUserForm = document.getElementById('blockUserForm');
    const blockedUsernameInput = document.getElementById('blocked_username');

    // Event listener for submitting a block user request
    blockUserForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const blockedUsername = blockedUsernameInput.value.trim();

        if (blockedUsername !== '') {
            // Send the block user request to the server using AJAX
            blockUser(blockedUsername);
        }

        // Clear the input field
        blockedUsernameInput.value = '';
    });

    // Function to send a block user request to the server
    function blockUser(blockedUsername) {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // Update the UI or handle success as needed
                    console.log('User blocked successfully');
                } else {
                    // Handle error response from the server
                    console.error('Failed to block user');
                }
            }
        };

        xhr.open('POST', 'block_user.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('blocked_username=' + encodeURIComponent(blockedUsername));
    }
});
