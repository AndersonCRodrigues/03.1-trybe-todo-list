const listTasks = document.querySelector('#lista-tarefas');
const inputText = document.querySelector('#texto-tarefa');
const addTaskBtn = document.querySelector('#criar-tarefa');
const deleteAllTaskBtn = document.querySelector('#apaga-tudo');
const removeCompletedTaskBtn = document.querySelector('#remover-finalizados');
const saveTasksBtn = document.querySelector('#salvar-tarefas');
const moveUpBtn = document.querySelector('#mover-cima');
const moveDownBtn = document.querySelector('#mover-baixo');
const removeSelectedBtn = document.querySelector('#remover-selecionado');

function addTaskItem() {
  if (inputText.value !== '') {
    const itemtask = document.createElement('li');
    itemtask.innerText = inputText.value;
    listTasks.appendChild(itemtask);
    inputText.value = null;
  }
}

function selectTask(event) {
  const origin = event.target;
  const item = document.querySelectorAll('li');
  for (let i = 0; i < item.length; i += 1) item[i].id = '';
  origin.id = 'selected';
}

function completedTask(event) {
  const origin = event.target;
  if (origin.classList.contains('completed')) origin.classList.toggle('completed');
  else origin.classList.toggle('completed');
}

function clearTasks() {
  let child = listTasks.lastElementChild;
  while (child) {
    listTasks.removeChild(child);
    child = listTasks.lastElementChild;
  }
}

function removeCompleted() {
  const completeTask = document.querySelectorAll('.completed');
  if (completeTask) {
    for (let i = 0; i < completeTask.length; i += 1) {
      listTasks.removeChild(completeTask[i]);
    }
  }
}

function loadTasks() {
  const arrayTasks = JSON.parse(localStorage.getItem('tasks'));
  if (localStorage.tasks) {
    for (let i = 0; i < arrayTasks.length; i += 1) {
      inputText.value = `${arrayTasks[i].text}`;
      addTaskItem();
      listTasks.lastChild.classList = `${arrayTasks[i].class}`;
    }
  }
}

function saveTasks() {
  const listItem = document.querySelectorAll('li');
  const array = [];
  for (let i = 0; i < listItem.length; i += 1) {
    const value = {
      class: '',
      text: '',
    };
    value.class = listItem[i].className;
    value.text = listItem[i].innerText;
    array.push(value);
  }
  localStorage.setItem('tasks', JSON.stringify(array));
}

function change(elementA, elementB, att) {
  const a = elementA;
  const b = elementB;
  const auxiliar = a[att];
  a[att] = b[att];
  b[att] = auxiliar;
}

// Lógica baseada no projeto do Fransuelio Nobre
function moveTaskItem(event) {
  const origem = event.target.id;
  const moveTask = document.querySelector('#selected');
  if (moveTask) {
    let target = moveTask.nextElementSibling;
    if (origem === 'mover-cima') target = moveTask.previousElementSibling;
    if (!target) return;
    change(moveTask, target, 'innerText');
    change(moveTask, target, 'className');
    change(moveTask, target, 'id');
  }
}

function removeSelected() {
  const selectedItem = document.querySelector('#selected');
  if (selectedItem) listTasks.removeChild(selectedItem);
}

addTaskBtn.addEventListener('click', addTaskItem);
listTasks.addEventListener('click', selectTask);
listTasks.addEventListener('dblclick', completedTask);
deleteAllTaskBtn.addEventListener('click', clearTasks);
removeCompletedTaskBtn.addEventListener('click', removeCompleted);
saveTasksBtn.addEventListener('click', saveTasks);
window.addEventListener('load', loadTasks);
moveUpBtn.addEventListener('click', moveTaskItem);
moveDownBtn.addEventListener('click', moveTaskItem);
removeSelectedBtn.addEventListener('click', removeSelected);
