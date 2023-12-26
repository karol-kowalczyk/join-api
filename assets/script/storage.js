const STORAGE_TOKEN = '7I3GVB4FSQIZUZFO7U18ACMHMX7UZAKX2PIW985';
const STORAGE_URL = 'https://remote-storage.developerakademie.org/item';

/**
 * This function send users information to the local storage.
 * @param {string} key - The key of the item to be set like e.g., name, username, email etc.
 * @param {any} value - This is the value of the key.
 * @returns {Promise} -  A Promise that resolves with the result of the storage operation.
 */
async function setItem(key, value) {
        const payload = { key, value, token: STORAGE_TOKEN };
        return fetch(STORAGE_URL, { method: 'POST', body: JSON.stringify(payload) }).then(res => res.json());
}

/**
 * Retrieves information from local storage based on the provided key.
 * @param {string} key - The key for which information was previously stored by the user.
 * @returns {Promise} - A Promise that resolves with the retrieved information.
 */
async function getItem(key) {
        const url = `${STORAGE_URL}?key=${key}&token=${STORAGE_TOKEN}`;
        return fetch(url).then(res => res.json()).then(res => {
                if (res.data) {
                        return res.data.value;
                } throw `Could not find data with key "${key}".`;
        });
}