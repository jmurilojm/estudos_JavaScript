/*
Elaborar um programa para uma revenda de veículos. O programa deve
ler modelo e preço do veículo. Apresentar como resposta o valor da entrada
(50%) e o saldo em 12x. A Figura 2.9 ilustra uma execução desse programa.
*/

function mostrarPromocao(){
  //
  const inVeiculo = document.getElementById('inVeiculo')
  const inPreco = document.getElementById('inPreco')
  const outVeiculo = document.getElementById('outVeiculo')
  const outEntrada = document.getElementById('outEntrada')
  const outRestante = document.getElementById('outRestante')
  
  
  //
  const valorDeEntrada = Number(inPreco.value) / 2
  const valorRestante = valorDeEntrada / 12
  
  
  //
  outVeiculo.textContent = 'Promoçao: ' + inVeiculo.value
  outEntrada.textContent = 'Entrada de R$: ' + valorDeEntrada.toFixed(2)
  outRestante.textContent = '+ 12x de R$: ' + valorRestante.toFixed(2)
}

const botao = document.getElementById('btVer')
botao.addEventListener('click', mostrarPromocao)