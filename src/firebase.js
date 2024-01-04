import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import firebase from "firebase/app"
// import "firebase/auth"
// const firebase = require('firebase/app');
// require('firebase/auth');
// import { firebase } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// Import other Firebase services as needed

// apiKey: import.meta.env.REACT_APP_FIREBASE_REACT_APP_FIREBASE_API_KEY,

const app = firebase.initializeApp({
    apiKey: "AIzaSyBgLg5JTIRVOTzpzNnqpBrq-fPdorkmwGQ",
    authDomain: import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.REACT_APP_FIREBASE_APP_ID
})

// export const auth = app.auth();
export const auth = getAuth(app);
export default app;