// Handles authentication
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (!validateEmail(email)) return alert('Invalid email');
    
    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            logAction("Login", `User: ${email}`);
            checkUserRole();
        })
        .catch(err => alert(err.message));
});

document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    if (!validateEmail(email)) return alert('Invalid email');
    
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            db.collection('users').doc(user.uid).set({
                name, email, role: 'user', barrels: 12, expiry: new Date(Date.now() + 365*24*60*60*1000)
            });
            logAction("Registration", `User: ${email}`);
            sendEmail(email, "Welcome!", "You have 12 barrels for 1 year.");
            showSection('user-dashboard');
        })
        .catch(err => alert(err.message));
});

document.getElementById('show-register').addEventListener('click', () => showSection('register-section'));
document.getElementById('show-login').addEventListener('click', () => showSection('auth-section'));

function checkUserRole() {
    auth.onAuthStateChanged(user => {
        if (user) {
            db.collection('users').doc(user.uid).get().then(doc => {
                const role = doc.data().role;
                showSection(role === 'admin' ? 'admin-dashboard' : 'user-dashboard');
            });
        }
    });
}