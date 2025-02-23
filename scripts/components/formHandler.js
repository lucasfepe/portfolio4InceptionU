// Constants
const EMAIL_JS_PUBLIC_KEY = "FA7CaRkml7_QcDlG3";
const EMAIL_JS_SERVICE_ID = 'service_j8owe5l';
const EMAIL_JS_TEMPLATE_ID = 'template_0rghbjo';
const FORM_ID = 'contact-form';
const LOADING_TEXT = 'Sending...';
const SUCCESS_MESSAGE = 'Message sent!';
const ERROR_MESSAGE = 'Failed to send message. Please try again.';

// Initialize EmailJS with your public key
export function initFormHandler() {
    (function () {
        emailjs.init(EMAIL_JS_PUBLIC_KEY);
    })();

    // Form submission handling
    document.getElementById(FORM_ID).addEventListener('submit', function (e) {
        e.preventDefault();

        // Show loading state
        const button = this.querySelector('button');
        const originalText = button.textContent;
        button.textContent = LOADING_TEXT;
        button.disabled = true;

        // Prepare template parameters
        const templateParams = {
            from_name: document.getElementById('name').value,
            from_email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // Send email using EmailJS
        emailjs.send(EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, templateParams)
            .then(() => {
                // Show success message
                button.textContent = SUCCESS_MESSAGE;
                this.reset();
            })
            .catch((error) => {
                // Show error message
                alert(ERROR_MESSAGE);
                console.error('EmailJS error:', error);
            })
            .finally(() => {
                setTimeout(() => {
                    // Reset button state
                    button.textContent = originalText;
                    button.disabled = false;
                }, 1000);
            });
    });
};
