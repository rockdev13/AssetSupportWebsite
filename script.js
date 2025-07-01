// Initialize EmailJS with your public key
emailjs.init('CktD8WLbEhwggjPuN'); // Replace with your EmailJS public key

document.getElementById('supportForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    const templateParams = {
        to_email: 'axelborg.assets@gmail.com',
        from_email: document.getElementById('email').value,
        asset: document.getElementById('asset').value,
        summary: document.getElementById('summary').value,
        details: document.getElementById('details').value,
        user_email: document.getElementById('email').value
    };
    
    try {
        // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual EmailJS IDs
        await emailjs.send('service_kyup2b5', 'template_rpqe4se', templateParams);
        
        showStatus('Support request sent successfully!', 'success');
        document.getElementById('supportForm').reset();
    } catch (error) {
        console.error('Failed to send email:', error);
        showStatus('Failed to send support request. Please try again.', 'error');
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Support Request';
    }
});

function showStatus(message, type) {
    const statusElement = document.getElementById('statusMessage');
    statusElement.textContent = message;
    statusElement.className = `status-message ${type}`;
    statusElement.style.display = 'block';
    
    setTimeout(() => {
        statusElement.style.display = 'none';
    }, 5000);
}