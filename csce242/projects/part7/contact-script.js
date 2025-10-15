document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const messageDiv = document.getElementById('form-message');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');

        let isValid = true;

        [name, email, subject, message].forEach(field => {
            field.classList.remove('error');
        });

        messageDiv.textContent = '';
        messageDiv.className = 'form-message';

        if (name.value.trim() === '') {
            name.classList.add('error');
            isValid = false;
        }

        if (email.value.trim() === '') {
            email.classList.add('error');
            isValid = false;
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value.trim())) {
                email.classList.add('error');
                isValid = false;
            }
        }

        if (subject.value.trim() === '') {
            subject.classList.add('error');
            isValid = false;
        }

        if (message.value.trim() === '') {
            message.classList.add('error');
            isValid = false;
        }

        if (!isValid) {
            messageDiv.textContent = 'Please fill out all fields correctly.';
            messageDiv.className = 'form-message error';
            return;
        }

        const submitButton = form.querySelector('.submit-button');
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        try {
            await sendEmail(name.value, email.value, subject.value, message.value);
            
            messageDiv.textContent = 'Thank you! Your message has been sent successfully.';
            messageDiv.className = 'form-message success';
            
            form.reset();
        } catch (error) {
            messageDiv.textContent = 'Sorry, there was an error sending your message. Please try again.';
            messageDiv.className = 'form-message error';
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
        }
    });
});

async function sendEmail(name, email, subject, message) {
    const form = document.getElementById('contact-form');
    const formData = new FormData(form);

    const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const result = await response.json();
    
    if (!result.success) {
        throw new Error(result.message);
    }

    return result;
}

