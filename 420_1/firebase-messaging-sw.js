importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-messaging.js');
var config = {
    apiKey: "AIzaSyCs-Et8Q6R0_PleAh0lcmQ-Vwe6ztT9sy0",
    authDomain: "assi-a47dc.firebaseapp.com",
    projectId: "assi-a47dc",
    storageBucket: "assi-a47dc.appspot.com",
    messagingSenderId: "174285178613",
    appId: "1:174285178613:web:0c654d0e80cf46b60a27bc",
    measurementId: "G-E3F37V6EX6"
};
firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
 const title = 'Hello World';
 const options = {
  body: payload.data.body
 };
 return self.registration.showNotification(title, options);
});