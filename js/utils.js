emailjs.init("ZPHPAOtgqKCu_pG1B");
// Utility functions
function logAction(action, details) {
    console.log(`[${new Date().toISOString()}] ${action}: ${details}`);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function sendEmail(to, subject, body) {
    // EmailJS v4 API
    emailjs.send("service_2zdhhvf", "template_uwi7zqi", {
        to_email: to,
        subject: subject,
        message: body
    }).then(() => {
        logAction("Email Sent", `To: ${to}, Subject: ${subject}`);
    }).catch(err => console.error("Email send failed:", err));
}

function showSection(sectionId) {
    document.querySelectorAll('#app > div').forEach(div => div.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}