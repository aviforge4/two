document.addEventListener('DOMContentLoaded', function() {
    // Event listener for the search form
    const searchForm = document.getElementById('search-form');
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Handle search functionality (e.g., AJAX request)
        const searchTerm = searchForm.querySelector('input[type="search"]').value;
        console.log('Searching for:', searchTerm);
        // Implement search logic here...
    });

    // Example content loading for tabs
    const tabs = document.querySelectorAll('.nav-tabs .nav-link');
    tabs.forEach(tab => {
        tab.addEventListener('click', function(event) {
            event.preventDefault();
            const tabId = tab.getAttribute('href').substring(1);
            loadTabContent(tabId);
        });
    });

    // Function to load content for a specific tab
    function loadTabContent(tabId) {
        console.log('Loading content for tab:', tabId);
        // Implement AJAX request to load tab content here...
    }

    // Load default active tab content on page load
    loadTabContent('home');

    // Handle upload form submission
    const uploadForm = document.getElementById('uploadForm');
    const uploadStatus = document.getElementById('uploadStatus');

    uploadForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(uploadForm);

        fetch('/api/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                uploadStatus.textContent = 'Content uploaded successfully!';
                uploadStatus.classList.add('text-success');
                uploadStatus.classList.remove('text-danger');
            } else {
                uploadStatus.textContent = 'Failed to upload content.';
                uploadStatus.classList.add('text-danger');
                uploadStatus.classList.remove('text-success');
            }
        })
        .catch(error => {
            uploadStatus.textContent = 'An error occurred. Please try again.';
            uploadStatus.classList.add('text-danger');
            uploadStatus.classList.remove('text-success');
        });
    });

    // Profile modal functionality
    const profileButton = document.getElementById('profileButton');
    const profileModal = new bootstrap.Modal(document.getElementById('profileModal'), {
        keyboard: false
    });

    profileButton.addEventListener('click', function() {
        profileModal.show();
    });

    // Handle profile picture update
    const profilePicInput = document.getElementById('profilePicInput');
    const profilePicDisplay = document.getElementById('profilePicDisplay');

    profilePicInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profilePicDisplay.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Handle profile information update
    const profileForm = document.getElementById('profileForm');
    profileForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Implement profile update logic here...
        console.log('Profile information updated');
    });

    // Handle profile deletion
    const deleteProfileButton = document.getElementById('deleteProfileButton');
    deleteProfileButton.addEventListener('click', function() {
        // Implement profile deletion logic here...
        console.log('Profile deleted');
    });

    // Handle logout
    const logoutButton = document.getElementById('logoutButton');
    logoutButton.addEventListener('click', function() {
        // Implement logout logic here...
        console.log('User logged out');
    });

    // Event listener for the menu button to show the menu options modal
    const menuButton = document.getElementById('menuButton');
    const menuOptionsModal = new bootstrap.Modal(document.getElementById('menuOptionsModal'), {
        keyboard: false
    });

    menuButton.addEventListener('click', function() {
        menuOptionsModal.show();
    });

    // Event listener for menu options modal to handle option selection
    const menuOptions = document.querySelectorAll('.menu-options-modal .list-group-item');

    menuOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove 'active' class from all options
            menuOptions.forEach(opt => opt.classList.remove('active'));
            // Add 'active' class to the clicked option
            option.classList.add('active');
            // Handle different menu option clicks here
            switch(option.dataset.option) {
                case 'general':
                    // Handle General menu option click
                    console.log('General clicked');
                    break;
                case 'settings':
                    // Handle Settings menu option click
                    console.log('Settings clicked');
                    break;
                case 'notification':
                    // Handle Notification menu option click
                    console.log('Notification clicked');
                    break;
                case 'dashboard':
                    // Handle Dashboard menu option click
                    console.log('Dashboard clicked');
                    break;
                case 'history':
                    // Handle History menu option click
                    console.log('History clicked');
                    break;
                case 'activity':
                    // Handle Activity menu option click
                    console.log('Activity clicked');
                    break;
                case 'media':
                    // Handle Media menu option click
                    console.log('Media clicked');
                    break;
                default:
                    console.log('Unknown option clicked');
            }
        });
    });
});
