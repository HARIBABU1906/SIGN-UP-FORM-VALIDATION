document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function (event) {

        // If form is not valid, stop submitting
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            // Form is valid, show success alert
            event.preventDefault(); // Remove if you want real submit
            alert("Registration Successful! 🎉");
            
            // Optional: Reset form
            form.reset();
            form.classList.remove('was-validated');
            return; // stop further code
        }

        form.classList.add('was-validated');

    }, false);
});
