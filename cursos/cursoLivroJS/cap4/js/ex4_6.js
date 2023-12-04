/*
// verificar se o numero e primo

let numero = Number(prompt('Numero?'))

let divisores = 0

for(let i = 1; i <= numero;i++){
  if(numero % i == 0){
    divisores++
  }
}
if(divisores == 1 || divisores == 2){
  alert('É Primo')
}
*/


const botao = document.getElementById('btVerificar')
botao.addEventListener('click', verificarPrimo)

function verificarPrimo(){
  const numero = Number(document.getElementById('inNumero').value)
  const saida = document.getElementById('outRetorno')
  
  
  if(numero == '' || isNaN(numero)){
    alert('Digite um número válido!')
    return
  }
  
  
  let divisores = 0
  
  for(let i = 1; i <= numero; i++){
    if(numero % i == 0){
      divisores++
    }
  }
  
  if(divisores == 1 || divisores == 2){
    saida.textContent = numero + ' é Primo!'
  } else{
    saida.textContent = 'O número ' + numero + ' posui mais de 02 divisores: ' + divisores
  }
}