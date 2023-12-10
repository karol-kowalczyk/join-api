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
password = document.getElementById('password-field');
passwordConfirm = document.getElementById('password-field-confirm');

/**
 * 
 * This function replaces the background image from the input-password field, when the user enters text
 */

function replaceIcon() {
        if (password.value.trim() !== '') {
                password.style.backgroundImage = 'url(/join-project-management-tool/assets/img/login-site/eye.svg)';
        }
}

function replaceIconScnd() {
        if (passwordConfirm.value.trim() !== '') {
                passwordConfirm.style.backgroundImage = 'url(/join-project-management-tool/assets/img/login-site/eye.svg)';
        }
}
/**
 * 
 * This function displays the standard background image, if the input field is empty
 */

function restorePwImg() {
        if (password.value.trim() === '') {
                password.style.backgroundImage = 'url(/join-project-management-tool/assets/img/login-site/lock.svg)';
        }
}

function restorePwImgScnd() {
        if (passwordConfirm.value.trim() === '') {
                passwordConfirm.style.backgroundImage = 'url(/join-project-management-tool/assets/img/login-site/lock.svg)';
        }
}

/**
*
* EventListener activates the function replaceIcon() if the user inputs something in our input field 'input'
*/

password.addEventListener('input', replaceIcon);
passwordConfirm.addEventListener('input', replaceIconScnd);

/**
 *
 * The event listener activates the function restorePwImg() when the field is no longer clicked and loses focus, or in other words, when it experiences a 'blur'
 */

password.addEventListener('blur', restorePwImg);
password.addEventListener('blur', restorePwImgScnd);

/**
 * 
 * toggle to change the inputfield if its clicked
 */

function seePassword() {
        password.style.backgroundImage = 'url(/join-project-management-tool/assets/img/login-site/close-eye.svg)';
}

function seeConfirmedPassword() {
        passwordConfirm.style.backgroundImage = 'url(/join-project-management-tool/assets/img/login-site/close-eye.svg)';
}


if (password.value == '') {
        password.onclick = false;
} 

if (password.value !== '') {
        password.onclick = true;
} 


// if (passwordConfirm.value == '') {
//         passwordConfirm.onclick = false;
// }