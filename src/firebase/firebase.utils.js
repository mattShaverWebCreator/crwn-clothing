import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyBRjKRPyBOS1XQzVGYVu14nccH7yLin-Fw",
        authDomain: "crwn-clothing-3b764.firebaseapp.com",
        databaseURL: "https://crwn-clothing-3b764.firebaseio.com",
        projectId: "crwn-clothing-3b764",
        storageBucket: "crwn-clothing-3b764.appspot.com",
        messagingSenderId: "838427222916",
        appId: "1:838427222916:web:908d8d67955528907a33d1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;