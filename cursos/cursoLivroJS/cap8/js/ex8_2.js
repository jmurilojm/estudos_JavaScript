/*
Nosso exemplo é para a criação de uma página de uma loja de esportes.O cliente pode selecionar o clube pelo qual ele torce e essa seleção deve ficar salva no navegador.Conforme o clube, as cores da página(texto e cor de fundo) e o símbolo do clube são alterados.Observe o exemplo ilustrado na Figura 8.3.Naturalmente, você pode modificar esse programa inserindo os clubes de sua cidade ou estado.

  O código HTML do Exemplo 8.1 destacado a seguir exibe a página da loja de esportes sem apresentar, inicialmente, a imagem do clube do cliente.
*/



function trocarClube() {
  /*
  Essa função pegará o clube que foi selecionado, aplicará as modificações e, por último, deixará salvo, essa escolha, no navegador.
  */

  const titulo = document.getElementById('divTitulo')
  const imagem = document.getElementById('imgClube')

  const clubes = ['Brasil', 'Pelotas', 'Farroupilha']
  
  let indice
  const totalRB = radioButtons.length
  for(let i = 0; i < totalRB; i++){
    //pegar o indice do rb com checked
    if(radioButtons[i].checked){
      indice = i
      break
    }
  }
  
  const indiceMax = totalRB - 1// 1 = rbNenhum
  if(indice <= indiceMax){
    // atribuir os atributos no rb checked
    titulo.className = 'cores' + clubes[indice]
    
    imagem.src = 'img/' + clubes[indice].toLowerCase() + '.png'
    imagem.className = 'exibe'
    imagem.alt = 'Símbolo do ' + clubes[indice]
    
    // salvar no navegador
    localStorage.setItem('clube', clubes[indice])
  } else{
    titulo.className = 'row'
    
    imagem.className = 'oculta'
    imagem.alt = ''
    
    // limpar do navegador 
    localStorage.removeItem('clube')
  }

}
const radioButtons = document.getElementsByTagName('input')

for (let i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener('change', trocarClube)
}



function verificar() {
  /*
  Essa função irá verificar se já houve algum salvamento no navegador, se sim será mostrada as configurações que ficaram salvas.
  */

  if (localStorage.getItem('clube')) {
    const clube = localStorage.getItem('clube')

    if (clube == 'Brasil') {
      rbBrasil.checked = true
    } else if (clube == 'Pelotas') {
      rbPelotas.checked = true
    } else if (clube == 'Farroupilha') {
      rbFarroupilha.checked = true
    } else{
      rbNenhum.checked = true
    }

    // já que existe algo então mostrar
    trocarClube()
  }

}
verificar()