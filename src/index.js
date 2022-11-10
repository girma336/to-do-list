import './style.css';
import './to-go-bg.jpg';
import populateTodo from './modules/populateTodo.js';
import saveTodo from './modules/saveTodo.js';
import Todo from './modules/Todo.js';


const mainContainer = document.querySelector('#task-container');

const populateAllTodo = () => {
  mainContainer.innerHTML = '';
  const todoList = JSON.parse(localStorage.getItem('todo'));

  todoList.sort((x, y) => x.index - y.index);

  todoList.forEach((todo) => {
    populateTodo(todo);
  });
};

const todoItem = document.querySelector('#input-task')
const addBtn = document.querySelector('#add-task');
addBtn.addEventListener('click', () => {
  let todoList = [];
  if (localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem('todo'));
  }
  const todo = new Todo(todoItem.value, false, todoList.length);
  saveTodo(todo);
  populateAllTodo();
  todoItem.value = '';
});

document.addEventListener('DOMContentLoaded', () => {
  populateAllTodo();
});
