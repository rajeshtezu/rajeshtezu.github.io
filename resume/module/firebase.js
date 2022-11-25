// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
import { getAnalytics, logEvent } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB22wdQhpwF1JO-kK7WBs8wi57IyUqDfpQ",
  authDomain: "resume-analytics-c7404.firebaseapp.com",
  projectId: "resume-analytics-c7404",
  storageBucket: "resume-analytics-c7404.appspot.com",
  messagingSenderId: "426843842395",
  appId: "1:426843842395:web:00d1068a87174c3f27dc7e",
  measurementId: "G-PEL1Z6H5Q8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { logEvent, analytics };

// console.log("log Event: ", logEvent);
