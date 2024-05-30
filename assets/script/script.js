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
        let initials = document.getElementById('initials');

        initials.innerHTML = 'G';
}

/**
 *
 * This function redirects the user to the login.html page
 */

function loadLogIn() {
        window.location = "index.html";
      }