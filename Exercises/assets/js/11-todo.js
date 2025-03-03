const todoList = [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }

  document.querySelector('.task-list')
    .innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.task-name');
  const name = inputElement.value;

  todoList.push(name);
  console.log(todoList);
  inputElement.value = '';

  renderTodoList();
}
