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


export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`);
        const collectionRef = firestore.collection('users');

        const snapShot = await userRef.get();
        const collectionSnapshot = await collectionRef.get();
        console.log({ collectionSnapshot });

         if(!snapShot.exists) {
                 const { displayName, email } = userAuth;
                 const createdAt = new Date();

                 try {
                        await userRef.set({
                            displayName,
                            email,
                            createdAt,
                            ...additionalData    
                        })
                 } catch(error) {
                         console.log('error creating user', error.message);
                 }
         }

         return userRef;

};


firebase.initializeApp(config);

export const convertCollectionsSnapshotToMap = (collections) => {
        const transformedCollection = collections.docs.map(doc => {
              const { title, items } = doc.data();

              return {
                routeName: encodeURI(title),
                id: doc.id,
                title,
                items
              }
        });

        return transformedCollection.reduce((accumulator, collection) => {
            accumulator[collection.title.toLowerCase()] = collection;
            return accumulator;
        } , {});
}

export const auth = firebase.auth();

export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });


export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;