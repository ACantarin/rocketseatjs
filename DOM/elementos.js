var linkElement = document.createElement('a');
linkElement.setAttribute('href','http://rocketseat.com.br');

var textElement = document.createTextNode('Acessar site da Rocketseat');
linkElement.appendChild(textElement);

var containerElement = document.getElementById('app');
containerElement.appendChild(linkElement);
