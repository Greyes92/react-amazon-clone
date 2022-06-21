import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
     apiKey: "AIzaSyB1UJos5mbkC4QlGXF5nswjno8I8yHFFHQ",
     authDomain: "amaz0n-clone-mvp.firebaseapp.com",
     projectId: "amaz0n-clone-mvp",
     storageBucket: "amaz0n-clone-mvp.appspot.com",
     messagingSenderId: "825864031462",
     appId: "1:825864031462:web:ee2488c9877f3841adbf27",
     measurementId: "G-2HLLPBMY40"
   };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;