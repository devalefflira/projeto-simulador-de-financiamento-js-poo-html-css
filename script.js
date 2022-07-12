import { Financiamento } from './financiamento.js';

// Variáveis - Elementos do Input - Manipulação desses elementos

const textoValor = document.querySelector('#textoValor');
const textoEntrada = document.querySelector('#textoEntrada');
const textoTaxaJuros = document.querySelector('#textoTaxaJuros');
const textoPrazo = document.querySelector('#textoPrazo');

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

// Manipulação dos dados da Tabela

const corpoTabela = document.querySelector('#corpoTabela');

// Criação de um Listener para o botão Calcular

const botaoCalcular = document.querySelector('#botaoCalcular');

botaoCalcular.addEventListener('click', function () {
  const valor = parseFloat(textoValor.value);
  const entrada = parseFloat(textoEntrada.value);
  const taxaJuros = parseFloat(textoTaxaJuros.value);
  const prazo = parseFloat(textoPrazo.value);
  let simulacao;
  simulacao = new Financiamento(valor, entrada, taxaJuros, prazo);
  simulacao.calcParcelasMensais();
  simulacao.exibeParcelas();
});
