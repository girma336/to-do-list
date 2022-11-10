const removeTodo = (index) => {
  let todoList = JSON.parse(localStorage.getItem('todo'));
  todoList = todoList.filter((todo) => todo.index !== Number(index));
  let i = 1;
  todoList.forEach((todo) => {
    todo.index = i;
    i += 1;
  });
  localStorage.setItem('todo', JSON.stringify(todoList));
  window.location.reload();
};

export default removeTodo;
