const btGerar = document.getElementById('btGerar')
btGerar.addEventListener('click', gerarCracha)



function gerarCracha(){
  const inNome = document.getElementById('inNome')
  const outCracha = document.getElementById('outCracha')
  
  const nome = inNome.value.trim()
  const cracha = outCracha
  
  let primeiroNome = ''
  let ultimoNome = ''
  
  if(isNaN(nome) == false || nome.length < 8){
    alert('Por favor, digite o Nome e Sobrenome!')
    inNome.value = ''
    inNome.focus()
    return
  }
  
  for(let i = 0; i < nome.length; i++){
    if(nome.charAt(i) == ' '){
      primeiroNome = nome.substr(0,i)
      break
    }
  }
  
  for(let i = nome.length; i > 0; i--){
    if(nome.charAt(i) == ' '){
      ultimoNome = nome.substr(i)
      break
    }
  }
  
  cracha.textContent = primeiroNome + ' ' + ultimoNome
  inNome.value = ''
  inNome.focus()
}