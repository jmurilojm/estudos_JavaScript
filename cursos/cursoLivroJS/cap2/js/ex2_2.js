/*
Elaborar um programa que recebe o titulo e o tempo de duracao de um filme, em minutos e apresente este mesmo titulo com a duracao em horas e minutos
*/

function converterDuracao(){
  // criar referência aos elementos
  const inTitulo = document.getElementById('inTitulo')
  const inDuracao = document.getElementById('inDuracao')
  const outTitulo = document.getElementById('outTitulo')
  const outResposta = document.getElementById('outResposta')
  
  // obter conteudo dos campos de entrada
  const titulo = inTitulo.value
  const duracao = Number(inDuracao.value)
  
  // tratar os dados
  const horas = Math.floor(duracao / 60)
  const minutos = duracao % 60
  
  // exibir o resultado
  outTitulo.textContent = titulo
  outResposta.textContent = 'Duração: ' + horas + ' Horas e ' + minutos + ' min'
}

const botao = document.getElementById('btConverter')
botao.addEventListener('click', converterDuracao)