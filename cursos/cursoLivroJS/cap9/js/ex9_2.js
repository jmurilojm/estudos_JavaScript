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



function conferirSoma(){
  const inSoma = document.getElementById('inSoma')
  
  const soma = Number(inSoma.value)
  
  
  if(soma == ''){
    alert('Por favor, informa o valor!')
    inSoma.focus()
    return
  }
  
  const divMoedas = document.getElementById('divMoedas')
  const moedas = document.getElementsByTagName('img')
  
  
  let totalMoedas = 0
  for(let i = 0; i < moedas.length; i++){
    if(moedas[i].className == 'moeda1_00'){
      totalMoedas += 1.00
    } else if(moedas[i].className == 'moeda0_50'){
      totalMoedas += 0.50
    } else if(moedas[i].className == 'moeda0_25'){
      totalMoedas += 0.25
    } else if (moedas[i].className == 'moeda0_10') {
      totalMoedas += 0.10
    }
  }
  
  const div = document.createElement('div')
  const h3 = document.createElement('h3')
  
  if(soma == totalMoedas.toFixed(2)){
    div.className = 'alert alert-success'
    var mensagem = 'Parabens!'
  } else{
    div.className = 'alert alert-danger'
    var mensagem = 'Você errou! Valor R$: ' + totalMoedas.toFixed(2)
  }
  
  const texto = document.createTextNode(mensagem)
  h3.appendChild(texto)
  
  div.appendChild(h3)
  divMoedas.appendChild(div)
  
  btConferir.disabled = 'true'
}
const btConferir = document.getElementById('btConferir')
btConferir.addEventListener('click', conferirSoma)



const btExibir = document.getElementById('btExibir')
btExibir.addEventListener('click', function(){
  location.reload()
})