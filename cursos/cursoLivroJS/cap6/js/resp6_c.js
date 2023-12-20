/*
c) Uma palavra ou frase é um palindromo quando pode ser lida nos dois sentidos, como RADAR, MUSSUM, ABBA. Elaborar um programa que leia uma frase e informe se ela é ou não um palindromo (converter a frase para caixa alta). A Figura 6.18 apresenta uma frase que é um palindromo.
*/

/*
let palavra = "A dama admirou o rim da amada".toUpperCase()
let normal = ''
let invertida = ''

for(let i = 0; i < palavra.length; i++){
  if(palavra.charAt(i) != ' '){
    normal += palavra.charAt(i)
  }
}

for(let i = normal.length; i >= 0; i--){
  invertida += normal.charAt(i)
}

if(normal == invertida){
  console.log('É Palíndromo.')
} else{
  console.log('Não é um Palíndromo.')
}
*/


const btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', verificarFrase)


function verificarFrase(){
  const inFrase = document.getElementById('inFrase')
  const outResposta = document.getElementById('outResposta')
  
  const frase = inFrase.value.toUpperCase().trim
  const resposta = outResposta
  
  
  let normal = ''
  let invertida = ''
  
  
  if(frase == ''){
    alert('Por favor, digite algo!')
    inFrase.focus()
    return
  }
  
  for (let i = 0; i < frase.length; i++) {
    if (frase.charAt(i) != ' ') {
      normal += frase.charAt(i)
    }
  }
  
  for (let i = normal.length; i >= 0; i--) {
    invertida += normal.charAt(i)
  }
  
  if (normal == invertida) {
    resposta.textContent = 'É um Palíndromo.'
  } else {
    resposta.textContent = 'Não é um Palíndromo.'
  }
  
  inFrase.value = ''
  inFrase.focus()
}