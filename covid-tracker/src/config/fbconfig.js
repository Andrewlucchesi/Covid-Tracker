import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/analytics'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDeBT0909rYB9Gt0dNOITRxs00NphiU2F0",
  authDomain: "ucla-covid-tracker.firebaseapp.com",
  databaseURL: "https://ucla-covid-tracker.firebaseio.com",
  projectId: "ucla-covid-tracker",
  storageBucket: "ucla-covid-tracker.appspot.com",
  messagingSenderId: "423491376714",
  appId: "1:423491376714:web:e9a2a5b6bdf94731b478b3",
  measurementId: "G-FX5R3P4QKN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});
firebase.analytics();

export default firebase;