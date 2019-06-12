var listElement  = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var btnElement   = document.querySelector('#app button');
var todoArray = [
  'Fazer café',
  'Estudar JS',
  'Acessar a comunidade Rocketseat'
];

function renderTodos() {
  listElement.innerHTML = '';
  for(todo of todoArray) {
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    todoElement.appendChild(todoText);
    listElement.appendChild(todoElement);
  }
}

renderTodos();

function addTodo() {
  var todoText = inputElement.value;
  todoArray.push(todoText);
  inputElement.value = '';
  renderTodos();
}

btnElement.onclick = addTodo;
