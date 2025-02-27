const todoList = [];

function addTodo() {
  const inputElement = document.querySelector('.task-name');
  const name = inputElement.value;

  todoList.push(name);
  console.log(todoList);
  inputElement.value = '';
}