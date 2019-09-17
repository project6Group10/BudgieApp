import firebase from 'firebase/app';
import 'firebase/database';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAhF0V9ORBoyKJv5ZnzPRMTkC_gbCWJSCY",
    authDomain: "budgie-app.firebaseapp.com",
    databaseURL: "https://budgie-app.firebaseio.com",
    projectId: "budgie-app",
    storageBucket: "",
    messagingSenderId: "541631476929",
    appId: "1:541631476929:web:a7ca3c5f4bbd2d62f59040"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;