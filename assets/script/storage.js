const STORAGE_URL =
  "https://joinapi-98d95-default-rtdb.europe-west1.firebasedatabase.app/";

// get data from the remote server
async function loadData() {
  let response = await fetch(STORAGE_URL + ".json");
  return (responseToJson = await response.json());
}

// 'post' send data to the remote server
async function postData(path = "", data = {}) {
  let response = await fetch(STORAGE_URL + path + ".json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return (responseToJson = await response.json());
}

// delete data from the remote server
async function deleteData() {
  let response = await fetch(STORAGE_URL + ".json", {
    method: "DELETE",
  });
  return (responseToJson = await response.json());
}

// save data to the remote server
async function setItem(key, data) {
  let response = await fetch(`${STORAGE_URL}/${key}.json`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return (responseToJson = await response.json());
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkWM6OYRQRTizP9amnTFy8YRpoR9TV5xE",
  authDomain: "join-api-9528e.firebaseapp.com",
  projectId: "join-api-9528e",
  storageBucket: "join-api-9528e.appspot.com",
  messagingSenderId: "21220935744",
  appId: "1:21220935744:web:afef606481dfd04f2937a5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
