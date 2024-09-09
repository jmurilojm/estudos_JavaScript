//botoes
const btAdicionar = document.getElementById('btAdicionar')
const btUrgencia = document.getElementById('btUrgencia')
const btAtender = document.getElementById('btAtender')

btAdicionar.addEventListener('click', adicionarPaciente)
btUrgencia.addEventListener('click', adicionarPacienteUrgente)
btAtender.addEventListener('click', atenderPaciente)


// lista de pacientes
let pacientes = []


// funcoes
function adicionarPaciente(){
  const nomePaciente = document.getElementById('inNome')
  
  validar(nomePaciente.value)
  
  pacientes.push(nomePaciente.value)
  
  listar()
  nomePaciente.value = ''
  nomePaciente.focus()
}


function adicionarPacienteUrgente(){
  const nomePaciente = document.getElementById('inNome')
  
  validar(nomePaciente.value)
  
  pacientes.unshift(nomePaciente.value)
  
  listar()
  nomePaciente.value = ''
  nomePaciente.focus()
}


function atenderPaciente(){
  const atendendo = document.getElementById('inAtendimento')
  
  if (pacientes.length == 0) {
    alert('Lista vazia!')
    return
  }
  
  let nomeChamado = pacientes.shift()
  atendendo.textContent = nomeChamado
  
  listar()
}


function listar(){
  const saida = document.getElementById('outLista')
  
  let lista = ''
  for (let p = 0; p < pacientes.length; p++) {
    lista += (p + 1) + '. ' + pacientes[p] + '\n'
  }
  saida.textContent = lista
}

function validar(nome){
  if(nome == '' || nome == ' '){
    alert('Digite um Nome!')
    nome.focus()
    return
  }
}