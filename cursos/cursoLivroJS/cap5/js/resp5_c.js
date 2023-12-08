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
  
  if(isNaN(nome) == false){
    alert('Digite um Nome.')
    inNome.value = ''
    inNome.focus()
    return
  }
  
  if(acertos == ''){
    alert('Por favor, preencha todos os campos!')
    return
  }

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
  
  let aprovados = []
  for (let i = 0; i < candidatos.length; i++) {
    if (candidatos[i].acertos >= pontuacaoMin) {
      aprovados.push({nome:candidatos[i].nome, acertos: candidatos[i].acertos})
    }
  }
  
  // colocando tudo em ordem crescente
  while (true) {
    for (let i = 0; i < (aprovados.length - 1); i++) {
      if (aprovados[i].acertos > aprovados[i + 1].acertos) {
        let x = aprovados[i + 1]
        aprovados[i + 1] = aprovados[i]
        aprovados[i] = x
      }
    }
  
    let cont = 0
    for (let i = 0; i < (aprovados.length - 1); i++) {
      if (aprovados[i].acertos > aprovados[i + 1].acertos) {
        cont++
      }
    }
  
    if (cont == 0) {
      break
    }
  }
  
  // invertendo array de aprovados
  aprovados.reverse()
  
  // criando lista de aprovados para impressão
  let listaDeAprovados = ''
  for(let i = 0; i < aprovados.length; i++){
      listaDeAprovados += (i + 1) + 'º ' + aprovados[i].nome + ' - ' + aprovados[i].acertos + ' acertos\n'
    
  }
  
  retorno.textContent = listaDeAprovados
}

function listarTodos(){
  const outRetorno = document.getElementById('outRetorno')
  
  const retorno = outRetorno
  
  let lista = ''
  for (let i = 0; i < candidatos.length; i++){
    lista += candidatos[i].nome + ' - ' + candidatos[i].acertos + ' acertos\n'
  }
  
  retorno.textContent = 'Todos os Candidatos\n' + '-------------------\n' + lista
}