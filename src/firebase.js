import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDfT9f439RXaHgls-rsvpbCURalOyafHxg",
    authDomain: "linkedin-clone-c8d4f.firebaseapp.com",
    projectId: "linkedin-clone-c8d4f",
    storageBucket: "linkedin-clone-c8d4f.appspot.com",
    messagingSenderId: "431687795926",
    appId: "1:431687795926:web:fd7f1e93f5cd3187567577"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export{db, auth};