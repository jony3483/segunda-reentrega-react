import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCzD1B56UNkLUnU3sSTlC2jKiMne55dCj4",
    authDomain: "proyecto-final-f313b.firebaseapp.com",
    projectId: "proyecto-final-f313b",
    storageBucket: "proyecto-final-f313b.appspot.com",
    messagingSenderId: "313494341384",
    appId: "1:313494341384:web:5cbb4b6bb5dff95f024ebd"  
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);