const nove = [
  [06, 23, 35, 36, 37, 59],
  [13, 23, 26, 29, 45, 59],
  [14, 32, 41, 43, 48, 60],
  [11, 17, 23, 36, 47, 51],
  [10, 23, 30, 31, 49, 56],
  [20, 24, 27, 46, 57, 58],
  [07, 27, 32, 33, 36, 53],
  [05, 13, 39, 51, 58, 60],
  [11, 36, 46, 53, 55, 60],
  [06, 12, 13, 20, 38, 60],
  [06, 30, 35, 38, 41, 56],
  [17, 20, 31, 34, 40, 42]
]

const deze = [
  [07, 11, 27, 41, 56, 59],
  [12, 15, 17, 30, 40, 52],
  [03, 14, 21, 22, 37, 39],
  [05, 25, 29, 30, 43, 47],
  [01, 04, 08, 21, 46, 51],
  [01, 27, 30, 41, 46, 57],
  [04, 07, 16, 35, 46, 54]
]

const todos = [
  ['Nov', 06, 23, 35, 36, 37, 59],
  [13, 23, 26, 29, 45, 59],
  [14, 32, 41, 43, 48, 60],
  [11, 17, 23, 36, 47, 51],
  [10, 23, 30, 31, 49, 56],
  [20, 24, 27, 46, 57, 58],
  [07, 27, 32, 33, 36, 53],
  [05, 13, 39, 51, 58, 60],
  [11, 36, 46, 53, 55, 60],
  [06, 12, 13, 20, 38, 60],
  [06, 30, 35, 38, 41, 56],
  [17, 20, 31, 34, 40, 42],

  ['Dez', 07, 11, 27, 41, 56, 59],
  [12, 15, 17, 30, 40, 52],
  [03, 14, 21, 22, 37, 39],
  [05, 25, 29, 30, 43, 47],
  [01, 04, 08, 21, 46, 51],
  [01, 27, 30, 41, 46, 57],
  [04, 07, 16, 35, 46, 54],
  ['virada23', 21, 24, 33, 41, 48, 56]
]



function analisar(mes) {
  let sorteados = []
  const tam = mes.length
  const periodo = 'Todos'

  for (let mega = 1; mega <= 60; mega++) {
    let total = 0
    for (let i = 0; i < tam; i++) {
      if (mes[i].indexOf(mega) != -1) {
        total++
      }
    }
    if (total == 0) {
      console.log('Nº ' + mega + ': ')
      document.getElementById('outRetorno').textContent += 'Nº ' + mega + ': ' + '\n'
    } else {
      console.log('Nº ' + mega + ': ' + total)
      document.getElementById('outRetorno').textContent += 'Nº ' + mega + ': ' + total + '\n'
      sorteados.push({ numero: mega, saida: total })
    }
  }
}



const btNov = document.getElementById('btNov')
const btDez = document.getElementById('btDez')
const btTodos = document.getElementById('btTodos')
const btRelacionar = document.getElementById('btRelacionar')

btNov.addEventListener('click', novembro)
btDez.addEventListener('click', dezembro)
btTodos.addEventListener('click', listarTodos)
btRelacionar.addEventListener('click', analisarPalpite)




function novembro() {
  document.getElementById('outSorteios').textContent = 'Sorteios: ' + nove.length
  limpar()
  analisar(nove)
  return
}

function dezembro() {
  document.getElementById('outSorteios').textContent = 'Sorteios: ' + deze.length
  limpar()
  analisar(deze)
  return
}

function listarTodos() {
  document.getElementById('outSorteios').textContent = 'Sorteios: ' + todos.length
  limpar()
  analisar(todos)
  return
}

function analisarPalpite(){
  limpar()
  palpite()
  return
}

function limpar() {
  document.getElementById('outRetorno').textContent = ''
  return
}


function palpite() {
  const outRetorno = document.getElementById('outRetorno')
  document.getElementById('outSorteios').textContent = 'Sorteios: ' + todos.length
  
  const retorno = outRetorno
  
  let aposta = [30,46, 23,27, 36,41,60, 6,7,11,13,17,20,35,51,56,59]
  
  for (let i = 0; i < todos.length; i++) {
    let lista = ''
    for (let n = 0; n < todos[i].length; n++) {

      let indice = aposta.indexOf(todos[i][n])

      if (indice != -1) {
        lista += ' ' + todos[i][n] + ' '
      }

    }
    
    if(lista.length > 0){
      retorno.textContent += '(' + lista + ')\n'
    }
    
  }
}