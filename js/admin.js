// Admin functionalities
document.getElementById('view-users').addEventListener('click', () => {
    db.collection('users').get().then(snapshot => {
        const list = document.getElementById('users-list');
        list.innerHTML = '';
        snapshot.forEach(doc => {
            const data = doc.data();
            list.innerHTML += `<p>${data.name} - ${data.email} - Barrels: ${data.barrels}</p>`;
        });
    });
});

document.getElementById('manage-requests').addEventListener('click', () => {
    db.collection('bookings').where('status', '==', 'pending').get().then(snapshot => {
        const list = document.getElementById('requests-list');
        list.innerHTML = '';
        snapshot.forEach(doc => {
            list.innerHTML += `<p>ID: ${doc.id} - Approve: <button onclick="approve('${doc.id}')">Yes</button> Deny: <button onclick="deny('${doc.id}')">No</button></p>`;
        });
    });
});

function approve(id) {
    db.collection('bookings').doc(id).update({ status: 'approved' });
    logAction("Request Approved", `Booking ID: ${id}`);
}

function deny(id) {
    db.collection('bookings').doc(id).update({ status: 'denied' });
    logAction("Request Denied", `Booking ID: ${id}`);
}

document.getElementById('submit-notice').addEventListener('click', () => {
    const text = document.getElementById('notice-text').value;
    db.collection('notices').add({ text, date: new Date() });
    logAction("Notice Added", text);
});