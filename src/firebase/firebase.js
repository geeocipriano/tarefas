import firebase from 'firebase/app'

import 'firebase/auth'

import 'firebase/firestore'

import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBgsxs5b6nSJb9oPODNImaA7q155dpXVfg",
    authDomain: "task-c9781.firebaseapp.com",
    projectId: "task-c9781",
    storageBucket: "task-c9781.appspot.com",
    messagingSenderId: "689164886908",
    appId: "1:689164886908:web:a27d6245cbd8d068697af9"
  };

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

const auth = firebase.auth()

const storage = firebase.storage()


//col ref

const companyCollection = db.collection('company')

export {
    db,
    auth,
    storage,
    companyCollection
}