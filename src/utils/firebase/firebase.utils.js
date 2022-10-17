import { initializeApp } from 'firebase/app';
import { getAuth, 
         signInWithRedirect, 
         signInWithPopup,
         GoogleAuthProvider
         } from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOsBcPR4B5qd64yIURfeJKJ35CicwkzII",
    authDomain: "myeshop-db.firebaseapp.com",
    projectId: "myeshop-db",
    storageBucket: "myeshop-db.appspot.com",
    messagingSenderId: "432783883468",
    appId: "1:432783883468:web:be21d402905d2b5d761669"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db= getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const  userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef)
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists())
  }
  
