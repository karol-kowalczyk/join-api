let targetBoardId = null;

// Counter für jede Board
let todoCounter = 0;
let inprogressCounter = 0;
let awaitfeedbackCounter = 1;
let doneCounter = 0;
let taskInAllBoardsCounter = doneCounter + awaitfeedbackCounter + inprogressCounter + todoCounter;


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
    updateToDos();
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

function showTaskInformation() {
    document.body.style.overflow = "hidden";
    let taskDiv = document.getElementById('taskDiv');
    let title = taskDiv.textContent; // Korrektur hier: textContent statt value
    taskDiv.classList.add('no-hover'); // Füge die Klasse hinzu, um den Hover-Effekt zu deaktivieren
    console.log(title);
    taskDiv.innerHTML = /*HTML*/ `<div id="taskInformationPopup" class="" >  
    <div class="popUp" onclick="stopPropagationFunction(event)">
    <div id="content-popUp">
        <div class="left-side">
            <div id="signUpMessage" class="message-div"></div>
            <div class="title">Title <div class="red-star">*</div>
            </div>
            <input id="inputField" class="input-fields required" type="text" placeholder="Enter a title" value="${title}">

            <div class="title">Description</div>

            <textarea rows="4" cols="50" name="description" placeholder="Enter a Description"></textarea>

            <div class="title">Assigned to</div>
            <input id="contacts-dropdown" class="input-fields" type="text" placeholder="Select contacts to assign">
            <div id="required-div">
                <div class="red-star">*</div>This field is required
            </div>
        </div>
        <div id="border"></div>
        <div class="right-side">
            <div class="date required">Due date <div class="red-star">*</div>
            </div>
            <input id="date" type="date">

            <div class="title">Prio</div>
            <div id="prioritize">
                <button id="urgent" class="prio-button" onclick="toggleButtonState('urgent')">Urgent <img class="prio-icons" src="./assets/img/add_task/urgent.svg" alt="urgent"></button>
                <button id="medium" class="prio-button" onclick="toggleButtonState('medium')">Medium <img class="prio-icons" src="./assets/img/add_task/medium.svg" alt="medium"></button>
                <button id="low" class="prio-button" onclick="toggleButtonState('low')">Low <img class="prio-icons" src="./assets/img/add_task/low.svg" alt="low"></button>
                
            </div>
            <div class="title">Category</div>
            <input id="tasks-dropdown" class="input-fields" type="text" placeholder="Select task category">
            <div class="title">Subtasks</div>
            <div id="subtask-div">
                <input id="addSubtask" class="input-fields" type="text" placeholder="Add new subtask">
                <div id="create-delete-div">
                    <div id="responsive-required-div" class="d-none">
                        <div class="red-star">*</div>This field is required
                    </div>
                    <div id="responsive-clear-create-btns">
                        <button onclick="clearAllEntries()" id="clear-btn">Clear <img src="./assets/img/add_task/x.svg" alt="delete"></button>
                        <button onclick="checkAllRequiredFields()" id="create-btn">Save Task <img src="./assets/img/add_task/check.svg" alt="check"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>`;
}

function closeInformationTaskDetails() {
    let taskInformationPopup = document.getElementById('taskInformationPopup');
    taskInformationPopup.classList.add('d-none');
    document.body.style.overflow = "auto";
}

function incrementCounter(boardId) {
    switch (boardId) {
        case "todo-board":
            todoCounter++;
            break;
        case "inprogress-board":
            inprogressCounter++;
            break;
        case "awaitfeedback-board":
            awaitfeedbackCounter++;
            break;
        case "done-board":
            doneCounter++;
            break;
    }
    console.log(`Counters -> Todo: ${todoCounter}, In Progress: ${inprogressCounter}, Awaiting Feedback: ${awaitfeedbackCounter}, Done: ${doneCounter}`);
}

function decrementCounter(boardId) {
    switch (boardId) {
        case "todo-board":
            todoCounter--;
            break;
        case "inprogress-board":
            inprogressCounter--;
            break;
        case "awaitfeedback-board":
            awaitfeedbackCounter--;
            break;
        case "done-board":
            doneCounter--;
            break;
    }
    console.log(`Counters -> Todo: ${todoCounter}, In Progress: ${inprogressCounter}, Awaiting Feedback: ${awaitfeedbackCounter}, Done: ${doneCounter}`);
}


function updateToDos() {
    let todoCounterHTML = document.getElementById('todoCounter');
    todoCounterHTML.innerHTML = todoCounter;
    let finishedtodoCounter = document.getElementById('finishedtodoCounter');
    finishedtodoCounter.innerHTML = doneCounter;
    let taskInAllBoardsCounterHTML = document.getElementById('taskInAllBoardsCounter')
    taskInAllBoardsCounterHTML.innerHTML = taskInAllBoardsCounter;
    let inprogressCounterHTML = document.getElementById('inprogressCounter');
    inprogressCounterHTML.innerHTML = inprogressCounter;
    let awaitfeedbackCounterHTML = document.getElementById('awaitfeedbackCounter');
    awaitfeedbackCounterHTML.innerHTML = awaitfeedbackCounter;
}

let currentDraggedElement;
let taskCounter = 0;

function startDragging(taskCounter) {
    currentDraggedElement = taskCounter;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}


function showTaskInBoard() {
    let taskContainer = document.querySelector(
        `#${targetBoardId} .task-container`
    );

    // Holen Sie sich den Wert des Titels aus dem Eingabefeld
    let title = document.getElementById("inputField").value;

    // Erstellen Sie eine eindeutige ID für das neue Div

    // Fügen Sie das Div der Aufgabe mit dem Titel als Inhalt und der eindeutigen ID hinzu
    taskContainer.innerHTML += `<div draggable="true" ondragstart="startDragging(${taskCounter})" class="task-div">${title}</div>`;

    // Inkrementieren Sie den Zähler für die nächste Aufgabe
    taskCounter++;

    updateTaskVisibility();
    incrementCounter(targetBoardId);
    closeDetails();
}

