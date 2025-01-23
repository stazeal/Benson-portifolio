// Form Validation
function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    // Get form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Error elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    let isValid = true;

    // Name validation
    if (name === '') {
        nameError.textContent = 'Name is required.';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Message validation
    if (message === '') {
        messageError.textContent = 'Message is required.';
        isValid = false;
    } else {
        messageError.textContent = '';
    }

    // Submit the form if valid
    if (isValid) {
        document.querySelector('.contact-form').submit();
    }
}

// Add event listener for the form
const form = document.querySelector('.contact-form');
form.addEventListener('submit', validateForm);
