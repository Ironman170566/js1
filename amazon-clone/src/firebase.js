import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0TNAWMD1gfjiFucxTfdrEoakNU19HY8U",
  authDomain: "clone-35529.firebaseapp.com",
  projectId: "clone-35529",
  storageBucket: "clone-35529.appspot.com",
  messagingSenderId: "332882497782",
  appId: "1:332882497782:web:c6112bc3080038779edcd7",
  measurementId: "G-L2TBZJ5CKS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
