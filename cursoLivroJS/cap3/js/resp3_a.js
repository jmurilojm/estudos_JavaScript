/*
a) Elaborar um programa que leia um número. Informe se ele é par ou impar. A Figura 3.7 ilustra a tela de execução do programa. Para os exercícios, foi utilizada uma figura padrão, mas você pode substituí-la caso tenha interesse.
*/

/*
const numero = 6

if(numero % 2 == 0){
  alert('Par')
} else {
  alert('Impar')
}
*/

const botao = document.getElementById('btVerificar')
botao.addEventListener('click', verificar)



function verificar(){
  let numero = document.getElementById('inNumero')
  const resposta = document.getElementById('outResposta')
  
  //
  numero = Number(numero.value)
  if (numero % 2 == 0) {
    resposta.textContent = 'O número ' + numero + ' é PAR.'
  } else {
    resposta.textContent = 'O número ' + numero + ' é IMPAR.'
  }
}