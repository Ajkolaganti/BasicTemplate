import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBAC7CCwa8cWvjexMH6knI0ZfE5-tHw3Xs",
    authDomain: "image-ai-6e4d8.firebaseapp.com",
    projectId: "image-ai-6e4d8",
    storageBucket: "image-ai-6e4d8.appspot.com",
    messagingSenderId: "139558132758",
    appId: "1:139558132758:web:941484e701af40ba50a937",
    measurementId: "G-RHY2PCHHYH"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 