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

function clearAllEntries() {
  const titleInput = document.querySelector('.input-fields[type="text"]');
  const descriptionTextarea = document.querySelector("textarea");
  const assignedToInput = document.getElementById("contacts-dropdown");
  const dueDateInput = document.getElementById("date");
  const prioButtons = document.querySelectorAll(".prio-button");
  const addSubtask = document.getElementById("addSubtask");
  deleteAllInputFields(
    titleInput,
    descriptionTextarea,
    assignedToInput,
    dueDateInput,
    addSubtask
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
  addSubtask
) {
  titleInput.value = "";
  descriptionTextarea.value = "";
  assignedToInput.value = "";
  dueDateInput.value = "";
  addSubtask.value = "";
}

function showMessage(isEmpty) {
    let messageDiv = document.getElementById('signUpMessage');
    if (isEmpty) {
      messageDiv.textContent = 'Please fill in all required fields.';
      messageDiv.style.position = 'fixed';
    } else {
      messageDiv.textContent = 'Task is successfully created.';
      messageDiv.style.position = 'fixed';
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
  
    showMessage(isEmpty);
  }
  

