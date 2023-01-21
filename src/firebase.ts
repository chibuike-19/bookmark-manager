// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQht_u-vve6A5nKyLFSoUpM7_H1D205T8",
    authDomain: "bookmark-manager-bdb0d.firebaseapp.com",
    projectId: "bookmark-manager-bdb0d",
    storageBucket: "bookmark-manager-bdb0d.appspot.com",
    messagingSenderId: "1014501664518",
    appId: "1:1014501664518:web:89c4a719c39b77d4cea087"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app 
export const auth = getAuth(app)