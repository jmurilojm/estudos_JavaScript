/*
a) Elaborar um programa para gerar uma tabela com os jogos de uma fase eliminatória de um campeonato. O programa deve conter três funções (a serem executadas no evento click de cada botão) para: 1) validar o preenchimento, adicionar um clube ao vetor e listar os clubes; 2) listar os clubes (se houver); 3) montar a tabela de jogos, no formato primeiro x último, segundo x penúltimo e assim por diante. Exibir mensagem e não listar a tabela de jogos, caso o número de clubes informados seja impar. As figuras 5.11 e 5.12 ilustram as páginas do programa.
*/


let clubes = []
let cont = 0


const btAdicionar = document.getElementById('btAdicionar')
const btListar = document.getElementById('btListar')
const btMontar = document.getElementById('btMontar')

btAdicionar.addEventListener('click', adicionarClube)
btListar.addEventListener('click', listarClubes)
btMontar.addEventListener('click', montarTabela)


function adicionarClube(){
  const inClube = document.getElementById('inClube')
  const outTabela = document.getElementById('outTabela')
  
  const clube = inClube.value
  const tabela = outTabela
  
  if(clube == '' || clube == ' '){
    alert('Por favor, preencha o campo com valor válido!')
    return
  }
  
  clubes.push(clube)
  
  cont++
  tabela.textContent = 'Clubes cadastrados: ' + cont
  inClube.value = ''
  inClube.focus()
}

function listarClubes(){
  const outTabela = document.getElementById('outTabela')
  
  const tabela = outTabela
  
  let lista = ''
  
  if(clubes.length == 0){
    tabela.textContent = 'Não há Clubes cadastrados.'
    return
  } else{
    for(let i = 0; i < clubes.length; i++){
      lista += (i + 1) + '. ' + clubes[i] + '\n'
    }
  }
  
  tabela.textContent = lista
}

function montarTabela(){
  const outTabela = document.getElementById('outTabela')
  
  const tabela = outTabela
  let jogos = ''
  
  if(clubes.length == 0){
    tabela.textContent = 'Sem cadastros!'
    return
  } else if(clubes.length % 2 == 1){
    alert('Cadastre mais um Clube para criar a Tabela.')
    return
  } else{
    for(let i = 0; i < (clubes.length / 2); i++){
      jogos += clubes[i] + ' x ' + clubes[(clubes.length - 1) - i] + '\n'
    }
  }
  
  tabela.textContent = jogos
}