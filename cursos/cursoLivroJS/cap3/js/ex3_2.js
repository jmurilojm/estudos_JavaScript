function calcularPesoIdeal(){
  const inNome = document.getElementById('inNome').value
  const inAltura = document.getElementById('inAltura').value
  const inMasculino = document.getElementById('inMasculino').checked
  const inFeminino = document.getElementById('inFeminino').checked
  const outResposta = document.getElementById('outResultado')
  
  
  if(inNome == '' || (inMasculino == false && inFeminino == false)){
    alert('Por favor, preencha os campos "Nome" e "Sexo"!')
    return
  }
  if(isNaN(inAltura) || inAltura <= 0){
    alert('Por favor, informe sua Altura!')
    return
  }
  if(inMasculino){
    outResposta.textContent = inNome + ', seu Peso Ideal: ' + (Number(inAltura)**2 * 22 / 10000).toFixed(2)
    limparCampos()
  } else {
    outResposta.textContent = inNome + ', seu Peso Ideal: ' + (Number(inAltura)**2 * 21 / 10000).toFixed(2)
    limparCampos()
  }
}

function limparCampos(){
  //location.reload()
  document.getElementById('inNome').value = ''
  document.getElementById('inAltura').value = ''
}


const btCalcular = document.getElementById('btCalcular')
const btLimpar =document.getElementById('btLimpar')

btCalcular.addEventListener('click', calcularPesoIdeal)
btLimpar.addEventListener('click', limparCampos)