/*
let numero = 31

const simbolo1 = '*'
const simbolo2 = '_'

let espaco = ''

while(numero > 0){
  if(numero > 0){
    espaco += simbolo1
    numero--
  }
  if(numero > 0){
    espaco += simbolo2
    numero--
  }
}

alert(espaco)
*/


function gerarEstrelas(){
  const numero = Number(document.getElementById('inNumero').value)
  const saida = document.getElementById('outRetorno')
  
  let numeroDeCaracteres = numero
  const simbologia1 = '*'
  const simbologia2 = '_'
  let resposta = ''
  
  while(numeroDeCaracteres > 0){
    if(numeroDeCaracteres > 0){
      resposta += simbologia1
      numeroDeCaracteres--
    }
    if(numeroDeCaracteres > 0){
      resposta += simbologia2
      numeroDeCaracteres--
    }
  }
  
  saida.textContent = resposta
}

const botao = document.getElementById('btPreencher')
botao.addEventListener('click', gerarEstrelas)