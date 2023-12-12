/*
let nome = 'Fulano de Tal Cicrano'

let mail = '@empresa.com.br'
let nomeFatiado = nome.split(' ')
let iniciais = ''
let ultNome = nomeFatiado[nomeFatiado.length - 1].toLowerCase()

for(let i = 0; i < (nomeFatiado.length - 1); i++){
  iniciais += nomeFatiado[i].charAt(0,1).toLowerCase()
}

console.log(iniciais + ultNome + mail)
*/

const btGerar = document.getElementById('btGerar')
btGerar.addEventListener('click', gerarEmail)


function gerarEmail(){
  const inNome = document.getElementById('inNome')
  const outEmail = document.getElementById('outEmail')
  
  const nome = inNome.value
  const email = outEmail
  
  if(nome == ' ' || nome.indexOf(' ') == -1 || nome.length < 8){
    alert('Por favor, preecha com o Nome Completo!')
    inNome.value = ''
    inNome.focus()
    return
  }
  
  let arroba = '@empresa.com.br'
  let nomeFatiado = nome.trim().split(' ')
  let iniciais = ''
  let ultNome = nomeFatiado[nomeFatiado.length - 1].toLowerCase()
  
  for (let i = 0; i < (nomeFatiado.length - 1); i++) {
    iniciais += nomeFatiado[i].charAt(0, 1).toLowerCase()
  }
  
  email.textContent = iniciais + ultNome + arroba
}