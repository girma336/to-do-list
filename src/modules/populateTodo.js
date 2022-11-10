import removeTodo from './removeTodo.js';
import editTodo from './editTodo.js';
import isCompleted from './completed.js';

const mainContainer = document.querySelector('#task-container');
const populateTodo = (todo) => {
  const div = document.createElement('div');
  div.className = 'task';

  const todoCheck = document.createElement('button');
  todoCheck.className = 'checkTask';
  const i1 = document.createElement('i');
  i1.className = 'fa-solid fa-check';
  todoCheck.appendChild(i1);

  div.appendChild(todoCheck);

  const p = document.createElement('p');
  p.textContent = todo.description;
  p.className = 'todo-p';
  div.appendChild(p);

  const miniForm = document.createElement('form');
  miniForm.classList = 'edit-me hide';

  const input = document.createElement('input');
  input.type = 'text';
  input.value = todo.description;
  input.classList = 'hide';
  miniForm.appendChild(input);
  div.appendChild(miniForm);

  const editIcon = document.createElement('button');
  editIcon.classList = 'editTask';
  editIcon.innerHTML = '<i class="fa-solid fa-edit"></i>';

  div.appendChild(editIcon);

  editIcon.addEventListener('click', () => {
    div.classList.add('edit-background');
    input.classList.add('edit-background');
    input.classList.remove('hide');
    p.classList.add('hide');
    miniForm.classList.remove('hide');
  });

  const deleteIcon = document.createElement('button');
  deleteIcon.className = 'deleteTask';
  deleteIcon.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  div.appendChild(deleteIcon);

  deleteIcon.addEventListener('click', () => {
    removeTodo(todo.index);
  });

  miniForm.addEventListener('change', (e) => {
    e.preventDefault();
    editTodo(input.value, todo.index);
  });

  todoCheck.addEventListener('click', () => {
    isCompleted(todo.index);
  });

  if (todo.completed) {
    todoCheck.classList.add('decor');
    p.style.textDecoration = 'line-through';
  } else {
    todoCheck.classList.remove('decor');
  }

  mainContainer.appendChild(div);
};

export default populateTodo;
