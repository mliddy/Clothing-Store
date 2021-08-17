import firebase from 'firebase/app'
import 'firebase/firestore'

//Showing how to use firebase's firestore database fucntionality

const firestore = firebase.firestore();
//To grab a specific item from the DB:
firestore.collection(users).doc('l5zSXnZhlaX9ZDXmZ269').collection('cartItems').doc('FIjDq8b0ni4hkQIRfZMw');
//Grab same item, different syntax
firestore.doc('/users/l5zSXnZhlaX9ZDXmZ269/cartItems/FIjDq8b0ni4hkQIRfZMw');
//Grab all the items in the cartItems collection
firestore.collection('/users/l5zSXnZhlaX9ZDXmZ269/cartItems')

