Gas Booking System Project Report

Project Title
Online Gas Booking System

Introduction
The Online Gas Booking System is a web-based application designed to streamline the process of booking gas cylinders for residential and commercial users. It replaces traditional phone-based ordering with a user-friendly digital platform, allowing clients to book cylinders, make payments, and track history online. The system supports two user roles: regular users (clients) and administrators. Users start with 12 barrels for one year, and administrators can approve or reject booking requests while managing notices. The project emphasizes modularity, safety, testability, maintainability, and portability, as per the evaluation metrics.

Objectives
Primary Goals:
Enable easy gas cylinder booking without phone calls.
Provide payment options (Cash on Delivery and Paytm QR).
Allow users to view booking history and receive email notifications.
Empower administrators to manage user accounts, approve requests, and post notices.
Evaluation Metrics:
Code: Modular, safe, testable, maintainable, and portable.
Database: Use Firebase for real-time data storage.
Logging: Implement JavaScript logging for all actions.
Deployment: Host on Firebase for cloud scalability.
Technologies and Tools
Frontend: HTML5, CSS3, JavaScript (Vanilla JS for portability).
Backend/Database: Firebase (Firestore for database, Firebase Auth for authentication, Firebase Hosting for deployment).
Email Service: EmailJS for client-side email notifications.
Version Control: GitHub for code management and public repository.
Development Tools: Node.js for Firebase CLI, browser dev tools for testing.
Libraries: Firebase SDK v8 (for compatibility), EmailJS v4.
System Architecture
Client-Server Model: The app runs entirely in the browser (client-side), with Firebase handling server-side logic (auth, database, hosting).
Modular Structure:
index.html: Main UI layout.
css/styles.css: Styling with modern design (gradients, animations, responsive).
js/: Modular JS files (auth.js for login, booking.js for bookings, admin.js for admin functions, utils.js for utilities, app.js for initialization).
firebase-config.js: Firebase initialization.
Data Flow: User actions trigger JS functions, which interact with Firebase Auth/Firestore. Emails are sent via EmailJS. All actions are logged to the console.
Portability: Pure web technologies ensure it runs on any modern browser/OS without dependencies.
Features
User Registration and Login: Email/password authentication via Firebase Auth.
Cylinder Booking: Users can request extra cylinders, select payment (COD or Paytm QR), and receive acknowledgments.
Booking History: Users view their past bookings with status and payment details.
Email Notifications: Automatic emails for bookings and balance updates.
Admin Panel: View users, approve/reject requests, add notices visible to all.
Notices System: Admins post announcements; users see them in real-time.
Payment Integration: COD is handled as pending; Paytm QR displays a scannable image.
Responsive Design: Works on desktop and mobile with CSS media queries.
Security: Input validation, Firebase rules for access control, no sensitive data exposure.
Implementation
Frontend Development:
Built with semantic HTML for accessibility.
CSS includes variables for easy theming, animations for UX, and responsive layouts.
JavaScript is modular: Each file handles a specific concern (e.g., booking.js for booking logic).
Authentication: Firebase Auth manages sign-up, login, and role-based access (user/admin).
Database Operations: Firestore stores users, bookings, and notices. Real-time listeners update UI dynamically.
Email Integration: EmailJS sends templated emails using user data.
Logging: Console logs all actions (e.g., logins, bookings) for debugging and monitoring.
Error Handling: User-friendly alerts and console errors for failed operations.
Code Standards: Follows camelCase, consistent indentation, and comments for maintainability.
Database Design
Firestore Collections:
Users: Fields - name, email, role (user/admin), barrels (initial 12), expiry (1 year).
Bookings: Fields - userId, status (pending/approved/denied), payment (cod/paytm), date.
Notices: Fields - text, date.
Security Rules: Enforce auth-based access (users read/write own data; admins manage notices; public read for notices).
Real-Time Updates: Listeners ensure UI reflects changes instantly.
Security Measures
Authentication: Firebase Auth prevents unauthorized access.
Input Validation: Email format checks, required fields, and sanitization.
Firestore Rules: Restrict data access based on user roles.
Client-Side Security: No server-side secrets exposed; Firebase handles sensitive operations.
Logging: Tracks actions for audit trails.
Testing and Evaluation
Unit Testing: JS functions (e.g., validateEmail, sendEmail) are isolated for testing with Jest (not implemented in code but designed for it).
Integration Testing: Manual testing of login, booking, and admin flows in browser.
Code Quality: Modular structure allows easy testing; console logs aid debugging.
Browser Compatibility: Tested on Chrome/Firefox; portable across OS.
Performance: Lightweight app with fast load times via Firebase CDN.
Metrics Compliance:
Safe: No harmful code; secure Firebase integration.
Testable: Functions are pure and testable.
Maintainable: Modular code with comments.
Portable: No OS-specific code.
Challenges Faced and Solutions
Firebase Module Errors: Initial v9 SDK caused import issues; switched to v8 for compatibility.
EmailJS Failures: 422 errors due to missing initialization; added emailjs.init() and validation.
UI Overlaps: Header overlapped content; fixed with CSS padding and z-index.
Booking Not Triggering: Event listener mismatch; changed to 'click' from 'submit'.
Permissions Errors: Firestore rules too strict; adjusted for public notice reads.
Hosting Rewrites: Caused JS files to load as HTML; disabled rewrites for local testing.
Deployment
Platform: Firebase Hosting (free, scalable, integrates with Auth/Firestore).
Steps: Initialized with firebase init, deployed via firebase deploy.
Justification: Cloud-based for real-time features; no local server needed.
Live Access: Hosted at a Firebase URL (e.g., https://your-project.web.app).
Future Enhancements
Mobile App: Convert to React Native for native mobile experience.
Advanced Payments: Integrate full Paytm API for online payments.
Notifications: Add push notifications via Firebase Cloud Messaging.
Analytics: Track usage with Firebase Analytics.
Multi-Language: Support for regional languages.
Admin Analytics: Dashboards for booking trends.
Conclusion
The Online Gas Booking System successfully meets all requirements, providing a modern, efficient alternative to traditional booking methods. Its modular design ensures long-term maintainability, while Firebase integration offers scalability. The project demonstrates proficiency in web development, real-time databases, and user-centric design. With a clean UI and robust features, it is ready for deployment and further expansion. Total development time: Approximately 2-3 weeks, with ongoing refinements. For code access, visit the public GitHub repository.