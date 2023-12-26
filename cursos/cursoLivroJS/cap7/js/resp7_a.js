/*
a) Elaborar um programa que leia o nome e a idade de um atleta de um clube de natação. O programa deve exibir o nome com "-" abaixo das letras do nome e a categoria do atleta, que pode ser "Infantil" (até 12 anos), "Juvenil" (entre 13 e 18 anos) ou "Adulto" (acima de 18 anos). O programa deve conter as funções:

• retornarTracos() que receba um nome como parâmetro e retorne uma linha com "-" para as letras do nome (nos espaços, manter os espaços).

• categorizarAluno() que receba um número como parâmetro e retorne a categoria do aluno, conforme indicação no enunciado do exercício.

A Figura 7.5 ilustra os dados de entrada e saída do programa.
*/


function categorizarAluno(){
  const inNome = document.getElementById('inNome')
  const inIdade = document.getElementById('inIdade')
  const outNome = document.getElementById('outNome')
  const outCategoria = document.getElementById('outCategoria')
  
  const nome = inNome.value
  const idade = Number(inIdade.value)
  const retornoNome = outNome
  const retornoCategoria = outCategoria
  
  outNome.textContent = nome
  outTracos.textContent = retornarTracos(nome)
  outCategoria.textContent = categorizar(idade)
}
const btCategoria = document.getElementById('btCategoria')
btCategoria.addEventListener('click', categorizarAluno)


function retornarTracos(frase){
  let tracos = ''
  for(let i = 0; i < frase.length; i++){
    if(frase.charAt(i) != ' '){
      tracos += '- '
    } else{
      tracos += ' '
    }
  }
  
  return tracos
}

function categorizar(id){
  let categ = ''
  if(id <= 12){
    categ = 'Infantil'
  } else if(id >= 13 && id < 18 ){
    categ = 'Juvenil'
  } else{
    categ = 'Adulto'
  }
  
  return categ
}