// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getFirestore,
  setDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4jWYr5LaTmgKTXONq4kLQOvq1T7UjxlM",
  authDomain: "join-api-d7745.firebaseapp.com",
  projectId: "join-api-d7745",
  storageBucket: "join-api-d7745.appspot.com",
  messagingSenderId: "274473944238",
  appId: "1:274473944238:web:0f838394e6f639659d593f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to show messages
function showMessage(message, divId) {
  let messageDiv = document.getElementById(divId);
  if (!messageDiv) {
    console.error(`Element with id "${divId}" not found.`);
    return;
  }
  messageDiv.style.display = "block";
  messageDiv.innerHTML = message;
  messageDiv.style.opacity = 1;
  setTimeout(() => {
    messageDiv.style.opacity = 0;
  }, 5000);
}

// Forgot Password functionality
let forgotPassword = document.getElementById("forgotPassword");
let emailInput = document.getElementById("resetEmail");

let ForgotPassword = () => {
  let email = emailInput.value;
  sendPasswordResetEmail(auth, email)
    .then(() => {
      showMessage('If this email is in our database, a reset link has been sent.', 'signInMessage');
    })
    .catch((error) => {
      // console.log(error.code);
      // console.log(error.message);
      showMessage('missing or invalid mail', 'signInMessage');
    });
}

forgotPassword.addEventListener('click', ForgotPassword);

// Sign-In functionality
const signIn = document.getElementById("submitSignIn");
signIn.addEventListener("click", (event) => {
  event.preventDefault();
  const email = document.getElementById("emailAddress").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      showMessage("Login is successful", "signInMessage");
      const user = userCredential.user;
      localStorage.setItem("loggedInUserId", user.uid);
      window.location.href = "summary.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode == "auth/invalid-credential") {
        showMessage("Incorrect Email or Password", "signInMessage");
      } else {
        showMessage(
          "Account does not exist.<br>Please check the fields.",
          "signInMessage"
        );
      }
    });
});


