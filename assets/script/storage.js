// firebaseauth.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4jWYr5LaTmgKTXONq4kLQOvq1T7UjxlM",
  authDomain: "join-api-d7745.firebaseapp.com",
  projectId: "join-api-d7745",
  storageBucket: "join-api-d7745.appspot.com",
  messagingSenderId: "274473944238",
  appId: "1:274473944238:web:0f838394e6f639659d593f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function showMessage(message, divId) {
  let messageDiv = document.getElementById(divId);
  messageDiv.style.display = "block";
  messageDiv.innerHTML = message;
  messageDiv.style.opacity = 1;
  setTimeout(() => {
    messageDiv.style.opacity = 0;
  }, 5000);
}

function checkPassword() {
  const password = document.getElementById("rPassword").value;
  const passwordConfirm = document.getElementById("password-field-confirm").value;

  if (password !== passwordConfirm) {
    showMessage("Your passwords do not match", "signUpMessage");
    return false;
  }
  return true;
}

const signUp = document.getElementById("submitSignUp");
signUp.addEventListener("click", (event) => {
  event.preventDefault();
  
  if (!checkPassword()) {
    return; 
  }
  
  const email = document.getElementById("rEmail").value;
  const password = document.getElementById("rPassword").value;
  const firstName = document.getElementById("fName").value;

  const auth = getAuth();
  const db = getFirestore();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const userData = {
        email: email,
        firstName: firstName,
      };
      showMessage("Account created successfully!", "signUpMessage");
      const docRef = doc(db, "users", user.uid);
      setDoc(docRef, userData)
        .then(() => {
          setTimeout(() => {
            window.location.href = "index.html";
          }, 3000);
        })
        .catch((error) => {
          console.error("error writing document", error);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode == 'auth/email-already-in-use') {
        showMessage('Email address already exists.', 'signUpMessage');
      } else {
        showMessage("Unable to create user.<br>Please check the fields.", "signUpMessage");
      }
    });
});
