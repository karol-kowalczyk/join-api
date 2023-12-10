/**
 * 
 * This function redirects the user to the login.html page
 */

function loadLogIn() {
        window.location = '/join-project-management-tool/index.html';
}

/**
 * 
 * Global variable
 */
passwordField = document.getElementById('password-field');

/**
 * 
 * This function replaces the background image from the input-password field, when the user enters text
 */

function replaceIcon() {
        if (passwordField.value.trim() !== '') {
                emailField.style.backgroundImage = 'url(/join-project-management-tool/assets/img/login-site/eye.svg)';
        }
}
/**
 * 
 * This function displays the standard background image, if the input field is empty
 */

function restorePwImg() {
        if (emailField.value.trim() === '') {
                emailField.style.backgroundImage = 'url(/join-project-management-tool/assets/img/login-site/lock.svg)';
        }
}
