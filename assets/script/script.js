/**
 * 
 * This global variable detects the input field with the id 'email-field'
 */

emailField = document.getElementById('email-address');

/**
 * 
 * This function removes the background image from the input field when the user enters text
 */

function removeEmailImg() {
        if (emailField.value.trim() !== '') {
                emailField.style.backgroundImage = 'none';
        }
}

/**
 * 
 * This function displays the background image, if the input field is empty
 */

function restoreEmailImg() {
        if (emailField.value.trim() === '') {
                emailField.style.backgroundImage = 'url(/join-project-management-tool/assets/img/login-site/mail.svg)';
        }
}

/**
*
* EventListener activates the function removeEmailImg() if the user inputs something in our input field 'input'
*/

// emailField.addEventListener('input', removeEmailImg);

/**
 *
 * The event listener activates the function restoreEmailImg() when the field is no longer clicked and loses focus, or in other words, when it experiences a 'blur'
 */

// emailField.addEventListener('blur', restoreEmailImg);

/**
 * 
 * This global variable detects the input field with the id 'password-field'
 */

passwordField = document.getElementById('password');

/**
 * 
 * This function removes the background image from the input field when the user enters text
 */

function removePasswordImg() {
        if (passwordField.value.trim() !== '') {
                passwordField.style.backgroundImage = 'none';
        }
}

/**
 * 
 * This function displays the background image if the input field is empty
 */

function restorePasswordImg() {
        if (passwordField.value.trim() === '') {
                passwordField.style.backgroundImage = 'url(/join-project-management-tool/assets/img/login-site/lock.svg)';
        }
}

/**
 *
 * The event listener activates the function restorePasswordImg when the field is no longer clicked and loses focus, or in other words, when it experiences a 'blur'
 */

// passwordField.addEventListener('input', removePasswordImg);

/**
 * 
 * This function removes the background image from the input field when the user enters text
 */

// passwordField.addEventListener('blur', restorePasswordImg);

joinLogo = document.getElementById('big-logo');

setTimeout(function init() {
        let header = document.getElementById('main-header');
        let midSection = document.getElementById('mid-section');
        let complianceLinks = document.getElementById('compliance-links-div');
        let responsiveSignUp = document.getElementById('responsive-sign-up');
        let content = document.getElementById('content');

        header.classList.remove('opacity-zero');
        midSection.classList.remove('opacity-zero');
        complianceLinks.classList.remove('opacity-zero');
        responsiveSignUp.classList.remove('opacity-zero');

        header.classList.add('opacity-one');
        midSection.classList.add('opacity-one');
        complianceLinks.classList.add('opacity-one');
        responsiveSignUp.classList.add('opacity-one');
        content.classList.add('new-color');
        content.classList.remove('dark');

        joinLogo.classList.add('transition');

        removeJoinClass();
        
}, 1000)

function removeJoinClass() {
        joinLogo.classList.remove('big-logo');
        joinLogo.classList.add('big-logo-loaded');
}

function loadSignUp() {
        window.location = '/join-project-management-tool/sign_up.html';
}

function loadGuestLogin() {
        window.location = '/join-project-management-tool/summary.html';
}