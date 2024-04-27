import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDoR5JCg2xf3IfmlsJh_n989g282bqbl5k",
  authDomain: "musicapp-a9a13.firebaseapp.com",
  projectId: "musicapp-a9a13",
  storageBucket: "musicapp-a9a13.appspot.com",
  messagingSenderId: "1067147821314",
  appId: "1:1067147821314:web:e83767d205c00c3a1e421b",
  measurementId: "G-ZKNTDSPDBP"
};

const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();
const analytics = getAnalytics(app);

export const SignIn=()=> {
  signInWithPopup(auth,provider)
  .then((result)=>{
    console.log("Sign in Successful",result);

  const name = result.user. displayName;
  const email = result.user.email;
  const photo = result.user.photoURL;

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("photo", photo);
  window.location.reload();
  })
  .catch (console.log("Error occur"));
}