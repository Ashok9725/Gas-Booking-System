Gas Booking System Project Report

📋 Project Title

Online Gas Booking System
A modern web application for seamless gas cylinder bookings.

🌟 Introduction
The Online Gas Booking System is a cutting-edge web-based platform that revolutionizes gas cylinder ordering for residential and commercial users. By digitizing the traditional phone-based process, it empowers clients to effortlessly book cylinders, process payments, and monitor their history online.

Key highlights include:

Dual User Roles: Regular users (clients) and administrators.
Initial Allocation: Users receive 12 barrels valid for one year.
Admin Capabilities: Approve/reject requests and broadcast notices.
Core Focus: Adheres to evaluation metrics for modularity, safety, testability, maintainability, and portability.
This project eliminates booking hassles, ensuring a user-centric experience with real-time updates.

🎯 Objectives
Primary Goals

✅ Enable hassle-free gas cylinder bookings without phone calls.

✅ Offer flexible payment options: Cash on Delivery (COD) and Paytm QR.

✅ Provide users with detailed booking history and email confirmations.

✅ Equip administrators to oversee accounts, manage requests, and post system-wide notices.

Evaluation Metrics
Code: Designed to be modular, safe, testable, maintainable, and portable.
Database: Leverages Firebase for real-time data storage.
Logging: Implements JavaScript logging for all system actions.
Deployment: Hosted on Firebase for scalable cloud solutions.
🛠️ Technologies and Tools
Category

Tools/Libraries

Frontend

HTML5, CSS3, JavaScript (Vanilla JS)

Backend/Database

Firebase (Firestore, Auth, Hosting)

Email Service

EmailJS (v4 for notifications)

Version Control

GitHub (Public repository)

Development

Node.js, Firebase CLI, Browser Dev Tools

Libraries

Firebase SDK v8, EmailJS v4

🏗️ System Architecture
Model: Client-server architecture with browser-based execution and Firebase for backend services.

Modular Structure:

index.html: Core UI layout.

css/styles.css: Sleek styling with gradients, animations, and responsiveness.

js/ Folder:

auth.js: Handles authentication.

booking.js: Manages bookings and history.

admin.js: Admin-specific operations.

utils.js: Utility functions (logging, validation, emails).

app.js: App initialization.

firebase-config.js: Firebase setup.

Data Flow: User interactions trigger JS functions, interfacing with Firebase Auth/Firestore. Emails via EmailJS; all actions logged via console.

Portability: Built with pure web tech for cross-browser/OS compatibility.

✨ Features

🔐 User Registration & Login: Secure email/password auth via Firebase.

🛒 Cylinder Booking: Request extras, choose payments, get instant acknowledgments.

📜 Booking History: View past orders with status and payment info.

📧 Email Notifications: Automated emails for bookings and balance updates.

👨‍💼 Admin Panel: Monitor users, approve/deny requests, publish notices.

📢 Notices System: Real-time announcements from admins.

💳 Payment Options: COD as pending; Paytm QR with scannable image.

📱 Responsive Design: Optimized for desktop and mobile.

🔒 Security: Robust validation, Firebase rules, and access controls.

💻 Implementation

Frontend Development

Semantic HTML for accessibility.
CSS with variables, animations, and media queries for a polished UI.
Modular JS: Each file focuses on a single responsibility (e.g., booking.js for booking logic).

Authentication

Firebase Auth for sign-up, login, and role-based permissions (user/admin).

Database Operations

Firestore for storing users, bookings, and notices with real-time UI updates.

Email Integration

EmailJS for templated, client-side email delivery.

Logging

Console-based logging for actions like logins and bookings.

Error Handling

Alerts and console errors for smooth user experience.

Code Standards

CamelCase, consistent indentation, and detailed comments.

🗄️ Database Design

Firestore Collections

Users: name, email, role, barrels (starts at 12), expiry (1 year).

Bookings: userId, status (pending/approved/denied), payment (cod/paytm), date.

Notices: text, date.

Security Rules

Auth-required access: Users manage own data; admins handle notices; public reads for notices.

Real-Time Updates

Listeners for instant UI synchronization.

🔐 Security Measures

Authentication: Firebase Auth blocks unauthorized access.

Validation: Email checks, required fields, and data sanitization.

Rules: Firestore restricts access by roles.

Client-Side: No exposed secrets; Firebase secures operations.

Audits: Logging for action tracking.

🧪 Testing and Evaluation

Unit Testing: Isolated JS functions (e.g., validateEmail) ready for Jest.

Integration: Manual browser testing for flows like login and booking.

Quality: Modular code with debug logs.

Compatibility: Verified on Chrome/Firefox; OS-agnostic.

Performance: Fast loads via Firebase CDN.

Metrics:

Safe: Secure integrations.

Testable: Pure functions.

Maintainable: Commented, modular code.

Portable: No platform dependencies.

🚧 Challenges and Solutions

Challenge

Solution

Firebase Module Errors

Switched to v8 SDK for compatibility.

EmailJS 422 Errors

Added emailjs.init() and recipient validation.

UI Overlaps

Applied CSS padding and z-index.

Booking Not Triggering

Changed event to 'click' from 'submit'.

Permissions Issues

Adjusted Firestore rules for public notice reads.

Hosting Rewrites

Disabled for local JS loading.

🚀 Deployment

Platform: Firebase Hosting (free, integrated with Auth/Firestore).

Steps: firebase init → firebase deploy.

Why?: Cloud-native for real-time features; no local servers.

Access: Live at Firebase URL (https://gas-booking-system-76446.web.app/).

🔮 Future Enhancements

📱 Mobile App: Expand to React Native.

💳 Payments: Full Paytm API integration.

🔔 Notifications: Push via Firebase Cloud Messaging.

📊 Analytics: Usage tracking with Firebase.

🌍 Multi-Language: Regional language support.

📈 Admin Dashboards: Booking trend analytics.

🎉 Conclusion
The Online Gas Booking System delivers a modern, efficient alternative to outdated booking methods, fully aligning with project requirements. Its modular architecture and Firebase integration ensure scalability and ease of maintenance. Showcasing expertise in web dev, real-time databases, and UX design, it's primed for deployment and growth.

Development Timeline: ~2-3 weeks with refinements.
Code Repository: GitHub Link
