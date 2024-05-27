let users = [];

let signedUpDiv = document.getElementById("sucessfully-signed-up-div");
let midSection = document.getElementById("mid-section");
let logo = document.getElementById("logo");
let body = document.body;
let links = document.getElementById("compliance-links-div");
let midSec = document.getElementById("mid-section");

/** Login section */
let emailAddress = document.getElementById("email-address").value;
let password = document.getElementById("password").value;
let registerBtn = document.getElementById("registerBtn").value;

/** Register section */
// let userName = document.getElementById("username").value;
// let eMail = document.getElementById("email").value;
// let setPassword = document.getElementById("password-field").value;
// let passwordConfirm = document.getElementById("password-field-confirm").value;
// let signUpBtn = document.getElementById("sign-up-btn").value;

function login(event) {
  event.preventDefault();
  alert(187);
}
// /**
//  *When the page is loaded, the init function executes the functions within it.
//  *
//  */
// async function init() {
//         loadUsers();
// }

// async function loadUsers() {
//         try {
//                 users = JSON.parse(await getItem('users'));
//         } catch (e) {
//                 console.error('Loading error:', e);
//         }
// }

// /**
//  * This function is used to check if the passwords in the password fields are similar.
//  *
//  *
//  */
// function checkPassword() {
//         return setPassword.value === passwordConfirm.value;
// }

// /**
//  * This async function checks if the entered passwords match, and if so, creates a new user object
//  *  with provided name, email, and password, adds it to a users array, triggers a successful sign-up notification,
//  *  and redirects to the index HTML page after a 5-second delay; otherwise, it alerts that the passwords do not match.
//  *
//  *
//  */
// async function register() {
//         let passwordMatch = checkPassword();
//         if (passwordMatch) {
//                 let newUser = {
//                         'name': userName.value,
//                         'email': eMail.value,
//                         'password': setPassword.value,
//                 }

//                 users.push(newUser);
//                 await signedUpSuccesfully();
//                 setTimeout(() => {
//                         openIndexHTML();
//                 }, 5000);
//                 await setItem('users', JSON.stringify(users));
//                 resetForm();
//         } else {
//                 alert('Password do not match.');
//         }
// }

// /**
//  * This function reset the form elements.
//  *
//  *
//  */
// function resetForm() {
//         userName.innerHTML = '';
//         eMail.innerHTML = '';
//         setPassword.innerHTML = '';
//         passwordConfirm.innerHTML = '';
// }

// /**
//  * This async function modifies the CSS classes of various HTML elements, making the sign-up notification
//  *  div visible and applying opacity and display changes to other elements, effectively creating
//  *  a visualtransition to indicate a successful sign-up.
//  *
//  *
//  */
// async function signedUpSuccesfully() {
//         signedUpDiv.classList.remove('d-none');
//         signedUpDiv.classList.add('opacityOne');
//         midSection.classList.add('opacityZero');
//         logo.classList.add('d-none');
//         body.classList.add('bg-grey');
//         links.classList.add('d-none');
//         midSec.classList.add('d-none');
// }

// /**
//  * This function redirects to the login page.
//  *
//  */
// function openIndexHTML() {
//         window.location.href = '/join-project-management-tool/index.html';
// }

// /**
//  * This function logged a user in our join
//  *
//  */

// function login() {
//         let user = users.find( u => u.email == email-address.value && u.password-field == password.value);
//         console.log(user);
//         if(user) {
//                 alert('user gefunden');
//         } else {
//                 alert ('user not found');
//         }
// }
