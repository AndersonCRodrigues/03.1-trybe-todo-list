function criaElemento(elemento, texto, atributo, valor) {
  const novoElemento = document.createElement(elemento);
  novoElemento.innerText = texto;
  novoElemento.setAttribute(atributo, valor);
  return novoElemento;
}

const body = document.getElementsByTagName('body')[0];
body.appendChild(criaElemento('header', 'Minha Lista de Tarefas', 'class', 'header'));
