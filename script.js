/*
# LISTA SUSPENSA

- A lista suspensa irá aparecer na página se o usuário clicar no checkbox,
demonstrando o interesse pela carência e desaparecerá se desmarcá-lo.

*/

const comCarencia = document.querySelector('#comCarencia');
const listaSuspensa = document.querySelector('#listaSuspensa');

comCarencia.addEventListener('change', function () {
  if (this.checked) {
    listaSuspensa.removeAttribute('hidden');
  } else {
    listaSuspensa.setAttribute('hidden', 'hidden');
  }
});
