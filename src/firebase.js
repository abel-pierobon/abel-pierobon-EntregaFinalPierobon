
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAknsOu92mb9xs8KkKxUR-y6OBBDb4F7hI",
    authDomain: "react-guitarras.firebaseapp.com",
    projectId: "react-guitarras",
    storageBucket: "react-guitarras.appspot.com",
    messagingSenderId: "623689425020",
    appId: "1:623689425020:web:cb92214b01375a34e169f9"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);