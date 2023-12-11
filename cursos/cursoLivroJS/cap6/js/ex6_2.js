let btMontar = document.getElementById('btMontar')
btMontar.addEventListener('click', montarDica)


function montarDica(){
  const inFruta = document.getElementById('inFruta')
  const outDica = document.getElementById('outDica')
  
  let fruta = inFruta.value.toUpperCase()
  let dica = outDica
  let estrelas = ''
  
  let primeiraLetra = fruta.charAt(0)
  
  let enigma = ''
  for(let i = 0; i < fruta.length; i++){
    if(fruta.charAt(i) == primeiraLetra){
      enigma += fruta.charAt(i)
    } else{
      enigma += '_'
    }
    estrelas += '*'
  }
  dica.textContent = enigma
  inFruta.value = estrelas
}