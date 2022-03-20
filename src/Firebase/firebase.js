// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTyMbTPKP0JwJdk_QoqY8QGvi1_TG-LfM",
  authDomain: "kicktheballl.firebaseapp.com",
  projectId: "kicktheballl",
  storageBucket: "kicktheballl.appspot.com",
  messagingSenderId: "381855690551",
  appId: "1:381855690551:web:ed19b45b5c1d90fd04f4b2",
  measurementId: "G-PCCKQNZPXN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleLogin = (setState) => {
  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      setState(user.email);
      console.log(token, result);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log(error);
    });
};

export { app, googleLogin };
