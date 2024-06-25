document.addEventListener('DOMContentLoaded', function() {
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
    });
