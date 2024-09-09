/*
b) Elaborar um programa para uma lan house de um aeroporto – O programa deve

ler o valor de cada 15 minutos de uso de um computador e o tempo de

uso por um cliente em minutos. Informe o valor a ser pago pelo cliente,
sabendo que as frações extras de 15 minutos devem ser cobradas de
forma integral. A Figura 2.12 exibe um exemplo com dados do
programa.
*/

function calcular(){
  const valor = document.getElementById('valor').value
  const tempo = document.getElementById('tempo').value
  const resposta = document.getElementById('resposta')
  const intervalo = 15
  
  
  //
  const fracaoDeTempo = Math.ceil(tempo / intervalo)
  const valorAPagar = fracaoDeTempo * valor
  
  
  //
  resposta.textContent = 'Valor à pagar R$: ' + valorAPagar.toFixed(2)
}

const botao = document.getElementById('calculo')
botao.addEventListener('click', calcular)