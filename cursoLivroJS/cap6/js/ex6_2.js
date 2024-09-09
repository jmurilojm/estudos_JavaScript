/*
Vamos construir outro exemplo que explora o metodo charAt(). O programa "Qual é a fruta?" deve ler uma palavra (sugere-se uma fruta) e exibir, após o clique no botão Montar Dica, a letra inicial da fruta e as demais ocorrências dessa letra na palavra. As outras letras não devem ser exibidas, apenas um sublinhado (underline) "" para representar cada letra. O conteúdo do campo de entrada deve ser substituído por asteriscos, conforme ilustra a Figura 63. Esse jogo completo será desenvolvido no Capítulo 10. Por enquanto, vamos apenas entender como montar a tela inicial do jogo.
*/

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