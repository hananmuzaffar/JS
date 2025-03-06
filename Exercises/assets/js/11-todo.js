const todoList = [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const {name, dueDate} = todoObject;
    const html = `
                  <div>${name}</div>
                  <div>${dueDate}</div>
                  <button class="delete-btn" onclick="
                    todoList.splice(${i}, 1);
                    renderTodoList();
                  ">Delete</button>
                `;
    todoListHTML += html;
  }

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
}
