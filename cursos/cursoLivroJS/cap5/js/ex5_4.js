const btAdicionar = document.getElementById('btAdicionar')
const btListar = document.getElementById('btListar')
const btResumir = document.getElementById('btResumir')

btAdicionar.addEventListener('click', adicionarCrianca)
btListar.addEventListener('click', listarCriancas)


let criancas = []
let totalDeCadastros = 0


function adicionarCrianca(){
  const inNome = document.getElementById('inNome')
  const inIdade = document.getElementById('inIdade')
  
  const nome = inNome.value
  const idade = Number(inIdade.value)
  let contem = false
  
  for(let i = 0; i < criancas.length; i++){
    if(criancas[i].nome == nome && criancas[i].idade == idade){
      contem = true
    }
  }
  
  if(contem == true){
    alert('Criança já cadastrada!')
  } else{
    totalDeCadastros++
    criancas.push({nome:nome, idade:idade})
    inNome.value = ''
    inIdade.value = ''
  }
}

function listarCriancas(){
  const outLista = document.getElementById('outLista')
  
  let lista = ''
  
  if(criancas.length == 0){
    return alert('Sem cadastros!')
  } else{
    for(let i = 0; i < criancas.length; i++){
      lista += criancas[i].nome + ' - ' + criancas[i].idade + ' anos.\n'
    }
  }
  outLista.textContent = lista
}

function resumirPorIdade(){
  const outLista = document.getElementById('outLista')
  
  // copia
  let copia = criancas.slice()
  
  // ordena
  copia.sort(function (a,b){
    return a.idade - b.idade
  })
  
  // concatenar saida
  let resumo = ''
  
  // menor idade
  let aux = copia[0].idade
  // nomes de cada idade
  let nomes = []
  
}