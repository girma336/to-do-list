const editTodo = (description, index) => {
  const todoList = JSON.parse(localStorage.getItem('todo'));
  todoList.forEach((todo) => {
    if (todo.index === index) {
      todo.description = description;
    }
  });
  localStorage.setItem('todo', JSON.stringify(todoList));
  window.location.reload();
};

export default editTodo;
