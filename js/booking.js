// Handles booking and history

// Show booking form when "Book Cylinder" is clicked
document.getElementById('book-cylinder').addEventListener('click', () => {
    document.getElementById('booking-form').style.display = 'block';
});

// Submit booking (fixed: changed from 'submit' to 'click' event)
document.getElementById('submit-booking').addEventListener('click', (e) => {
    e.preventDefault();  // Prevent any default behavior
    const payment = document.getElementById('payment-method').value;
    const user = auth.currentUser;
    if (!user) {
        alert('Please log in first.');
        return;
    }
    // Check if user has barrels left
    db.collection('users').doc(user.uid).get().then(doc => {
        const userData = doc.data();
        if (userData.barrels <= 0) {
            alert('No barrels available. Contact admin.');
            return;
        }
        // Proceed with booking
        db.collection('bookings').add({
            userId: user.uid,
            status: 'pending',
            payment,
            date: new Date()
        }).then(() => {
            logAction("Booking Submitted", `User: ${user.email}, Payment: ${payment}`);
            sendEmail(user.email, "Booking Acknowledgment", "Your booking is pending approval.");
            // Handle payment-specific feedback
            if (payment === 'paytm') {
                alert('Booking submitted! Scan the QR code below to pay.');
                // Display QR code (replace with your actual Paytm QR URL)
                document.getElementById('booking-form').innerHTML += '<br><img src="https://example.com/paytm-qr.png" alt="Paytm QR" style="max-width: 200px;">';
            } else {
                alert('Booking submitted for Cash on Delivery!');
            }
            document.getElementById('booking-form').style.display = 'none';  // Hide form after submit
        }).catch(err => {
            console.error('Booking failed:', err);
            alert('Booking failed. Try again.');
        });
    }).catch(err => {
        console.error('Error fetching user data:', err);
        alert('Error checking account. Try again.');
    });
});

// View booking history
document.getElementById('view-history').addEventListener('click', () => {
    const user = auth.currentUser;
    if (!user) {
        alert('Please log in first.');
        return;
    }
    db.collection('bookings').where('userId', '==', user.uid).get().then(snapshot => {
        const list = document.getElementById('history-list');
        list.innerHTML = '<h3>Your Booking History</h3>';
        if (snapshot.empty) {
            list.innerHTML += '<p>No bookings found.</p>';
        } else {
            snapshot.forEach(doc => {
                const data = doc.data();
                list.innerHTML += `<p>Status: ${data.status}, Payment: ${data.payment}, Date: ${data.date.toDate()}</p>`;
            });
        }
    }).catch(err => {
        console.error('Error fetching history:', err);
        alert('Error loading history.');
    });
});

// Load notices only if authenticated
auth.onAuthStateChanged(user => {
    if (user) {
        db.collection('notices').onSnapshot(snapshot => {
            const noticesDiv = document.getElementById('notices');
            noticesDiv.innerHTML = '<h3>Notices</h3>';
            if (snapshot.empty) {
                noticesDiv.innerHTML += '<p>No notices available.</p>';
            } else {
                snapshot.forEach(doc => {
                    noticesDiv.innerHTML += `<p>${doc.data().text}</p>`;
                });
            }
        });
    }
});