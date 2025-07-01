document.getElementById('supportForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        asset: document.getElementById('asset').value,
        summary: document.getElementById('summary').value,
        details: document.getElementById('details').value,
        userEmail: document.getElementById('email').value
    };
    
    const subject = `Support Request: ${formData.asset} - ${formData.summary}`;
    
    const body = `Asset: ${formData.asset}
    
Summary: ${formData.summary}

Details:
${formData.details}

User Email: ${formData.userEmail}`;
    
    const mailtoLink = `mailto:axelborg.assets@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    showStatus('Support email opened! Please send the email from your email client.', 'success');
    
    setTimeout(() => {
        document.getElementById('supportForm').reset();
    }, 2000);
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