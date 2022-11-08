import './style.css';
import './to-go-bg.jpg';

const taskInput = document.getElementById('input-task');
const addBtn = document.getElementById('add-task');

class Todo {
  constructor(description, index, completed = false) {
    this.description = description;
    this.index = index;
    this.completed = completed;
  }
}

addBtn.addEventListener('click', () => {
  if (taskInput.value !== '') {
    const todolist = new Todo(taskInput.value, 0);
    localStorage.setItem('todolists', JSON.stringify(todolist));
    taskInput.value = '';
  }
});