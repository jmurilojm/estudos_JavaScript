/*
a) Você deve desenvolver um programa de criptografia para transmitir mensagens entre amigos. O programa deve ler uma mensagem e, em seguida, exibi-la criptografada. A criptografia consiste em: a) exibir todas as letras das posições pares da mensagem; b) exibir todas as letras das posições impares da mensagem. A Figura 6.15 exibe a mensagem criptografada. O programa deve conter ainda um botão para decriptografar a mensagem, ou seja, retornar a mensagem original a partir do texto cifrado (Figura 6.16).
*/

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


