/** */


emailField = document.getElementById('email-field');

function removeEmailImg() {
        if (emailField.value.trim() !== '') {
                emailField.style.backgroundImage = 'none';
        }
}
function restoreEmailImg() {
        if (emailField.value.trim() === '') {
                emailField.style.backgroundImage = 'url(/join-project-management-tool/assets/img/login-site/mail.svg)';
        }
}

emailField.addEventListener('input', removeEmailImg);
emailField.addEventListener('blur', restoreEmailImg);



passwordField = document.getElementById('password-field');

function removePasswordImg() {
        if (passwordField.value.trim() !== '') {
                passwordField.style.backgroundImage = 'none';
        }
}
function restorePasswordImg() {
        if (passwordField.value.trim() === '') {
                passwordField.style.backgroundImage = 'url(/join-project-management-tool/assets/img/login-site/lock.svg)';
        }
}

passwordField.addEventListener('input', removePasswordImg);
passwordField.addEventListener('blur', restorePasswordImg);
