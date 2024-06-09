
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
  