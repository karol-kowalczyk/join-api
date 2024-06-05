// summary.js

import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

// Firebase configuration
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
const auth = getAuth();
const db = getFirestore();

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function generateInitials(name) {
  const nameParts = name.split(' ');
  if (nameParts.length > 1) {
    // If there are multiple name parts, use the first letter of the first and last parts
    return nameParts[0][0].toUpperCase() + nameParts[nameParts.length - 1][0].toUpperCase();
  } else {
    // If there's only one name part, use just the first letter
    return nameParts[0][0].toUpperCase();
  }
}

// Function to adjust font size based on text length
function adjustFontSize() {
  const surenameNameDiv = document.getElementById("surename-name");
  if (surenameNameDiv.innerText.length > 11) {
    surenameNameDiv.style.fontSize = "32px";
  }
}

// Authentication state observer
onAuthStateChanged(auth, async (user) => {
  const surenameNameDiv = document.getElementById("surename-name");
  const initialsElement = document.getElementById("initials");

  if (localStorage.getItem("guestUser") === "true") {
    surenameNameDiv.innerText = "Guest User";
    if (initialsElement) {
      initialsElement.innerText = "GU"; // Initials for Guest User
    }
    return;
  }

  if (user) {
    const uid = user.uid;
    const userDocRef = doc(db, "users", uid);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      const userData = userDoc.data();
      const fullName = `${userData.firstName} ${userData.lastName || ''}`.trim();
      const firstName = capitalizeFirstLetter(userData.firstName);
      const initials = generateInitials(fullName);

      if (surenameNameDiv) {
        surenameNameDiv.innerText = firstName;
        adjustFontSize(); // Adjust font size after setting text
      }
      if (initialsElement) {
        initialsElement.innerText = initials;
      }
    } else {
      console.log("No such document!");
    }
  } else {
    // User is signed out, redirect to login page if not already there
    if (window.location.pathname !== '/index.html') {
      window.location.href = "index.html";
    }
  }
});

function navigateToBoard() {
  window.location.href = './board.html';
}