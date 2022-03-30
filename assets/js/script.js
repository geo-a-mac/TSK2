var buttonEl = document.querySelector('#save-task');
var tasksToDoEl = document.querySelector('#tasks-to-do');
var formEl = document.querySelector('#task-form');

var createTaskHandler = function(event) {
    event.preventDefault();

    var listItemEl = document.createElement('li');
    listItemEl.textContent = 'New Task';
    listItemEl.className = 'task-item';
    listToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", createTaskHandler);