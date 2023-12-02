/*
d) Elaborar um programa que leia três lados e verifique se eles podem ou não formar um triângulo. Para formar um triângulo, um dos lados não pode ser maior que a soma dos outros dois. Caso possam formar um triângulo, exiba também qual o tipo do triângulo: Equilátero (3 lados iguais), Isosceles (2 lados iguais) e Escaleno (3 lados diferentes). A Figura 3.10 exibe um exemplo de execução do exercício.
*/

/*
const a = 1
const b = 2
const c = 3

if(a > (b + c) || (b > (c + a)) || c > (a + b)){
  alert('nao é triângulo')
} else{
  if(a == b && b == c){
    alert('Equilátero')
  }
  else if(a == b || b == c || c == a){
    alert('Isosceles')
  }
  else{
    alert('Escaleno')
  }
}
*/



const botao = document.getElementById('btVerificar')
botao.addEventListener('click', verificarLados)



function verificarLados() {
  const a = Number(document.getElementById('inLadoA').value)
  const b = Number(document.getElementById('inLadoB').value)
  const c = Number(document.getElementById('inLadoC').value)
  const resposta = document.getElementById('outResposta')
  const tipo = document.getElementById('outTipo')
  
  
  const mensagem = 'Lados podem formar um Triângulo.'

  if (a == '' || b == '' || c == '') {
    alert('Por favor, preencha todos os campos!')
  } else {
    if (a > (b + c) || b > (c + a) || c > (a + b)) {
      resposta.textContent = 'Não é um Triângulo'
      tipo.textContent = ''
    } else {
      if (a == b && b == c) {
        resposta.textContent = mensagem
        tipo.textContent = 'Tipo: Equilátero'
      }
      else if (a == b || b == c || c == a) {
        resposta.textContent = mensagem
        tipo.textContent = 'Tipo: Isósceles'
      }
      else {
        resposta.textContent = mensagem
        tipo.textContent = 'Tipo: Escaleno'
      }
    }
  }
}