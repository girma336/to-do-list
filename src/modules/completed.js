const isCompleted = (index) => {
  const todoList = JSON.parse(localStorage.getItem('todo'));
  todoList.forEach((data) => {
    if (data.index === index) {
      if (data.completed === true) {
        data.completed = false;
      } else {
        data.completed = true;
      }
    }
  });
  localStorage.setItem('todo', JSON.stringify(todoList));
  window.location.reload();
};

export default isCompleted;