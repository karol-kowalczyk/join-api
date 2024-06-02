/**
 *
 * This function removes the background image from the input field when the user enters text
 */

// passwordField.addEventListener('blur', restorePasswordImg);

joinLogo = document.getElementById("big-logo");

setTimeout(function init() {
  let header = document.getElementById("main-header");
  let midSection = document.getElementById("mid-section");
  let complianceLinks = document.getElementById("compliance-links-div");
  let responsiveSignUp = document.getElementById("responsive-sign-up");
  let content = document.getElementById("content");

  header.classList.remove("opacity-zero");
  midSection.classList.remove("opacity-zero");
  complianceLinks.classList.remove("opacity-zero");
  responsiveSignUp.classList.remove("opacity-zero");

  header.classList.add("opacity-one");
  midSection.classList.add("opacity-one");
  complianceLinks.classList.add("opacity-one");
  responsiveSignUp.classList.add("opacity-one");
  content.classList.add("new-color");
  content.classList.remove("dark");

  joinLogo.classList.add("transition");

  removeJoinClass();
}, 1000);

function removeJoinClass() {
  joinLogo.classList.remove("big-logo");
  joinLogo.classList.add("big-logo-loaded");
}

function loadGuestLogin() {
  window.location = "/join-project-management-tool/summary.html";
  let initials = document.getElementById("initials");

  initials.innerHTML = "G";
}

function goBack() {
  window.history.back();
}

/**
 *
 * This function redirects the user to the login page
 */

function loadSignUp() {
  window.location = "sign_up.html";
}

function loadLogIn() {
  window.location = "index.html";
}

const rmCheck = document.getElementById("rememberMe");
const emailInput = document.getElementById("emailAddress");
const passwordInput = document.getElementById("password");

if (localStorage.checkbox && localStorage.checkbox !== "") {
  rmCheck.setAttribute("checked", "checked");
  emailInput.value = localStorage.username;
  passwordInput.value = localStorage.password;
} else {
  rmCheck.removeAttribute("checked");
  emailInput.value = "";
  passwordInput.value = "";
}

function lsRememberMe() {
  if (rmCheck.checked && emailInput.value !== "") {
    localStorage.username = emailInput.value;
    localStorage.password = passwordInput.value;
    localStorage.checkbox = rmCheck.value;
  } else {
    localStorage.username = "";
    localStorage.checkbox = "";
    localStorage.password = "";
  }
}

// Function to update the date element with the current date
function updateCurrentDate() {
  const currentDate = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);
  const dateElement = document.getElementById("date");
  if (dateElement) {
    dateElement.innerText = formattedDate;
  }
}

function loadHelpSite() {
  window.location.href = "help.html";
}

function stopPropagationFunction(event) {
  event.stopPropagation();
}
