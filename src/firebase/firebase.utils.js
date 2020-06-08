import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD9AuKxI6LHYrzlNSSJU1_RkxbEtfuM1mI",
    authDomain: "crown-clothing-cfc02.firebaseapp.com",
    databaseURL: "https://crown-clothing-cfc02.firebaseio.com",
    projectId: "crown-clothing-cfc02",
    storageBucket: "crown-clothing-cfc02.appspot.com",
    messagingSenderId: "826140863243",
    appId: "1:826140863243:web:3a255c20a18629bea7100e",
    measurementId: "G-WQ85T2FRG5"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;