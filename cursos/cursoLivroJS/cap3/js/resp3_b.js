/*
b) Elaborar um programa que leia a velocidade permitida em uma estrada e a velocidade de um condutor. Se a velocidade for inferior ou igual à permitida, exiba "Sem Multa". Se a velocidade for de até 20% maior que a permitida, exiba "Multa Leve". E, se a velocidade for superior a 20% da velocidade permitida, exiba "Multa Grave" - conforme ilustra a Figura 3.8.
*/

/*
const velocidadePermitida = 80
const velocidadeDoCondutor = 97

if(velocidadeDoCondutor <= velocidadePermitida){
  alert('Sem multa!')
} else if(velocidadeDoCondutor <= velocidadePermitida + (velocidadePermitida * 0.2)) {
  alert('Multa leve!')
} else {
  alert('Multa Grave!')
}
*/

function verificarVelocidade(){
  const velocidade = Number(document.getElementById('inVelocidade').value)
  const condutor = Number(document.getElementById('inCondutor').value)
  const resposta = document.getElementById('outResultado')
  
  
  //
  if(condutor <= velocidade){
    resposta.textContent = 'Situação: Sem Multa'
    resposta.style.color = 'green'
  } else if(condutor <= velocidade + (velocidade * 0.2)){
    resposta.textContent = 'Situação: Multa Leve'
    resposta.style.color = 'orange'
  } else{
    resposta.textContent = 'Situação: Multa Grave'
    resposta.style.color = 'red'
  }
}

const botao = document.getElementById('btVerificar')
botao.addEventListener('click', verificarVelocidade)