const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

document.addEventListener('DOMContentLoaded', loadTodos);

addBtn.addEventListener('click', addTodo)

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo => {
        displayTodo(todo);
    });
}

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText === '') return;

    displayTodo(todoText);
    saveTodo(todoText);
    todoInput.value = '';
}

function displayTodo(todoText) {
    const li = document.createElement('li');
    li.textContent = todoText;

    const deleteBtn = document.createElement('span')
    deleteBtn.textContent = 'X';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => {
        removeTodo(li, todoText);
    }
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
}

function saveTodo(todoText) {
    const todos = JSON.parse(localStorage.getItem('todos')) || []
    todos.push(todoText);
    localStorage.setItem('todos', JSON.stringify(todos))
}

function removeTodo(todoElement, todoText) {
    todoList.removeChild(todoElement);
    let todos = JSON.parse(localStorage.getItem('todos')) || []
    todos = todos.filter(todo => todo !== todoText);
    localStorage.setItem('todos', JSON.stringify(todos))
}