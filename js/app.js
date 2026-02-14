// Main app initialization
auth.onAuthStateChanged(user => {
    if (user) {
        checkUserRole();
    } else {
        showSection('auth-section');
    }
});