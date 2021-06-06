const firebase = require('firebase')

var firebaseConfig = {
    apiKey: "AIzaSyAL0vqWpH2JodSSUB2_ASKIMxm_4iysUNA",
    authDomain: "langi-a36fc.firebaseapp.com",
    projectId: "langi-a36fc",
    storageBucket: "langi-a36fc.appspot.com",
    messagingSenderId: "859597918218",
    appId: "1:859597918218:web:c9a919be8571ca65374ff3",
    measurementId: "G-0RW6GPSGDS"
};

exports.fire = firebase.initializeApp(firebaseConfig);