/*
Nosso exemplo é para a criação de uma página de uma loja de esportes.O cliente pode selecionar o clube pelo qual ele torce e essa seleção deve ficar salva no navegador.Conforme o clube, as cores da página(texto e cor de fundo) e o símbolo do clube são alterados.Observe o exemplo ilustrado na Figura 8.3.Naturalmente, você pode modificar esse programa inserindo os clubes de sua cidade ou estado.

  O código HTML do Exemplo 8.1 destacado a seguir exibe a página da loja de esportes sem apresentar, inicialmente, a imagem do clube do cliente.
*/



function trocarClube(){
  /*
  Essa função pegará o clube que foi selecionado, aplicará as modificações e, por último, deixará salvo, essa escolha, no navegador.
  */
  
  const titulo = document.getElementById('divTitulo')
  const imagem = document.getElementById('imgClube')
  
  let clube
  
  if(rbBrasil.checked){
    clube = 'Brasil'
  } else if(rbPelotas.checked){
    clube = 'Pelotas'
  } else{
    clube = 'Farroupilha'
  }
  
  titulo.className = 'cores' + clube
  
  imagem.src = 'img/' + clube.toLowerCase() + '.png'
  imagem.className = 'exibe'
  imagem.alt = 'Símbolo do ' + clube
  
  // salvar no navegador
  localStorage.setItem('clube', clube)
}
const rbBrasil = document.getElementById('rbBrasil')
const rbPelotas = document.getElementById('rbPelotas')
const rbFarroupilha = document.getElementById('rbFarroupilha')

rbBrasil.addEventListener('change', trocarClube)
rbPelotas.addEventListener('change', trocarClube)
rbFarroupilha.addEventListener('change', trocarClube)



function verificar(){
  /*
  Essa função irá verificar se já houve algum salvamento no navegador, se sim será mostrada as configurações que ficaram salvas.
  */
  
  if(localStorage.getItem('clube')){
    const clube = localStorage.getItem('clube')
    
    if(clube == 'Brasil'){
      rbBrasil.checked = true
    } else if(clube == 'Pelotas'){
      rbPelotas.checked = true
    } else{
      rbFarroupilha.checked = true
    }
    
    // já que existe algo então mostrar
    trocarClube()
  }
  
}
verificar()