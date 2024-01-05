function exibirMoedas(){
  // gerar número aleatório
  const num1_00 = Math.ceil(Math.random() * 5)
  const num0_50 = Math.ceil(Math.random() * 5)
  const num0_25 = Math.ceil(Math.random() * 5)
  const num0_10 = Math.ceil(Math.random() * 5)
  
  // onde serão inseridas as moedas
  const divMoedas = document.getElementById('divMoedas')
  
  // textos para a propriedade alt das imgs
  const alt1_00 = 'Moeda de Um Real'
  const alt0_50 = 'Moeda de Cinquenta centavos'
  const alt0_25 = 'Moeda de Vinte e Cinco centavos'
  const alt0_10 = 'Moeda de Dez centavos'
  
  // chamada de metodo
  criarMoeda(num1_00, divMoedas, 'moeda1_00.png', alt1_00, 'moeda1_00')
  criarMoeda(num0_50, divMoedas, 'moeda0_50.png', alt0_50, 'moeda0_50')
  criarMoeda(num0_25, divMoedas, 'moeda0_25.png', alt0_25, 'moeda0_25')
  criarMoeda(num0_10, divMoedas, 'moeda0_10.png', alt0_10, 'moeda0_10')
}
exibirMoedas()



function criarMoeda(num, pai, imgMoeda, textoAlt, classe){
  // inserir varias imagens na pagina
  for(let i = 0; i < num; i++){
    const novaMoeda = document.createElement('img')
    
    novaMoeda.src = 'img/' + imgMoeda
    novaMoeda.textoAlt = textoAlt
    novaMoeda.className = classe
    
    pai.appendChild(novaMoeda)
  }
  
  const br = document.createElement('br')
  pai.appendChild(br)
}