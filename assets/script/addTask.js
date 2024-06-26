function toggleButtonState(buttonId) {
  const button = document.getElementById(buttonId);

  const buttons = document.querySelectorAll(".prio-button");
  buttons.forEach((btn) => {
    if (btn.id !== buttonId) {
      btn.classList.remove("active");
      btn.style.backgroundColor = "";
    }
  });

  const isActive = button.classList.toggle("active");
  if (isActive) {
    switch (buttonId) {
      case "urgent":
        button.style.backgroundColor = "#FF8010"; // Orange
        break;
      case "medium":
        button.style.backgroundColor = "#FFD900"; // Gelb
        break;
      case "low":
        button.style.backgroundColor = "#29E267"; // Grün
        break;
      default:
        break;
    }
  } else {
    button.style.backgroundColor = "";
  }
}

const titleInput = document.querySelector('.input-fields[type="text"]');
const descriptionTextarea = document.querySelector("textarea");
const assignedToInput = document.getElementById("contacts-dropdown");
const tasksDropdown = document.getElementById("tasks-dropdown");
const dueDateInput = document.getElementById("date");
const prioButtons = document.querySelectorAll(".prio-button");
const addSubtask = document.getElementById("addSubtask");

function clearAllEntries() {
  deleteAllInputFields(
    titleInput,
    descriptionTextarea,
    assignedToInput,
    dueDateInput,
    addSubtask,
    tasksDropdown
  );
  resetAllBtns(prioButtons);
}

function resetAllBtns(prioButtons) {
  prioButtons.forEach((button) => {
    button.classList.remove("active");
    button.style.backgroundColor = "";
  });
}

function deleteAllInputFields(
  titleInput,
  descriptionTextarea,
  assignedToInput,
  dueDateInput,
  addSubtask,
  tasksDropdown
) {
  titleInput.value = "";
  descriptionTextarea.value = "";
  assignedToInput.value = "";
  dueDateInput.value = "";
  addSubtask.value = "";
  tasksDropdown.value = "";
}

function showMessage(isEmpty) {
  let messageDiv = document.getElementById("signUpMessage");
  if (isEmpty) {
    messageDiv.textContent = "Please fill in all required fields.";
    messageDiv.style.position = "fixed";
  } else {
    messageDiv.textContent = "Task is successfully created.";
    messageDiv.style.position = "fixed";
    deleteAllInputFields(
      titleInput,
      descriptionTextarea,
      assignedToInput,
      dueDateInput,
      addSubtask,
      tasksDropdown
    );
  }
  messageDiv.style.opacity = 1;
  setTimeout(() => {
    messageDiv.style.opacity = 0;
  }, 2100);
}

function checkRequiredFields() {
  const requiredFields = document.querySelectorAll(".required");
  let isEmpty = false;

  requiredFields.forEach((field) => {
    if (field.value === "") {
      isEmpty = true;
    }
  });

  const dateField = document.getElementById("date");
  if (dateField && dateField.value === "") {
    isEmpty = true;
  }

  showMessage(isEmpty);
}


function openContactDropdownMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('#contactsDropdown') && !event.target.matches('.dropdown-arrow')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function populateContactsDropdown(contacts) {
  const dropdown = document.getElementById("myDropdown");
  dropdown.innerHTML = ''; // Clear existing options

  contacts.forEach(contact => {
    const contactLink = document.createElement("a");
    contactLink.className = "dropdown-link";
    contactLink.href = "#";
    contactLink.textContent = contact.name;
    dropdown.appendChild(contactLink);
  });
}


const contacts = [
  { name: "Arnold Bernd", email: "A.Bernd@Gmail.de" },
  { name: "Alex Meier", email: "A.Meier@Gmx.de" },
  { name: "Boris Igen", email: "B.Igel@yahoo.de" },

];

populateContactsDropdown(contacts);


document.addEventListener('DOMContentLoaded', () => {

  populateContactsDropdown(contacts); 
});