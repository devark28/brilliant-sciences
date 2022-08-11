import {initializeApp, getApps, getApp} from "firebase/app"
// import {FirebaseApp as auth} from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_apiKey,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_authDomain,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_projectId,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_FIREBASE_appId,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_measurementId,
}

// // Initialize Firebase
// export const app = (!getApps().length) ? initializeApp(firebaseConfig) : getApp()
export const app = () => {
  if(!getApps().length){
    return initializeApp(firebaseConfig)
  }
  console.log("There")
}

// console.log(firebase.auth) // Undefined
// console.log(firebase.default.auth) // Function
