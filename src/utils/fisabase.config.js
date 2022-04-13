import firebase from "firebase/compat/app";
import "firebase/compat/auth";


const app =  firebase.initializeApp ({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-crud-firebase-6a5fa.firebaseapp.com",
  projectId: "react-crud-firebase-6a5fa",
  storageBucket: "react-crud-firebase-6a5fa.appspot.com",
  messagingSenderId: "38241509388",
  appId: "1:38241509388:web:10821a42298f3b66e38e29",
  measurementId: "G-7KF4LB500B"
});


export const auth = app.auth();
export default app;
