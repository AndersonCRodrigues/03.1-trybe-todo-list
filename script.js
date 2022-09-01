function criaElemento(elemento, texto, atributo, valor) {
  const novoElemento = document.createElement(elemento);
  novoElemento.innerText = texto;
  novoElemento.setAttribute(atributo, valor);
  return novoElemento;
}

function addTarefa() {
  const input = document.querySelector('#texto-tarefa');
  if (input.value !== '') {
    const tarefa = criaElemento('li', 'class', 'list-tasks');
    const lista = document.querySelector('#lista-tarefas');
    tarefa.innerText = input.value;
    lista.appendChild(tarefa);
    input.value = null;
  }
}

const body = document.getElementsByTagName('body')[0];
body.appendChild(criaElemento('header', 'Minha Lista de Tarefas', 'class', 'header'));
const textP = 'Clique duas vezes em um item para marcá-lo como completo';
body.appendChild(criaElemento('p', textP, 'id', 'funcionamento'));
body.appendChild(criaElemento('input', '', 'id', 'texto-tarefa'));
body.appendChild(criaElemento('ol', '', 'id', 'lista-tarefas'));
body.appendChild(criaElemento('button', 'criar-tarefa', 'id', 'criar-tarefa'));

btnTarefas = document.querySelector('#criar-tarefa');
btnTarefas.addEventListener('click', addTarefa);
