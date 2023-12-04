/*
Elaborar um programa para um restaurante que leia o preço por kg e o
consumo(em gramas) de um cliente.Exiba o valor a ser pago, conforme ilustra a Figura 2.10.
*/

function calcularValor(){
  const valor = document.getElementById('valor')
  const consumo = document.getElementById('consumo')
  const resultado = document.getElementById('pagar')
  
  
  //
  const valorAPagar = Number(valor.value) * Number(consumo.value) / 1000
  
  
  //
  resultado.textContent = 'Valor à pagar R$: ' + valorAPagar.toFixed(2)
}

const botao = document.getElementById('calcular')
botao.addEventListener('click', calcularValor)