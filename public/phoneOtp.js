function sendOTP() {
    const phone = document.getElementById('phone').value;

    fetch('/send-otp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phone: phone })
    })
    .then(response => response.json())
    .then(data => {
        if(data.success) {
            alert('OTP sent successfully!');
        } else {
            alert('Failed to send OTP');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
