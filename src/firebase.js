
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAvDgTVN8lBtT9kTCyLJT4G8VXLeuPbK6I",
    authDomain: "reactpierobon.firebaseapp.com",
    projectId: "reactpierobon",
    storageBucket: "reactpierobon.appspot.com",
    messagingSenderId: "903480455916",
    appId: "1:903480455916:web:cb2af83998ce2b28b92bc9"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);