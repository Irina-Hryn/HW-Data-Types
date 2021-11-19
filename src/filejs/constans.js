const taskInput = document.getElementById("new-task"); //new-task
const addButton = document.getElementsByTagName("button")[0]; //первый button
const incompleteTasksHolder = document.getElementById("incomplete-tasks");  //незавершенные задачи
const completedTasksHolder = document.getElementById("completed-tasks"); //Выполненные задачи
const JSON_PLACEHOLDER_TO_DO = 'https://jsonplaceholder.typicode.com/todos/? limit=10';  // пременная с запросом
const JSON_PLACEHOLDER_DELETE_TO_DO = 'https://jsonplaceholder.typicode.com/todos'; // переменная для удаления запроса

const todosarray = []; // пустой массив куда пушим запрос

const createNewTaskElement = function(taskString) {        // Создаем элемент списка
    const listItem = document.createElement("li"); //input (checkbox)
    const checkBox = document.createElement("input"); //Checkbox
    const label = document.createElement("label"); //Label
    const editInput = document.createElement("input"); //Edit Input
    const editButton = document.createElement("button"); //Edit Button
    const deleteButton = document.createElement("button"); //Delete Button

    checkBox.type = "checkbox"; //Делаем модификацию элементов
    editInput.type = "text";

    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";

    label.innerText = taskString; // Добавляем елементы

    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    return listItem;
}

function changeName()  {
    const elem = document.getElementsByClassName("edit");
    if (elem.innerText == "Edit") elem.innerText = "Save";
    else elem.innerText = "Edit";
    console.log(elem);
}
changeName();