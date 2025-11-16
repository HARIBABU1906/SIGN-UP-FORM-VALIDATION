document.addEventListener('DOMContentLoaded', function () {
    'use strict'; // Enforce strict mode

    const form = document.querySelector('.needs-validation');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    // Function to check if passwords match
    const checkPasswordMatch = () => {
        if (passwordInput.value !== confirmPasswordInput.value) {
            // Set a custom validation message if they don't match
            confirmPasswordInput.setCustomValidity('Passwords do not match');
        } else {
            // Clear the custom validation message if they do match
            confirmPasswordInput.setCustomValidity('');
        }
    };

    // 🚀 Real-time Validation (Error Handling)
    // Add event listeners to check match as the user types
    passwordInput.addEventListener('input', checkPasswordMatch);
    confirmPasswordInput.addEventListener('input', checkPasswordMatch);


    // 🚀 Form Submission Handler
    form.addEventListener('submit', function (event) {
        
        // 1. Perform final check for password match before checking general validity
        checkPasswordMatch();

        // 2. Check general form validity (including HTML5 required, minlength, etc.)
        if (!form.checkValidity()) {
            // Prevent form submission if validation fails (Error Handling)
            event.preventDefault();
            event.stopPropagation();
        }

        // 3. Apply Bootstrap's visual feedback classes
        // This line adds the 'was-validated' class which displays the feedback messages
        form.classList.add('was-validated');
    }, false);

});
