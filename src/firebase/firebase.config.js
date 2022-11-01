// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBacQw44GDDfnv5VdXSCVTj9W8BSnJvNU",
  authDomain: "genious-car-project-ae48b.firebaseapp.com",
  projectId: "genious-car-project-ae48b",
  storageBucket: "genious-car-project-ae48b.appspot.com",
  messagingSenderId: "1059584863930",
  appId: "1:1059584863930:web:dd49449abfa8198a0edc83",
  measurementId: "G-74WERFN7JS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app 