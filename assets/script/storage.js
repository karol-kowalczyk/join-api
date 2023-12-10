const STORAGE_TOKEN = '7I3GVB4FSQIZUZFO7U18ACMHMX7UZAKX2PIW985';
const STORAGE_URL = 'https://remote-storage.developerakademie.org/item';


async function setItem(key, value) {
        const payload = {key, value, token:STORAGE_TOKEN};
        return fetch(STORAGE_URL, {method: 'POST', body: JSON.stringify(payload)}).then(res => res.json()); // fetch Befehl wird unsere CONST mit dem Link angesprochen und wir wollen mit der methiode
        // post was hinseden und senden mit dem body text hin deswegen JSON.stringify und der text ist unsere const payload wo wir die parameter key, value und unseren Toke mitsenden

}

async function getItem(key) {
        const url = `${STORAGE_URL}?key=${key}&token=${STORAGE_TOKEN}`;
        return fetch(url).then(res => res.json());
}