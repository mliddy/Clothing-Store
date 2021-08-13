import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth' // to get the .auth() method

// FireBase - handles our authentification.
// The config code const is copied from our firebase project. It is the code that links the 
// firebase project to our React project here
const config = {
    apiKey: "AIzaSyC3lxDTMNcJKhYXHbzdZbGhmJJQa1Pere4",
    authDomain: "react-clothing-store-67f61.firebaseapp.com",
    projectId: "react-clothing-store-67f61",
    storageBucket: "react-clothing-store-67f61.appspot.com",
    messagingSenderId: "1061634679984",
    appId: "1:1061634679984:web:135fc17a9b6d46c6fc8775",
    measurementId: "G-0VLNXPD1Z4"
};

// Not sure about this shit
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// For google authentification
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
// always trigger the GoogleAuth pop up whenever we use the GoogleAuthProvider for authentification sign in 

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
