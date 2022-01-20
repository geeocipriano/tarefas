import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBgsxs5b6nSJb9oPODNImaA7q155dpXVfg",
    authDomain: "task-c9781.firebaseapp.com",
    projectId: "task-c9781",
    storageBucket: "task-c9781.appspot.com",
    messagingSenderId: "689164886908",
    appId: "1:689164886908:web:a27d6245cbd8d068697af9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
