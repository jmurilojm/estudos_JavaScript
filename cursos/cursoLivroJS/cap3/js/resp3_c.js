/*
c) Elaborar um programa para simular um parquímetro, o qual leia o valor de moedas depositado em um terminal de estacionamento rotativo. O programa deve informar o tempo de permanência do veículo no local e o troco (se existir), como no exemplo da Figura 3.9. Se o valor for inferior ao tempo mínimo, exiba a mensagem: "Valor Insuficiente. Considerar os valores/tempos da Tabela 3.6 (o máximo é 120 min).

Tabela 3.6 – Valores do Parquímetro.

Valor R$ - Tempo(min)
  1,00       30
  1,75       60
  3,00       120
*/

/*
const valorMoedas = 1.74

if(valorMoedas >= 3){
  alert('120 min')
  const troco = (valorMoedas - 3).toFixed(2)
  alert(troco)
} else if(valorMoedas >= 1.75){
  alert('60 min')
  const troco = (valorMoedas - 1.75).toFixed(2)
  alert(troco)
} else{
  alert('30 min')
  const troco = (valorMoedas - 1).toFixed(2)
  alert(troco)
}
*/



const botao = document.getElementById('btCalcular')
botao.addEventListener('click', calcularDeposito)



function calcularDeposito(){
  const valor = Number(document.getElementById('inValor').value)
  
  
  if(valor >= 3){
    validar(3, 120)
  }
  else if(valor >= 1.75){
    validar(1.75, 60)
  }
  else if(valor >= 1){
    validar(1, 30)
  }
  else{
    document.getElementById('outTempo').textContent = 'Valor Insuficiente!'
    document.getElementById('outTroco').textContent = ''
  }
}

function validar(valorPermanencia, permanenciaMaxima){
  const deposito = Number(document.getElementById('inValor').value)
  const tempo = document.getElementById('outTempo')
  const troco = document.getElementById('outTroco')
  
  tempo.textContent = 'Tempo: ' + permanenciaMaxima + ' min'
  troco.textContent = 'Troco R$: ' + (deposito - valorPermanencia).toFixed(2)
}