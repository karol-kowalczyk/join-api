/**
 * Asynchronously includes HTML content into specified elements.
 * @async
 * @function includeHTML
 * @returns {Promise<void>} - A Promise that resolves once HTML content is included.
 * @throws {Error} - Throws an error if the fetch operation fails.
 */
async function includeHTML() {
        let includeElements = document.querySelectorAll('[w3-include-html]');

        for (let i = 0; i < includeElements.length; i++) {
                const element = includeElements[i];

                file = element.getAttribute("w3-include-html");
                resp = await fetch(file);

                if (resp.ok) {
                        element.innerHTML = await resp.text();
                } else {
                        element.innerHTML = 'Page not found';
                }
        }
        updateCurrentDate();
}

function openDropdownMenu() {
        let menu = document.getElementById('popUpMenuDiv');

        menu.classList.toggle('d-none');
}


