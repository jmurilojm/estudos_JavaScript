/*
Vamos construir um exemplo para demonstrar a sintaxe da criação de uma função anônima. 

Nosso programa deve 
-ler o preço de um produto qualquer e 
-exibir as formas de pagamento disponíveis na loja, que variam de 1x até 10x. 

Na sequência, crie o código JavaScript para calcular e exibir o valor das parcelas com o uso de uma função anônima.

Dessa forma, realizamos uma breve revisão das rotinas de repetição abordadas no Capítulo 4. A Figura 7.2 ilustra o funcionamento do programa.
*/

const btCalcular = document.getElementById('btCalcular')
btCalcular.addEventListener('click', function(){
  const inPreco = document.getElementById('inPreco')
  const outFormas = document.getElementById('outFormas')
  
  const preco = Number(inPreco.value)
  const retorno = outFormas
  
  if(preco == '' || preco < 1){
    return alert('Por favor, preencha o valor!')
  }
  
  let parcelas = ''
  
  for (let i = 1; i <= 10; i++) {
    parcelas += i + 'x de R$: ' + (preco / i).toFixed(2) + '\n'
  }
  
  retorno.textContent = 'Parcelas para Pagamento: \n' + parcelas
})
