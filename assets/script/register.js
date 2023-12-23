let users = [];

let userName = document.getElementById('username');
let eMail = document.getElementById('email');
let setPassword = document.getElementById('password-field');
let passwordConfirm = document.getElementById('password-field-confirm');
let signedUpDiv = document.getElementById('sucessfully-signed-up-div');
let midSection = document.getElementById('mid-section');
let logo = document.getElementById('logo');
let body = document.body;
let links = document.getElementById('compliance-links-div');
let midSec = document.getElementById('mid-section');

/**
 * This function is used to check if the passwords in the password fields are similar.
 * 
 * 
 */
function checkPassword() {
        return setPassword.value === passwordConfirm.value;
}

let passwordMatch = checkPassword();

/**
 * This async function checks if the entered passwords match, and if so, creates a new user object
 *  with provided name, email, and password, adds it to a users array, triggers a successful sign-up notification, 
 *  and redirects to the index HTML page after a 5-second delay; otherwise, it alerts that the passwords do not match.
 * 
 * 
 */
async function register() {
        if (passwordMatch) {
                let newUser = {
                        'name': userName.value,
                        'email': eMail.value,
                        'password': setPassword.value,
                }

                users.push(newUser);
                await signedUpSuccesfully();
                resetForm();
                setTimeout(() => {
                        openIndexHTML();
                }, 5000);
        } else {
                alert('Password do not match.');
        }
}

/**
 * This function reset the form element.
 * 
 * 
 */
function resetForm() {
        userName.innerHTML = '';
        eMail.innerHTML = '';
        setPassword.innerHTML = '';
        passwordConfirm.innerHTML = '';
}

/**
 * This async function modifies the CSS classes of various HTML elements, making the sign-up notification
 *  div visible and applying opacity and display changes to other elements, effectively creating
 *  a visualtransition to indicate a successful sign-up.
 * 
 * 
 */
async function signedUpSuccesfully() {
        signedUpDiv.classList.remove('d-none');
        signedUpDiv.classList.add('opacityOne');
        midSection.classList.add('opacityZero');
        logo.classList.add('d-none');
        body.classList.add('bg-grey');
        links.classList.add('d-none');
        midSec.classList.add('d-none');
}

/**
 * This function redirects to the login page.
 * 
 */
function openIndexHTML() {
        window.location = '/join-project-management-tool/index.html';
}

