/*
c) Um supermercado está com uma promoção – Para aumentar suas vendas no

setor de higiene, cada etiqueta de produto deve exibir uma mensagem

anunciando 50% de desconto (para um item) na compra de três
unidades do produto. Elaborar um programa que leia descrição e preço
de um produto. Após, apresente as mensagens indicando a promoção –
conforme o exemplo ilustrado na Figura 2.13.
*/

function verPromocao(){
  const produto = document.getElementById('produto').value
  const valor = document.getElementById('preco')
  const etiqueta1 = document.getElementById('etiqueta1')
  const etiqueta2 = document.getElementById('etiqueta2')
  
  
  //
  const terceiroProduto = Number(valor.value) / 2
  const promocaoDe3 = 2 * Number(valor.value) + terceiroProduto
  
  
  //
  etiqueta1.textContent = produto + ' - Promoção: Leve 3 por R$: ' + promocaoDe3.toFixed(2)
  etiqueta2.textContent = 'O 3º produto custará apenas R$: ' + terceiroProduto.toFixed(2)
}

const botao = document.getElementById('promocao')
botao.addEventListener('click', verPromocao)