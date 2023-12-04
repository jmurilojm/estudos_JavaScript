/*
O nosso segundo exemplo ilustra a montagem de uma estrutura de repetição decrescente, com o valor inicial informado pelo usuário. O código HTML é semelhante ao Exemplo 4.1, contudo, nesse exemplo vamos exibir os números em uma única linha. Portanto, podemos utilizar novamente a tag h3 para destacar a lista de números. A Figura 4.5 apresenta uma página com a demonstração da resposta do programa.
*/

function sequenciarNumeros(){
  let inicio = Number(document.getElementById('inNumero').value)
  const saida = document.getElementById('outRetorno')
  
  if(inicio == '' || isNaN(inicio)){
    alert('Por favor, informe um número válido')
    document.getElementById('inNumero').focus()
  } else{
    if(inicio < 0){
      inicio = -inicio
    }
    let sequencia = ''
    for (var i = inicio; i > 1; i--) {
      sequencia += i + ', '
    }
    sequencia += i + '.'
    
    saida.textContent = 'Sequência: ' + sequencia
  }
}

const botao = document.getElementById('btListar')
botao.addEventListener('click', sequenciarNumeros)