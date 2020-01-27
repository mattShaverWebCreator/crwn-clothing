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

export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`);

        const snapShot = await userRef.get();

         if(!snapShot.exists) {
                 const { displayName, email } = userAuth;
                 const createdAt = new Date();

                 try {
                        await userRef.set({
                            displayName,
                            email,
                            createdAt,
                            ...additionalData    
                        });
                 } catch(error) {
                         console.log('error creating user', error.message);
                 }
         }

         return userRef;
};


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
            const newDocRef = collectionRef.doc();
            batch.set(newDocRef, obj);
    });


    return await batch.commit();
};

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


export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    });
}


export const auth = firebase.auth();

export const firestore = firebase.firestore();


export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: 'select_account' });


export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;