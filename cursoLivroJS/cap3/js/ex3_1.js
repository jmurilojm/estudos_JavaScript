function calcularMedia(){
  // referencias
  const inNome = document.getElementById('inNome').value
  const inNota1 = document.getElementById('inPrimeiraNota').value
  const inNota2 = document.getElementById('inSegundaNota').value
  const outMedia = document.getElementById('outMedia')
  const outSituacao = document.getElementById('outSituacao')
  
  // pegar o conteudo
  const media = (Number(inNota1) + Number(inNota2)) / 2
  
  // tratar os dados - condicoes - exibicao
  if(media >= 7){
    outSituacao.textContent = 'Parabéns ' + inNome + '! Você foi Aprovado(a)!'
    outSituacao.style.color = 'blue'
  } else if(media >= 4){
    outSituacao.textContent = 'Você fará a avaliação final.'
    outSituacao.style.color = 'orange'
  } else {
    outSituacao.textContent = 'Ops! Você foi Reprovado(a).'
    outSituacao.style.color = 'red'
  }
  
  // exibir dados tratados
  outMedia.textContent = 'Média das Notas: ' + media
}


const resultado = document.getElementById('btResultado')
resultado.addEventListener('click', calcularMedia)