document.addEventListener('DOMContentLoaded', function() {
    const uploadForm = document.getElementById('uploadForm');
    const uploadStatus = document.getElementById('uploadStatus');

    uploadForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Mock upload logic for demonstration purposes
        const formData = new FormData(uploadForm);
        uploadStatus.innerHTML = '<p>Uploading...</p>';

        setTimeout(() => {
            uploadStatus.innerHTML = '<p>Upload successful!</p>';
        }, 2000);
    });

    // Fetch and display followed profiles (mock data for demonstration)
    const followingContent = document.getElementById('followingContent');
    const followedProfiles = [
        { name: 'Alice', username: '@alice' },
        { name: 'Bob', username: '@bob' },
        { name: 'Charlie', username: '@charlie' },
    ];

    function displayFollowedProfiles() {
        followingContent.innerHTML = '';
        followedProfiles.forEach(profile => {
            const profileCard = document.createElement('div');
            profileCard.className = 'card';
            profileCard.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${profile.name}</h5>
                    <p class="card-text">${profile.username}</p>
                </div>
            `;
            followingContent.appendChild(profileCard);
        });
    }

    displayFollowedProfiles();
});
