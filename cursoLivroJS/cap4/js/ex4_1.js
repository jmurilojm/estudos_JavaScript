/*
Nosso primeiro programa sobre repetições deve ler um número e apresentar a tabuada desse número um exemplo geralmente utilizado para demonstrar o funcionamento do comando for. O código HTML deve ficar conforme o Exemplo 4.1, para gerar uma página de acordo com a ilustração da execução do programa da Figura 4.4.
*/


const botao = document.getElementById('btGerar')
botao.addEventListener('click', gerarTabuada)


function gerarTabuada(){
  const numero = Number(document.getElementById('inNumero').value)
  const saida = document.getElementById('outTabuada')
  
  
  let tabuada = ''
  for(let i = 1; i <= 10; i++){
    tabuada += numero + ' x ' + i + ' = ' + (i * numero) + '\n'
  }
  saida.textContent = tabuada
}