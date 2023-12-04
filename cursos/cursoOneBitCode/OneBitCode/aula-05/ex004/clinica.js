// Clínica - Reservas

alert('Clínica - Reservas para consultas.')
let fila = []

// cadastro
function cadastrar(){
const nome = prompt('Nome do cliente:')
const idade = Number(prompt('Idade do cliente:'))

const dadosDoCliente = {nome, idade}
fila.push(dadosDoCliente)
}


// listar
function listar(){
let lista = ''
fila.map(function(cliente, indice){
  lista += `${indice+1}- ${cliente.nome}, ${cliente.idade} anos.\n`
})
alert(lista)
}


// editar
function editar(){
  const indice = Number(prompt('Qual o índice do cliente a ser editado?'))
  const novoNome = prompt('Digine o novo nome:')
  const novaIdade = Number(prompt('Digite a nova idade:'))
  fila[indice-1].nome = novoNome
  fila[indice-1].idade = novaIdade
}

// deletar
function deletar(){
  const indice = Number(prompt('Qual o indice do cliente que deseja retirar?'))
  alert(`Cliente ${fila[indice-1].nome} retirado da fila.`)
  fila.splice(indice-1,1)
}

// chamada para atendimento
function proximo(){
  alert(`Chamando ${fila[0].nome} para ser atendido.`)
  fila.shift()
  listar()
}

// chamada de teste das funções
cadastrar()
cadastrar()
cadastrar()
listar()
editar()
listar()
deletar()
listar()
proximo()