import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyA9JBLUPAvClLhLhlBhxixYeq_D5aeV3V4",
    authDomain: "clone-bd5fb.firebaseapp.com",
    databaseURL: "https://clone-bd5fb.firebaseio.com",
    projectId: "clone-bd5fb",
    storageBucket: "clone-bd5fb.appspot.com",
    messagingSenderId: "1036542093469",
    appId: "1:1036542093469:web:bfb3fcc228e3e2d2950c74",
    measurementId: "G-45RKV83ZV2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db , auth };