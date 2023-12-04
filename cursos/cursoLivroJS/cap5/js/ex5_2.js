// botoes
let botao = document.getElementById('btApostar')
let botao2 = document.getElementById('jogarNovamente')

botao.addEventListener('click', apostar)
botao2.addEventListener('click', jogarOutraVez)


// geracao de numero e armazenamento
let numeroMax = 10
let numeroAleatorio = Math.floor(Math.random() * numeroMax) + 1

let numeroDeErros = 0
let numeroDeChances = 6
let numerosApostados = []


// funcoes
function apostar() {
  // captura de elementos
  const numero = document.getElementById('inNumero')
  const erros = document.getElementById('outErros')
  const chances = document.getElementById('outChances')
  let dica = document.getElementById('outDica')
  
  
  // conversao
  const aposta = Number(numero.value)
  
  
  // mensagens
  const msmChancesZeradas = 'Duas CHANCES estão zeradas.'
  const msmInvalido = 'Por favor, informe um número válido e no intervalo de 1 a ' + numeroMax + ' !'
  const msmExitente = 'Número já apostado.'
  const msmMenor = 'Dica: É um número MENOR'
  const msmMaior = 'Dica: É um número MAIOR'
  const msmParabens = 'Parabéns! Você acertou.'
  

  // tratamento de dados e retorno
  if (numeroDeChances == 0) {
    dica.textContent = msmChancesZeradas
    dica.style.color = 'red'
    botao.disabled = true
    botao2.className = 'exibe'
  } else if (aposta < 1 || aposta == '' || isNaN(aposta) || aposta == ' ' || aposta > numeroMax) {
    dica.textContent = msmInvalido
    dica.style.color = 'red'
    limpar()
  } else if(numerosApostados.indexOf(aposta) != -1){
    console.log(numerosApostados.indexOf(aposta))
    dica.textContent = msmExitente
    dica.style.color = 'orange'
  } else{
    if(aposta == numeroAleatorio){
      dica.textContent = msmParabens
      dica.style.color = 'green'
      botao.disabled = true
      botao2.className = 'exibe'
    } else{
      numeroDeErros++
      numeroDeChances--
      
      chances.textContent = numeroDeChances
      numerosApostados.push(aposta)
      erros.textContent = numeroDeErros + '  (' + numerosApostados + ')'
      dica.textContent = aposta > numeroAleatorio ? msmMenor : msmMaior
      dica.style.color = 'orange'
      limpar()
    }
  }
  
}

function jogarOutraVez(){
  document.location.reload()
}

function limpar(){
  document.getElementById('inNumero').value = ''
  document.getElementById('inNumero').focus()
}