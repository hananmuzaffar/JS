const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
  todoList.forEach(function(todoObject, index) {
    const {name, dueDate} = todoObject;
    const html = `
                  <div>${name}</div>
                  <div>${dueDate}</div>
                  <button class="delete-btn" onclick="
                    todoList.splice(${index}, 1);
                    renderTodoList();
                    storeTask();
                  ">Delete</button>
                `;
    todoListHTML += html;
  });
  document.querySelector('.task-list')
    .innerHTML = todoListHTML;
}

function addTodo() {
  const taskInputElement = document.querySelector('.task-name');
  const name = taskInputElement.value;

  const dateInputElement = document.querySelector('.due-date');
  const dueDate = dateInputElement.value;

  todoList.push({
    // name: name,
    // dueDate: dueDate
    name, dueDate
  });
  taskInputElement.value = '';

  renderTodoList();
  storeTask();
}

function storeTask() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}
