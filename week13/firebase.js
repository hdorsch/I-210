 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyDNoiR1tHhi8Znh9zBvKi1PkBFbyr9CC8Y",
   authDomain: "i210-hd-project.firebaseapp.com",
   projectId: "i210-hd-project",
   storageBucket: "i210-hd-project.firebasestorage.app",
   messagingSenderId: "273030419783",
   appId: "1:273030419783:web:520b91b7f829240cd36862",
   measurementId: "G-WX4CX1N0B3"
};
    
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);