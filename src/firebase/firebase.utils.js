import firebase from 'firebase/compat/app'
import "firebase/compat/auth";
import "firebase/compat/firestore"

const config={
    apiKey: "AIzaSyDNkNvRlobOdLuRMdY3uAulyPIJahzktco",
  authDomain: "crwn-clothing-e34c6.firebaseapp.com",
  projectId: "crwn-clothing-e34c6",
  storageBucket: "crwn-clothing-e34c6.appspot.com",
  messagingSenderId: "288817620511",
  appId: "1:288817620511:web:b6b1755a00b38208ae972a",
  measurementId: "G-0WS5BVG4K2"
}
export const createUserProfileDocument=async(authUser,additionalData)=>{
  if(!authUser) return
  const userRef=firestore.doc(`Users/${authUser.uid}`)
  const snapShot= await userRef.get()
    console.log(snapShot)
    if(!snapShot.exists){
      const {displayName,email}=authUser;
      const createdAt=new Date()
      try{
        await  userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }
      catch(error){
       console.log(error)
      }
     
    }
    return userRef
}
firebase.initializeApp(config)
export const auth=firebase.auth()
export const firestore=firebase.firestore()
const provider=new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({'prompt':'select_account'})
export const signInWithGoogle=()=>auth.signInWithPopup(provider)
export default firebase