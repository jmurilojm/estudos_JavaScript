/*
c) Elaborar um programa que leia nome e número de acertos de candidatos inscritos em um concurso. Listar os dados a cada inclusão. Ao clicar no botão Aprovados 2ª Fase, ler o número de acertos para aprovação dos candidatos para a 2ª fase do concurso, conforme ilustra a Figura 5.14. Ο programa deve, então, exibir os candidatos aprovados, ou seja, apenas os que obtiveram nota maior ou igual à nota informada. Exibir os candidatos aprovados em ordem decrescente de número de acertos (Figura 5.15). Caso nenhum candidato tenha sido aprovado, exibir mensagem.
*/

let candidatos = []

const btAdicionar = document.getElementById('btAdicionar')
const btAprovados = document.getElementById('btAprovados')
const btListar = document.getElementById('btListar')

btAdicionar.addEventListener('click', adicionarCandidato)
btAprovados.addEventListener('click', listarAprovados)
btListar.addEventListener('click', listarTodos)



function adicionarCandidato() {
  const inNome = document.getElementById('inNome')
  const inAcertos = document.getElementById('inAcertos')
  const outRetorno = document.getElementById('outRetorno')


  const nome = inNome.value
  const acertos = Number(inAcertos.value)
  const retorno = outRetorno

  candidatos.push({ nome: nome, acertos: acertos })

  let total = 0
  for (let i = 0; i < candidatos.length; i++){
    total++
  }

  retorno.textContent = 'Inscritos: ' + total
  inNome.value = ''
  inAcertos.value = ''
  inNome.focus()
}

function listarAprovados(){
  const outRetorno = document.getElementById('outRetorno')
  const pontuacaoMin = Number(prompt('Quantidade mínima de acertos?'))
  
  const retorno = outRetorno
  
  let aprovados = ''
  
  for(let i = 0; i < candidatos.length; i++){
    if(candidatos[i].acertos >= pontuacaoMin){
      aprovados += candidatos[i].nome + ' - ' + candidatos[i].acertos + '\n'
    }
  }
  
  retorno.textContent = aprovados
}

function listarTodos(){
  const outRetorno = document.getElementById('outRetorno')
  
  const retorno = outRetorno
  
  let lista = ''
  for (let i = 0; i < candidatos.length; i++){
    lista += candidatos[i].nome + ' - ' + candidatos[i].acertos + '\n'
  }
  
  retorno.textContent = 'Todos os Candidatos\n' + '-------------------\n' + lista
}