let users = [];

let userName = document.getElementById('username');
let eMail = document.getElementById('email');
let setPassword = document.getElementById('password-field');
let passwordConfirm = document.getElementById('password-field-confirm');
let content = document.getElementById('content');

async function register() {
        let passwordMatch = checkPassword();

        if (passwordMatch) {
                let newUser = {
                        'name': userName.value,
                        'email': eMail.value,
                        'password': setPassword.value,
                }

                users.push(newUser);
                await signedUpSuccesfully();
                setTimeout(() => {
                        window.location = '/join-project-management-tool/index.html';
                }, 5000);
        } else {
                alert('Pawword does not match.');
        }


}

function checkPassword() {
        return setPassword.value === passwordConfirm.value;
}

async function signedUpSuccesfully() {
        content.innerHTML = /*html*/`
        <div id="sucessfully-signed-up-div">
        <btn id="sucessfully-signed-up">You Signed Up successfully</btn>
        </div>
        `;
}