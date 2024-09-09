/*
a) Você deve desenvolver um programa de criptografia para transmitir mensagens entre amigos. O programa deve ler uma mensagem e, em seguida, exibi-la criptografada. A criptografia consiste em: a) exibir todas as letras das posições pares da mensagem; b) exibir todas as letras das posições impares da mensagem. A Figura 6.15 exibe a mensagem criptografada. O programa deve conter ainda um botão para decriptografar a mensagem, ou seja, retornar a mensagem original a partir do texto cifrado (Figura 6.16).
*/

/*
const mensagem = 'jose murilo'

let criptografado = ''
let descriptografado = ''

for(let i = 0; i < mensagem.length; i++){
  //console.log(mensagem.charAt(i))
  if(i % 2 == 0){
    criptografado += mensagem.charAt(i)
  }
}
for(let i = 0; i < mensagem.length; i++){
  //console.log(mensagem.charAt(i))
  if(i % 2 != 0){
    criptografado += mensagem.charAt(i)
  }
}

console.log(criptografado + descriptografado)
*/


const btCriptografar = document.getElementById('btCriptografar')
const btDescriptografar = document.getElementById('btDescriptografar')

btCriptografar.addEventListener('click', criptografarMensagem)
btDescriptografar.addEventListener('click', descriptografarMensagem)


let pares = ''
let impares = ''


function criptografarMensagem() {
  const inMensagem = document.getElementById('inMensagem')
  const outRetorno = document.getElementById('outRetorno')

  const mensagem = inMensagem.value
  const retorno = outRetorno


  for (let i = 0; i < mensagem.length; i++) {
    //console.log(mensagem.charAt(i))
    if (i % 2 == 0) {
      pares += mensagem.charAt(i)
    }
  }
  for (let i = 0; i < mensagem.length; i++) {
    //console.log(mensagem.charAt(i))
    if (i % 2 != 0) {
      impares += mensagem.charAt(i)
    }
  }

  let criptografado = pares + impares
  retorno.textContent = criptografado.toLowerCase()

  inMensagem.value = ''
}

function descriptografarMensagem() {
  const outRetorno = document.getElementById('outRetorno')

  const retorno = outRetorno
  let descriptografado = ''
  let mensagem = pares + impares


  for (let i = 0; i < mensagem.length; i++) {
    descriptografado += pares.charAt(i)
    descriptografado += impares.charAt(i)
  }

  retorno.textContent = descriptografado.toLowerCase()
}