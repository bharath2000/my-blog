import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxpajKjWelXLSs8ejKYFBIwF-ocgQuPbo",
  authDomain: "my-react-blog-e98f7.firebaseapp.com",
  projectId: "my-react-blog-e98f7",
  storageBucket: "my-react-blog-e98f7.appspot.com",
  messagingSenderId: "523677693733",
  appId: "1:523677693733:web:821aea153d53d1f5fa0ccc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
