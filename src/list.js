const taskInput = document.getElementById("new-task"); //new-task
const addButton = document.getElementsByTagName("button")[0]; //first button
const incompleteTasksHolder = document.getElementById("incomplete-tasks");  //incomplete Tasks
const completedTasksHolder = document.getElementById("completed-tasks"); //Completed Tasks
const JSON_PLACEHOLDER_TO_DO = 'https://jsonplaceholder.typicode.com/todos/? limit=10';
const JSON_PLACEHOLDER_DELETE_TO_DO = 'https://jsonplaceholder.typicode.com/todos';

const todosarray = [];

window.addEventListener('load', () => {
    getPlans(JSON_PLACEHOLDER_TO_DO);
    localStorage.clear()
});
async function getPlans(elem) {
    try{
        await fetch(elem) // создаем запрос
            .then(res =>res.json())  // создаем обьект и обрабатываем json
            .then(item => item.map(el => todosarray.push(el))) ; // значения обьекта пушим в массив
    } catch(error) {
        console.log(error);
    }
    finally {

    }
}

const createNewTaskElement = function(taskString) {        //Create List Item
    const listItem = document.createElement("li"); //inpt (checkbox)
    const checkBox = document.createElement("input"); //Checkbox
    const label = document.createElement("label"); //Label
    const editInput = document.createElement("input"); //Edit Input
    const editButton = document.createElement("button"); //Edit Button
    const deleteButton = document.createElement("button"); //Delete Button

    checkBox.type = "checkbox"; //Each element needs modifying
    editInput.type = "text";

    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";

    label.innerText = taskString; //Each element needs appended

    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

   return listItem;
}

function changeName() // no ';' here
{
    const elem = document.getElementsByClassName("edit");
    if (elem.innerText == "Edit") elem.innerText = "Save";
    else elem.innerText = "Edit";
    console.log(elem);
}

changeName();

//Add a new task
let addTask = function() {
    console.log("Add task...");  //Create a new list item with the text from #new-task


    let listIten = createNewTaskElement(taskInput.value);

    if(taskInput.value == "" || taskInput.value == " "){
        alert("You should write something");
    } else {
        //Apend List item to incompleteTaskHolder
        incompleteTasksHolder.appendChild(listIten);
        bindTaskEvents(listIten, taskCompleted);
    }
    taskInput.value = "";
}

//Edit an existing task
let editTask = function() {
    console.log("Edit task...");

    let listItem = this.parentNode;

    let editInput = listItem.querySelector("input[type=text]");
    let label = listItem.querySelector("label");
    let containsClass = listItem.classList.contains("editMode");  //if the class of the parent is .editeMode
    if (containsClass) {
        //Switch from .editMode
        //labeltext become the input value
        label.innerText = editInput.value;
        changeName();
    } else {
        //Switch to .editMode
        //input value becomes the label's text
        editInput.value = label.innerText;
        changeName();
    }

    //Toggle .editModel on list item
    listItem.classList.toggle("editMode");

    const taskInput = document.getElementById("new-task"); //new-task
    const addButton = document.getElementsByTagName("button")[0]; //first button
    const incompleteTasksHolder = document.getElementById("incomplete-tasks");  //incomplete Tasks
    const completedTasksHolder = document.getElementById("completed-tasks"); //Completed Tasks



}
//Delete an existing task
let deleteTask = function() {
    console.log("Delete task...");
    let listIten = this.parentNode;
    let ul = listIten.parentNode;

    //Remove the parent list item from the ul
    ul.removeChild(listIten);
}
//Mark a task as complete
let taskCompleted = function() {
    console.log("Task commplete...");
    //append the task list item to the #completed-tasks
    let listIten = this.parentNode;
    completedTasksHolder.appendChild(listIten);
    bindTaskEvents(listIten, taskIncomplete);
}

//Mark a task as incomplete
let taskIncomplete = function() {
    console.log("Task incomplete...");
    //append the task list item to the #incomplete-tasks
    let listIten = this.parentNode;
    incompleteTasksHolder.appendChild(listIten);
    bindTaskEvents(listIten, taskCompleted);
}

let bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
    console.log("Bind list item event");
    //select listItem's children
    let checkBox = taskListItem.querySelector("input[type=checkbox]");
    let editButton = taskListItem.querySelector("button.edit");
    let deleteButton = taskListItem.querySelector("button.delete");
    //bind editTask to edit button
    editButton.onclick = editTask;

    //bind deleteTask to delete button
    deleteButton.onclick = deleteTask;

    //bind checkBoxEventHandler to checkbox
    checkBox.onchange = checkBoxEventHandler;
}

let ajaxRequest = function() {
    console.log("Ajax request");
}

//Set the click handler to the addTask function
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);


//Cycle over incompleteTaskHolder ul list items
for(let i = 0; i < incompleteTasksHolder.children.length; i++) {
    //bind events to list item children (taskCompleted)
    bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);

}

//Cycle over completedTaskHolder ul list items
for(let i = 0; i < completedTasksHolder.children.length; i++) {
    //bind events to list item children (taskImcomplete)
    bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);

}
