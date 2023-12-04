/*
c) Elaborar um programa que leia um número e verifique se ele é ou não perfeito. Um número dito perfeito é aquele que é igual à soma dos seus divisores inteiros (exceto o próprio número). O programa deve exibir os divisores do número e a soma deles. A Figura 4.17 exibe a página do programa com um exemplo de número perfeito.
*/


const botao = document.getElementById('btAnalisar')
botao.addEventListener('click', analisarNumeroPerfeito)



function analisarNumeroPerfeito(){
  const numero = Number(document.getElementById('inNumero').value)
  const saida1 = document.getElementById('outRetorno1')
  const saida2 = document.getElementById('outRetorno2')
  
  
  // análises
  let divisores = ''
  let soma = 0
  //let totalDeDivosores = 0
  for (let i = 1; i <= numero; i++) {
    console.log(i)
    if (numero % i == 0) {
      if (i != numero) {
        divisores += i + ' '
        soma += i
        //totalDeDivosores++
      }
    }
  }
  
  saida1.textContent = 'Divisores do ' + numero + ': ' + divisores + ' (Soma: ' + soma + ')'
  
  if(numero == soma){
    saida2.textContent = 'O número ' + numero + ' é um Número Perfeito'
    saida2.style.color = 'green'
  } else{
    saida2.textContent = 'O número ' + numero + ' NÃO é um Número Perfeito'
    saida2.style.color = 'red'
  }
}