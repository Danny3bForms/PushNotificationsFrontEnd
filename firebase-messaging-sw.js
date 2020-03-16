// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  apiKey: "AIzaSyCSs7WAHSpB0c9vYmu8xueBFK1L6EEjak4",
	    authDomain: "test-notifications-6226c.firebaseapp.com",
	    databaseURL: "https://test-notifications-6226c.firebaseio.com",
	    projectId: "test-notifications-6226c",
	    storageBucket: "test-notifications-6226c.appspot.com",
	    messagingSenderId: "761715641602",
	    appId: "1:761715641602:web:c2be5242bd2fa0396dc61b",
	    measurementId: "G-03R37MT50T"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();




