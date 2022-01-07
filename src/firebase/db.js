import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//Paste in your firebase config we copied from the last step
const firebaseConfig = {
    apiKey: "AIzaSyBgsxs5b6nSJb9oPODNImaA7q155dpXVfg",
    authDomain: "task-c9781.firebaseapp.com",
    projectId: "task-c9781",
    storageBucket: "task-c9781.appspot.com",
    messagingSenderId: "689164886908",
    appId: "1:689164886908:web:a27d6245cbd8d068697af9"
  };
// Get a Firestore instance
export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }