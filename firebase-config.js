const firebaseConfig = {
  apiKey: "AIzaSyCuIM-BpKhG-uRjTzj5wUbeBsqJnpmCT2I",
  authDomain: "gas-booking-system-76446.firebaseapp.com",
  projectId: "gas-booking-system-76446",
  storageBucket: "gas-booking-system-76446.firebasestorage.app",
  messagingSenderId: "949610966068",
  appId: "1:949610966068:web:19ee0a8b47992204f7ae61",
  measurementId: "G-543YV1JCQE"
};
// Initialize Firebase (v8 style)
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

console.log("Firebase initialized successfully");  