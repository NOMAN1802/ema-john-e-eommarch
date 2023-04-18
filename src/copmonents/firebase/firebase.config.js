// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDvdE72OZpFn2_jhbaXSC53ssLDNvgIy8",
  authDomain: "ema-john-with-firebase-a-a7c37.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-a7c37",
  storageBucket: "ema-john-with-firebase-a-a7c37.appspot.com",
  messagingSenderId: "691325033607",
  appId: "1:691325033607:web:727ab5f6ece2bd25f4ac22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;