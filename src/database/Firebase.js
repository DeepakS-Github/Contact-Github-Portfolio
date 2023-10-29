import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import { getAuth } from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "github-contact.firebaseapp.com",
    projectId: "github-contact",
    storageBucket: "github-contact.appspot.com",
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
  };

const app1 = firebase.initializeApp(firebaseConfig)
export const authentication = getAuth(app1)

export default firebase