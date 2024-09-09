let numeroDeContas = 0
let valorTotal = 0

let resposta = ''

function registrarConta(){
  const descricao = document.getElementById('inDescricao')
  const valor = Number(document.getElementById('inValor').value)
  const lista = document.getElementById('outLista')
  const total = document.getElementById('outTotal')
  
  
  numeroDeContas++
  valorTotal += valor
  resposta += descricao.value + ' - R$: ' + valor + '\n'
  
  lista.textContent = resposta + '----------------------------------------'
  total.textContent = numeroDeContas + ' - Total R$: ' + valorTotal.toFixed(2)
  
  descricao.value = ''
  document.getElementById('inValor').value = ''
  descricao.focus()
}

const botao = document.getElementById('btRegistrar')
botao.addEventListener('click', registrarConta)