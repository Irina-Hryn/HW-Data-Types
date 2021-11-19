window.addEventListener('load', () => {
    getPlans(JSON_PLACEHOLDER_TO_DO);
    localStorage.clear()
});
async function getPlans(elem) {
    try{
        await fetch(elem) // создаем запрос
            .then(res =>res.json())  // создаем обьект и обрабатываем json
            .then(item => item.map(el => todosarray.push(el))) ; // значения обьекта пушим в массив
    } catch(error) { // ошибки отправляем в catch
     //   console.log(error); выводим на консоль ошибки
    }
    finally {  // возвращает промис
    }
}

// Добавляем новую задачу
const addTask = function() {
    console.log("Add task...");  //Создаем новый элемент списка с текстом из #new-task
    let listIten = createNewTaskElement(taskInput.value);

    if(taskInput.value == "" || taskInput.value == " "){
        alert("You should write something");
    } else {  //Добавляем элемент списка к неполному списку задач
        incompleteTasksHolder.appendChild(listIten);
        bindTaskEvents(listIten, taskCompleted);
    }
    taskInput.value = ""; // инпута после добавления в список задач
}
//Редактируем существующую задачу
const editTask = function() {
    console.log("Edit task...");
    const listItem = this.parentNode;
    const editInput = listItem.querySelector("input[type=text]");
    const label = listItem.querySelector("label");
    const containsClass = listItem.classList.contains("editMode");  //если класс родительского элемента .editeMode
    if (containsClass) {
        //Переключиться с .editMode
        //labeltext становится входным значением
        label.innerText = editInput.value;
        changeName();
    } else {
        //Переключаемся на .editMode
        //входное значение становится текстом метки
        editInput.value = label.innerText;
        changeName();
    }

    //Переключить .editModel на элемент списка
    listItem.classList.toggle("editMode");
}
//Удаляем существующую задачу
const deleteTask = function() {
    console.log("Delete task...");
    let listIten = this.parentNode;
    let ul = listIten.parentNode;

    //Удаляем элемент родительского списка из ul
    ul.removeChild(listIten);
}
//Отмечаем задачу как выполненная
const taskCompleted = function() {
    console.log("Task commplete...");
    //добавить элемент списка задач к #completed-tasks
    let listIten = this.parentNode;
    completedTasksHolder.appendChild(listIten);
    bindTaskEvents(listIten, taskIncomplete);
}

//Отмечаем задачу как незавершенную
const taskIncomplete = function() {
    console.log("Task incomplete...");
    //добавляем элемент списка задач к #incomplete-tasks
    let listIten = this.parentNode;
    incompleteTasksHolder.appendChild(listIten);
    bindTaskEvents(listIten, taskCompleted);
}

const bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
    console.log("Bind list item event");
    //выбераем listItem дочерние элементы
    const checkBox = taskListItem.querySelector("input[type=checkbox]");
    const editButton = taskListItem.querySelector("button.edit");
    const deleteButton = taskListItem.querySelector("button.delete");
    //привязываем editTask к кнопке редактирования
    editButton.onclick = editTask;

    //связываем deleteTask с delete button
    deleteButton.onclick = deleteTask;

    //связываем checkBoxEventHandler с checkbox
    checkBox.onchange = checkBoxEventHandler;
}

const ajaxRequest = function() {
    console.log("Ajax request");
}

//Устанавливаем обработчик кликов на функцию addTask function
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);


//цикл по incompleteTaskHolder ul listitems
for(let i = 0; i < incompleteTasksHolder.children.length; i++) {
    //связываем значения с list item children (taskCompleted)
    bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);

}

//цикл по completedTaskHolder ul list items
for(let i = 0; i < completedTasksHolder.children.length; i++) {
    //связываем значения с list item children (taskImcomplete)
    bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);

}
