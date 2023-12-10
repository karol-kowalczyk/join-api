let users = [];

async function registerBtn(){
        loadUsers();
}

async function loadUsers() {
        try {
                users = JSON.parse(await getItem('users'));
        } catch(e) {
                console.info('could not load users');
        }
}

async function register() {
        registerBtn.disabled = true;
        users.push({
                email: email.value,
                password: password.value,
        });
        await setItem('users', JSON.stringify(users));
        resetForm();
}

function resetForm() {
        email.value = '';
        password.value = '';
        registerBtn.disabled = false;
}