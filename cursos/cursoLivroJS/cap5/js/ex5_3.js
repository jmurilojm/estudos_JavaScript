let carros = []


// botoes
let btAdicionar = document.getElementById('btAdicionar')
let btListar = document.getElementById('btListar')
let btFiltrar = document.getElementById('btFiltrar')

btAdicionar.addEventListener('click', adicionarCarro)
btListar.addEventListener('click', listarCarros)
btFiltrar.addEventListener('click', filtrarCarros)



// funcoes
function adicionarCarro() {
  const inModelo = document.getElementById('inModelo')
  const inPreco = document.getElementById('inPreco')

  const modelo = inModelo.value
  const preco = Number(inPreco.value).toFixed(2)


  if (modelo == '') {
    alert('Por favor, preecha os campos corretamente!')
    inModelo.focus()
  } else {
    carros.push({ modelo: modelo, preco: preco })

    inModelo.value = ''
    inPreco.value = ''
    inModelo.focus()
    listarCarros()
  }
}

function listarCarros() {
  let lista = ''

  if (carros.length == 0) {
    return document.getElementById('outLista').textContent = 'Não há carros cadastrados.'
  } else {
    for (let i = 0; i < carros.length; i++) {
      lista += carros[i].modelo + ' R$: ' + carros[i].preco + '\n'
    }
    document.getElementById('outLista').textContent = lista
  }

}

function filtrarCarros() {
  const valor = Number(document.getElementById('inPreco').value)

  let filtro = ''

  if (carros.length == 0) {
    return document.getElementById('outLista').textContent = 'Não há carros cadastrados.'
  } else {
    for (let i = 0; i < carros.length; i++) {
      if (carros[i].preco <= valor) {
        filtro += carros[i].modelo + ' R$: ' + carros[i].preco + '\n'
      }
    }
    document.getElementById('outLista').textContent = filtro
  }
}