import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBxBf8L0IpJyeS-s0vVeS_Uyzj0mrIw5UM",
  authDomain: "thedojosite-ff2ed.firebaseapp.com",
  projectId: "thedojosite-ff2ed",
  storageBucket: "thedojosite-ff2ed.appspot.com",
  messagingSenderId: "222801718315",
  appId: "1:222801718315:web:2a4e992636ea59381ece6e"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };