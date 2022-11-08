import './style.css';
import './to-go-bg.jpg';

const tasks = [
  {
    description: 'creat repo',
    completed: false,
    index: 0,
  },
  {
    description: 'read book',
    completed: true,
    index: 1,
  },
];

const listFunc = () => {
  const taskContent = document.querySelector('#task-container');
  for (let i = 0; i < tasks.length; i += 1) {
    const task = document.createElement('div');
    task.classList.add('task');
    task.innerHTML = `
    <button class="checkTask"><i class="fa-solid fa-check"></i></button>
    <label for="${tasks.index}" contentEditable="true">${tasks[i].description}</label>
    <button class="deleteTask"><i class="fa-solid fa-trash-can"></i></button>
    `;
    taskContent.appendChild(task);
  }
};

listFunc();