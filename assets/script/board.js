let targetBoardId = null;

function closeDetails() {
    let addTaskPopup = document.getElementById("addTaskPopup");
    addTaskPopup.classList.add("d-none");
    document.body.style.overflow = "auto";
    deleteAllInputFields(
        document.getElementById("inputField"),
        document.querySelector("textarea[name='description']"),
        document.getElementById("contacts-dropdown"),
        document.getElementById("date"),
        document.getElementById("addSubtask"),
        document.getElementById("tasks-dropdown"),
        document.querySelectorAll(".prio-button")
    );
    resetAllBtns(document.querySelectorAll(".prio-button"));
}

function showTaskPopup(boardId = "todo-board") {
    targetBoardId = boardId;
    let addTaskPopup = document.getElementById("addTaskPopup");
    addTaskPopup.classList.remove("d-none");
    document.body.style.overflow = "hidden";
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
                document.getElementById("inputField"),
                document.querySelector("textarea[name='description']"),
                document.getElementById("contacts-dropdown"),
                document.getElementById("date"),
                document.getElementById("addSubtask"),
                document.getElementById("tasks-dropdown"),
                document.querySelectorAll(".prio-button")
            );
            resetAllBtns(document.querySelectorAll(".prio-button"));
        }, 2000);
    }
    messageDiv.style.opacity = 1;
    setTimeout(() => {
        messageDiv.style.opacity = 0;
    }, 2100);
}

function showTaskInBoard() {
    let taskContainer = document.querySelector(
        `#${targetBoardId} .task-container`
    );

    taskContainer.innerHTML += `<div class="task-div">${targetBoardId}</div>`;
    updateTaskVisibility();
    closeDetails();
}

function stopPropagationFunction(event) {
    event.stopPropagation();
}

function deleteAllInputFields(...fields) {
    fields.forEach((field) => {
        if (field) {
            field.value = "";
        }
    });

    const prioButtons = ["urgent", "medium", "low"];
    prioButtons.forEach((buttonId) => {
        const button = document.getElementById(buttonId);
        if (button) {
            button.classList.remove("active");
        }
    });
}

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

function resetAllBtns(prioButtons) {
    prioButtons.forEach((button) => {
        button.classList.remove("active");
        button.style.backgroundColor = "";
    });
}

function clearAllEntries() {
    deleteAllInputFields(
        document.getElementById("inputField"),
        document.querySelector("textarea[name='description']"),
        document.getElementById("contacts-dropdown"),
        document.getElementById("date"),
        document.getElementById("addSubtask"),
        document.getElementById("tasks-dropdown"),
        document.querySelectorAll(".prio-button")
    );
    resetAllBtns(document.querySelectorAll(".prio-button"));
}
