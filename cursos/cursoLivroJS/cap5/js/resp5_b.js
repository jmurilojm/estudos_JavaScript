/*
b) Elaborar um programa que adicione números a um vetor. O programa deve impedir a inclusão de números repetidos. Exibir a lista de números a cada inclusão. Ao clicar no botão Verificar Ordem, o programa deve analisar o conteúdo do vetor e informar se os números estão ou não em ordem crescente. A Figura 5.13 demonstra um exemplo de execução do programa.
*/


let numeros = []

const btAdicionar = document.getElementById('btAdicionar')
const btVerificar = document.getElementById('btVerificar')

btAdicionar.addEventListener('click', adicionarNumero)
btVerificar.addEventListener('click', verificarOrdem)


function adicionarNumero(){
  const inNumero = document.getElementById('inNumero')
  const outRetorno = document.getElementById('outRetorno')
  
  const numero = Number(inNumero.value)
  const retorno = outRetorno
  
  if(numeros.find(n => n === numero)){
    alert('Este número já foi adicionado!')
    inNumero.value = ''
    inNumero.focus()
    return
  } else if(numero == '' || numero == ' ' || isNaN(numero)){
    alert('Por favor, digite um número!')
    inNumero.focus()
    return
  }
  
  numeros.push(numero)
  inNumero.value = ''
  inNumero.focus()
  outRetorno.textContent = 'Números: ' + numeros
}

function verificarOrdem(){
  const outRetorno = document.getElementById('outRetorno')
  const outInfo = document.getElementById('outInfo')
  
  const retorno = outRetorno
  const info = outInfo
  
  if(numeros.length < 2){
    /*
    Só faz a verificação se tiver pelo menos 02 elementos no array
    */
    retorno.textContent = 'Números: ' + numeros
  } else{
    retorno.textContent = 'Números: ' + numeros
    
    let ordem = true
    let msmCrescente = 'Estão em Ordem Crescente.'
    let msmDecrescente = 'Os Números estão em Ordem Decrescente ou Aleatória.'
    
    /*
    Este laço irá iterar o array comparando os elementos para saber se eles encontram-se em ordem crescente ou decrescente 
    */
    for(let i = 0; i < (numeros.length - 1); i++){
      /*
      O if irá verificar se o elemento atual é menor que o próximo. Caso seja a resposta seja false, o programa retorna a resposta que a sequencia é decrescente e para o laço.
      Se nao, sera retornado a resposta de que é um array crescente
      */
      if((numeros[i] < numeros[i + 1]) == false){
        ordem = false
        break
      }
    }
    
    /*
    Depois de verificada a ordem dos números, é retornada uma mensagem de informando o sentido desta.
    */
    if(ordem == true){
      info.textContent = msmCrescente
      info.style.color = 'green'
    } else{
      info.textContent = msmDecrescente
    }
  }
}