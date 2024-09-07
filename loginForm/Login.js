// Function to validate the signup form
function validateSignupForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name.trim() === '') {
        alert('Please enter your full name.');
        return false;
    }
    if (email.trim() === '' || !email.includes('@')) {
        alert('Please enter a valid email address.');
        return false;
    }
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return false;
    }

    return true;
}

// Function to validate the login form
function validateLoginForm() {
    const userId = document.getElementById('login-id').value;
    const password = document.getElementById('login-password').value;

    if (userId.trim() === '') {
        alert('Please enter your user ID.');
        return false;
    }
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return false;
    }

    return true;
}

// Function to validate the forgot password form
function validateForgotPasswordForm() {
    const email = document.getElementById('forgot-email').value;

    if (email.trim() === '' || !email.includes('@')) {
        alert('Please enter a valid email address.');
        return false;
    }

    return true;
}

// Add event listeners when the document is ready
document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            if (!validateSignupForm()) {
                event.preventDefault();
            }
        });
    }

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            if (!validateLoginForm()) {
                event.preventDefault();
            }
        });
    }

    const forgotPasswordForm = document.getElementById('forgot-password-form');
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', function(event) {
            if (!validateForgotPasswordForm()) {
                event.preventDefault();
            }
        });
    }
});
