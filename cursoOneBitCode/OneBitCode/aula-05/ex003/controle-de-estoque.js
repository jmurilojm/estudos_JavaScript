// Controle de Estoque

alert('Controle de Estoque')

let estoque = []

// cadastro
function cadastrar() {
  let nomeDoItem = prompt('Nome do item')
  let quantidadeDoItem = prompt('Quantidade')
  estoque.push({ nomeDoItem, quantidadeDoItem })
}


function listar() {
  const listaDeItens = estoque.map(function(item, indice) {
    return `${indice + 1}. ${item.nomeDoItem}: ${item.quantidadeDoItem}`
  }).join('\n')
  
  alert(listaDeItens)
}


function meuEstoque(){
  let itens = ''
  for (let x = 0; x < estoque.length; x++) {
    itens += `
    ${x+1}. ${estoque[x].nomeDoItem}: ${estoque[x].quantidadeDoItem}`
  }
  return itens
}


function alterar() {
  let itens = meuEstoque()
  let indice = prompt(`
  Lista de itens:\n${itens}\n\n Qual o indice que deseja alterar?
  `) - 1
  let item = estoque[indice].nomeDoItem
  let quantidade = estoque[indice].quantidadeDoItem
  let novaQuantidade = prompt(`
  Alterando quatidade do seguinte item:
  
  ${item}: ${quantidade}
  
  Digite a nova quantidade:`)
  editarQuantidade(indice, novaQuantidade)
}


function editarQuantidade(indice, novaQuantidade) {
  estoque[indice].quantidadeDoItem = novaQuantidade
  
  alert(`
  Quantidade alterada!
  
  ${estoque[indice].nomeDoItem}: ${estoque[indice].quantidadeDoItem}`)
}


function excluir(){
  let itens = meuEstoque()
  let indice = prompt(`
    Lista de itens:\n${itens}\n\nQual deseja deletar?
    `) - 1
    
  estoque.splice(indice,1)
}

function menu(){
  const opcao = prompt`
  1 - Cadastrar
  2 - Listar
  3 - Editar
  4 - Deletar
  
  0 - Sair`
  return Number(opcao)
}

while(true){
  const escolha = menu()
  switch(escolha){
    case 1:
      cadastrar()
      break
    case 2:
      listar()
      break
    case 3:
      alterar()
      break
    case 4:
      excluir()
      break
    case 0:
      alert('Saindo...')
      break
    default:
      alert('Escolha uma das opções!')
  }
  if(escolha == 0){
    break
  }
}