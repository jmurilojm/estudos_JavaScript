/*
Vamos aplicar essa ideia em um novo exemplo.

Você já foi a algum hotel, nas férias, e fizeram a brincadeira "Qual é o peso da melancia?"?.As respostas dos hóspedes são, geralmente, anotadas em uma folha, sendo que dois hóspedes não podem apostar um mesmo número.Em um determinado horário, a melancia é então pesada.O ganhador é a pessoa que acertou o peso ou quem chegou mais perto do número correto.Vamos programar esse jogo usando o localStorage ? Assim, a pessoa que controla a brincadeira pode utilizar um tablet ou um celular para cadastrar as apostas a partir do navegador do dispositivo, sem perder os dados ao fechar acidentalmente o navegador.
*/



function incluirAposta(){
  const inNome = document.getElementById('inNome')
  const inPeso = document.getElementById('inPeso')
  
  const nome = inNome.value
  const peso = Number(inPeso.value)
  
  // validações 
  if(verApostaExiste(peso)){
    alert('Algem já apostou com esse peso!')
    inPeso.focus()
    return
  }
  
  // se nao salvo, salve
  if(localStorage.getItem('melanciaNome')){
    let melanciaNome = localStorage.getItem('melanciaNome') + ';' + nome
    
    let melanciaPeso = localStorage.getItem('melanciaPeso') + ';' + peso
    
    localStorage.setItem('melanciaNome', melanciaNome)
    localStorage.setItem('melanciaPeso', melanciaPeso)
  } else{
    localStorage.setItem('melanciaNome', nome)
    localStorage.setItem('melanciaPeso', peso)
  }
  
  mostrarApostas()
  
  inNome.value = ''
  inPeso.value = ''
  inNome.focus()
}
const btApostar = document.getElementById('btApostar')
btApostar.addEventListener('click', incluirAposta)



function verApostaExiste(pesoDaAposta){
  let existe = false
  
  if(localStorage.getItem('melanciaPeso')){
    let pesos = localStorage.getItem('melanciaPeso').split(';')
    
    if(pesos.indexOf(pesoDaAposta.toString() >= 0)){
      existe = true
    }
  }
  return existe
}



function mostrarApostas(){
  const outApostas = document.getElementById('outApostas')
  
  const apostas = outApostas
  
  if(!localStorage.getItem('melanciaNome')){
    apostas.textContent = ''
    return
  }
  
  let nomes = localStorage.getItem('melanciaNome').split(';')
  let pesos = localStorage.getItem('melanciaPeso').split(';')
  
  let linhas = ''
  for(let i = 0; i < nomes.length; i++){
    linhas += nomes[i] + ' - ' + pesos[i] + 'gr \n'
  }
  
  apostas.textContent = linhas
}
mostrarApostas()



function verificarVencedor(){
  if(!localStorage.getItem('melanciaNome')){
    alert('Não há apostas cadastradas')
    return
  }
  
  let pesoCorreto = Number(prompt('Qual o peso correto da melancia?'))
  
  if(pesoCorreto == 0 || isNaN(pesoCorreto)){
    return
  }
  
  let nomes = localStorage.getItem('melanciaNome').split(';')
  let pesos = localStorage.getItem('melanciaPeso').split(';')
  
  let vencedorNome = nomes[0]
  let vencedorPeso = pesos[0]
  
  for(let i = 0; i < nomes.length; i++){
    difVencedor = Math.abs(vencedorPeso - pesoCorreto)
    difAposta = Math.abs(Number(pesos[i]) - pesoCorreto)
  
    if(difAposta < difVencedor){
      vencedorNome = nomes[i]
      vencedorPeso = Number(pesos[i])
    }
  }
  
  let msm = 'Resultado - Peso correto: ' + pesoCorreto + 'gr'
  msm += '\n---------------------------'
  msm += '\nVencedor: ' + vencedorNome
  msm += '\nAposta: ' + vencedorPeso + 'gr'
  alert(msm)
}
const btVencedor = document.getElementById('btVencedor')
btVencedor.addEventListener('click', verificarVencedor)



function limparApostas(){
  if(confirm('Confirma a limpeza?')){
    localStorage.removeItem('melanciaNome')
    localStorage.removeItem('melanciaPeso')
    
    mostrarApostas()
  }
}
const btLimpar = document.getElementById('btLimpar')
btLimpar.addEventListener('click', limparApostas)