/*
b) Elaborar um programa para cadastrar produtos na lista de compras da semana. Salvar e exibir a listagem dos produtos em ordem alfabética.
A Figura 8.8 exibe a ilustração da página com alguns dados inseridos.
*/



let listaDeCompras = []


if(localStorage.getItem('lista')){
  document.getElementById('outRetorno').textContent = localStorage.getItem('lista')
}

const btAdicionar = document.getElementById('btAdicionar')
btAdicionar.addEventListener('click', function(){
  
  const inProduto = document.getElementById('inProduto')
  const outRetorno = document.getElementById('outRetorno')
  
  
  const produto = inProduto.value
  const retorno = outRetorno
  
  
  if(produto == ''){
    alert('Por favor, insira um produto!')
    return
  }
  
  
  listaDeCompras.push(produto.trim())
  inProduto.value = ''
  inProduto.focus()
  localStorage.setItem('lista', listaDeCompras)
  
  //retorno.textContent = localStorage.getItem('lista')
  mostrarProdutos()
})



const btLimpar = document.getElementById('btLimpar')
btLimpar.addEventListener('click', function(){
  if(localStorage.getItem('lista')){
    localStorage.removeItem('lista')
    document.getElementById('outRetorno').textContent = ''
  } else{
    alert('Não existe lista para apagar.')
  }
})



function mostrarProdutos(){
  const outRetorno = document.getElementById('outRetorno')
  
  let retorno = outRetorno
  
  let produtos = ''
  for(let i = 0; i < listaDeCompras.length; i++){
    produtos += listaDeCompras[i] + '\n'
  }
  
  return retorno.textContent = produtos
}