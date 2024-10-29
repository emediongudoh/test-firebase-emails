const admin = require('firebase-admin');

// Custom imports
const serviceAccount = require('./serviceAccountKey.json');

// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

// Function to send a password reset email
async function sendPasswordResetEmail(email) {
    try {
        await admin.auth().generatePasswordResetLink(email);
        console.log(`Password reset email sent to ${email}`);
    } catch (error) {
        console.error(`Error sending password reset email -> ${error}`);
    }
}

// Function to send an email verification link
async function sendVerificationEmail(email) {
    try {
        const link = await admin.auth().generateEmailVerificationLink(email);
        console.log(`Email verification link generated -> ${link}`);
    } catch (error) {
        console.error(`Error generating email verification link -> ${error}`);
    }
}

// Call functions with test email
const testEmail = 'youremail@gmail.com';
sendPasswordResetEmail(testEmail);
sendVerificationEmail(testEmail);
