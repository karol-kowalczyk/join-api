let toggleCounter = 0;

async function fetchContacts() {
  try {
    const response = await fetch('/path-to-contacts-data'); // Adjust the URL
    const contacts = await response.json();
    populateContactsDropdown(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
  }
}


document.addEventListener('DOMContentLoaded', fetchContacts);


function showContactInformation() {
  let contactInformationDisplay = document.getElementById('contactInformationDisplay');
  if (toggleCounter % 2 == 0) {
    contactInformationDisplay.style.right = '0%';
  } else {
    contactInformationDisplay.style.right = '-100%';
  }
  toggleCounter++;
}