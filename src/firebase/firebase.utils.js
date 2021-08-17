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

// I think the point of this is to store the GoogleAuthorized users into our firebase DB
// userAuth is the object we get back from Google Authorization?. In the authStateChanged() in App.js
export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) { return; } // If there is no authenticated user, then drop out

    //If there is an authenticated user
    // Make a call to the DB and see if that userAuth data is in there(meaning they are in the firebase DB)
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    //Get() the user snapShot, using userRef
    const snapShot = await userRef.get();

    // If they are not already in the DB, create the object and put it in(note using .set() on userRef)
    if (!snapShot.exists) {

        //Destructure userAuth and grab the displayName and email, as we'll store that in the DB object
        const { displayName, email } = userAuth;
        //When did we make that document?
        const createdAt = new Date();

        //.set() is asychronous
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch (err) {
            console.log("error creating USer!!!")
        }
    }
     // Return userRef either waybecause there is a chance we may need to use it for other things
     return userRef;
}

// Not sure about this shit
// But the if() is becasue i was getting a ton of errors every time the page loaded initially. From stackoverflow
if (!firebase.apps.length) {
    firebase.initializeApp(config);
 }else {
    firebase.app(); // if already initialized, use that one
 }
//This line used to be the only one
 //firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// For google authentification
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
// always trigger the GoogleAuth pop up whenever we use the GoogleAuthProvider for authentification sign in 

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
