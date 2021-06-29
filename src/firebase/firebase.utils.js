import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'



const config={
    apiKey: "AIzaSyDr__Y7cU9htVdm3BMxLKnsxI3mO2CEx5w",
    authDomain: "crwn-db-aa386.firebaseapp.com",
    projectId: "crwn-db-aa386",
    storageBucket: "crwn-db-aa386.appspot.com",
    messagingSenderId: "996575371063",
    appId: "1:996575371063:web:16a0d3107faaed871544b2",
    measurementId: "G-TWRDKDHP7W"
  };

  export const createUserProfileDocument=async(userAuth,additionalData)=>{
    if(!userAuth)return;
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    const snapshot =await userRef.get();
    if(!snapshot.exists){
      const {displayName,email}=userAuth;
      const createdAt=new Date();
      try {
        await userRef.set({
          displayName,email,createdAt,...additionalData
        })
      } catch(error){
        console.log('error creating user',error.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;