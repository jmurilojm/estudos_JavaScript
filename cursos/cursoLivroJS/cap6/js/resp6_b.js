/*
b) Elaborar um programa que leia o nome de um autor de um livro. Em seguida, exiba-o no formato de uma citação bibliográfica com o sobrenome, seguido pelas iniciais do nome, conforme o exemplo ilustrado na Figura 6.17.

Nome do Autor: Mauricio Samy Silva
Citação Bibliográfica: SILVA, M. S.
*/


/*
let nome = 'Jose Murilo Lopes Ferreira'
nome = nome.trim().split(' ')
let partes = []

for(let i = 0; i < nome.length; i++){
  if(i == (nome.length - 1)){
    partes.push(nome[i])
  } else{
    partes.push(nome[i].charAt(0))
  }
}


let citacao = ''

citacao = partes[partes.length - 1] + ', '

for(let i = 0; i < (partes.length - 1); i++){
  citacao += partes[i] + '. '
}
console.log(citacao)
*/


const btGerar = document.getElementById('btGerar')
btGerar.addEventListener('click', gerarCitacao)


function gerarCitacao(){
  const inNome = document.getElementById('inNome')
  const outRetorno = document.getElementById('outRetorno')
  
  let nome = inNome.value
  const retorno = outRetorno
  nome = nome.trim().toUpperCase().split(' ')
  let partes = []
  
  for (let i = 0; i < nome.length; i++) {
    if (i == (nome.length - 1)) {
      partes.push(nome[i])
    } else {
      partes.push(nome[i].charAt(0))
    }
  }
  
  
  let citacao = ''
  
  citacao = partes[partes.length - 1] + ', '
  
  for (let i = 0; i < (partes.length - 1); i++) {
    citacao += partes[i] + '. '
  }
  
  
  retorno.textContent = 'Citação Bibliográfica: ' + citacao
  inNome.value = ''
}