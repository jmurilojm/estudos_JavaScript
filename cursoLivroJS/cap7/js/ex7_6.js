let itens = []

function trocarItem() {
  // Tab to edit
  if (rbPizza.checked) {
    inPizza.className = 'exibe'
    inBebida.className = 'oculta'
  } else {
    inPizza.className = 'oculta'
    inBebida.className = 'exibe'
  }
}
const rbPizza = document.getElementById('rbPizza')
const rbBebida = document.getElementById('rbBebida')

rbPizza.addEventListener('change', trocarItem)
rbBebida.addEventListener('change', trocarItem)



function mostrarNumSabores(){
  // Tab to edit
  if(rbPizza.checked){
    const pizza = inPizza.value
    const num = (pizza == 'media') ? 2 : (pizza == 'grande') ? 3 : 4
    
    inDetalhes.placeholder = 'Máximo de ' + num + ' sabores'
  }
}
const inDetalhes = document.getElementById('inDetalhes')
inDetalhes.addEventListener('focus', mostrarNumSabores)

inDetalhes.addEventListener('blur', function() {
  inDetalhes.placeholder = ''
})
inDetalhes.addEventListener('keypress', function(tecla){
  if(tecla.keyCode == 13){
    // 13 é o enter
    adicionarItem()
  }
})


function adicionarItem(){
  // Tab to edit
  const inPizza = document.getElementById('inPizza')
  const inBebida = document.getElementById('inBebida')
  const outPedido = document.getElementById('outPedido')
  
  let produto;
  let indice;
  
  if(rbPizza.checked){
    indice = inPizza.selectedIndex
    produto = inPizza.options[indice].text
  } else{
    indice = inBebida.selectedIndex
    produto = inBebida.options[indice].text
  }
  
  const detalhes = inDetalhes.value
  itens.push(produto + '(' + detalhes + ')')
  outPedido.textContent = itens.join('\n')
  limparCampos()
}
const btAdicionar = document.getElementById('btAdicionar')
btAdicionar.addEventListener('click', adicionarItem)


function limparCampos() {
  // Tab to edit
  rbPizza.checked = true
  inBebida.className = 'oculta'
  inPizza.className = 'exibe'
  inPizza.selectedIndex = 0
  inBebida.selectedIndex = 0
  inDetalhes.value = ''
  rbPizza.focus()
}