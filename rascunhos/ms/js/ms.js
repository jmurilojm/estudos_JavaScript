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
  [01, 04, 08, 21, 46, 51]
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
  [01, 04, 08, 21, 46, 51]
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
      document.getElementById('outRetorno').textContent += 'Nº ' + mega + ': ' +  '\n'
    } else {
      console.log('Nº ' + mega + ': ' + total)
      document.getElementById('outRetorno').textContent += 'Nº ' + mega + ': ' + total + '\n'
      sorteados.push({ numero: mega, saida: total })
    }
  }
}



const inNov = document.getElementById('inNov')
const inDez = document.getElementById('inDez')
const inTodos = document.getElementById('inTodos')
inNov.addEventListener('click',novembro)
inDez.addEventListener('click',dezembro)
inTodos.addEventListener('click',listarTodos)



function janeiro() {
  limpar()
  analisar(jane)
  return
}
function fevereiro() {
  limpar()
  analisar(feve)
  return
}
function marco() {
  limpar()
  analisar(marc)
  return
}
function abril() {
  limpar()
  analisar(abri)
  return
}
function maio() {
  limpar()
  analisar(maio)
  return
}
function junho() {
  limpar()
  analisar(junh)
  return
}
function julho() {
  limpar()
  analisar(julh)
  return
}
function agosto() {
  limpar()
  analisar(agos)
  return
}
function setembro() {
  limpar()
  analisar(sete)
  return
}
function outubro(){
  limpar()
  analisar(outu)
  return
}
function novembro(){
  limpar()
  analisar(nove)
  return
}
function dezembro(){
  limpar()
  analisar(deze)
  return
}
function listarTodos(){
  limpar()
  analisar(todos)
  return
}

function limpar(){
  document.getElementById('outRetorno').textContent = ''
}