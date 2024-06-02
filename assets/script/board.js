function closeDetails() {
  addTaskPopup = document.getElementById("addTaskPopup");
  addTaskPopup.classList.add("d-none");
}

function showTaskPopup() {
  addTaskPopup = document.getElementById("addTaskPopup");
  addTaskPopup.classList.remove("d-none");
}

function updateTaskVisibility() {
  const boards = document.getElementsByClassName("boards");
  for (let board of boards) {
    const noTaskDiv = board.querySelector(".no-task-div");
    const taskContainer = board.querySelector(".task-container");
    if (taskContainer && taskContainer.children.length > 0) {
      noTaskDiv.classList.add("hidden");
      taskContainer.classList.add("active");
    } else {
      noTaskDiv.classList.remove("hidden");
      taskContainer.classList.remove("active");
    }
  }
}

function closeDetails() {
  addTaskPopup = document.getElementById("addTaskPopup");
  addTaskPopup.classList.add("d-none");
}

function showTaskPopup() {
  addTaskPopup = document.getElementById("addTaskPopup");
  addTaskPopup.classList.remove("d-none");
}

function checkAllRequiredFields() {
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
  
    showMessageDiv(isEmpty);
  }

function showMessageDiv(isEmpty) {
  let messageDiv = document.getElementById("signUpMessage");
  if (isEmpty) {
    messageDiv.textContent = "Please fill in all required fields.";
    messageDiv.style.position = "fixed";
  } else {
    messageDiv.textContent = "Task is successfully created.";
    messageDiv.style.position = "fixed";
    setTimeout(() => {
        showTaskInBoard();
        deleteAllInputFields(
          titleInput,
          descriptionTextarea,
          assignedToInput,
          dueDateInput,
          addSubtask,
          tasksDropdown
        );
    }, 2000)


  }
  messageDiv.style.opacity = 1;
  setTimeout(() => {
    messageDiv.style.opacity = 0;
  }, 2100);
}

function showTaskInBoard() {
    let taskContainer = document.getElementById('taskContainer');
    let inputField = document.getElementById('inputField').value;

    taskContainer.innerHTML += /*html*/ `<div class="task-div">${inputField}</div>`;
    updateTaskVisibility();
    closeDetails();
}
