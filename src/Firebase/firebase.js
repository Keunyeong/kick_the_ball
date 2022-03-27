// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  collection,
  getFirestore,
  setDoc,
  getDocs,
  doc,
} from "firebase/firestore";
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
const db = getFirestore();

const googleLogin = (navigate, isLogin, isSignup, name) => {
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

      const emailRef = collection(db, "users");
      const signup = async (name) => {
        await setDoc(doc(emailRef, user.email), {
          name: { name },
        });
        console.log("새롭게 등록되었습니다.");
      };
      (async () => {
        const querySnapshot = await getDocs(collection(db, "users"));
        // users 에서 구글 인증된 email 정보가 있는지 조회
        querySnapshot.forEach((doc) => {
          if (isLogin) {
            //로그인 요청일 때
            if (doc.id === user.email) {
              // email 정보가 이미 가입된 정보일 때
              // 로그인 완료 -> 메인 페이지로 이동
              sessionStorage.setItem("token", token);
              sessionStorage.setItem("email", user.email);
              // setName(doc.data().name.name);
              navigate("/main");
              return;
            }
          } else {
            // 회원가입 요청일 때
            if (doc.id === user.email) {
              // email 정보가 이미 가입된 정보일 때
              sessionStorage.setItem("email", user.email);

              navigate("/");
              alert("이미 가입된 회원입니다.");
              return;
            }
          }
        });
        // users 에 email 정보가 없을 때
        if (sessionStorage.getItem("email") !== user.email) {
          // 로그인 되지 않은 상태
          if (isLogin) {
            // 로그인 요청시
            navigate("/");
            alert("회원가입이 필요합니다.");
          } else {
            // 회원가입 요청시
            if (isSignup) {
              signup(name);
              sessionStorage.setItem("token", token);
              sessionStorage.setItem("email", user.email);
              sessionStorage.removeItem("signup_email");
              navigate("/main");
              alert("회원가입을 축하합니다.");
            } else {
              sessionStorage.setItem("signup_email", user.email);
              navigate("/signup");
            }
          }
        } else {
          return;
        }
      })();
      console.log(token, result);
    })
    .catch((error) => {
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.email;
      // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log(error);
    });
};

const getUser = async (email, setData) => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    if (doc.id === email) {
      setData(doc.data().name.name);
    }
  });
};

export { app, googleLogin, getUser };
