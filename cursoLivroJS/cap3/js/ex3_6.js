/*
Em um determinado momento do dia, apenas notas de 10, 50 e 100 estão disponiveis em um terminal de caixa eletrônico. Elaborar um programa que leia um valor de saque de um cliente, verifique sua validade (ou seja, se pode ser pago com as notas disponíveis) e informe o número minimo de notas de 100, 50 e 10 necessárias para pagar esse saque. A Figura 36 exemplifica uma execução do programa.
*/

/*
let valor = 280

let por100 = 0
let por50 = 0
let por10 = 0

if(valor >= 100){
  por100 = Math.floor(valor / 100)
  valor -= Math.floor(valor / 100) * 100
}

if(valor >= 50){
  por50 = Math.floor(valor / 50)
  valor -= Math.floor(valor / 50) * 50
}

if(valor >= 10){
  por10 = Math.floor(valor / 10)
  valor -= Math.floor(valor / 10) * 10
}



console.log(por100, por50, por10)
*/

function verNotas(){
  const valor = document.getElementById('inValor').value
  const saida1 = document.getElementById('outSaida1')
  const saida2 = document.getElementById('outSaida2')
  const saida3 = document.getElementById('outSaida3')
  
  //
  let saque = Number(valor)
  let notas100 = 0
  let notas50 = 0
  let notas10 = 0
  
  if (saque >= 100) {
    notas100 = Math.floor(saque / 100)
    saque -= Math.floor(saque / 100) * 100
  }
  
  if (saque >= 50) {
    notas50 = Math.floor(saque / 50)
    saque -= Math.floor(saque / 50) * 50
  }
  
  if (saque >= 10) {
    notas10 = Math.floor(saque / 10)
    saque -= Math.floor(saque / 10) * 10
  }
  
  saida1.textContent = 'Notas de R$ 100: ' + notas100
  saida2.textContent = 'Notas de R$ 50: ' + notas50
  saida3.textContent = 'Notas de R$ 10: ' + notas10
}

const bt = document.getElementById('btExibir')
bt.addEventListener('click', verNotas)