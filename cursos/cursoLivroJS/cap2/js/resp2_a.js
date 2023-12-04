/*
a) Uma farmácia está com uma promoção – Na compra de duas unidades de um
mesmo medicamento, o cliente recebe como desconto os centavos do
  valor total.Elaborar um programa que leia descrição e preço de um
medicamento.Informe o valor do produto na promoção.A Figura 2.11
  apresenta a tela com um exemplo de dados de entrada e saída do
    programa.
*/

function verPromocao(){
  const produto = document.getElementById('medicamento')
  const valor = document.getElementById('preco')
  const titulo = document.getElementById('titulo')
  const resultado = document.getElementById('promocao')
  
  
  //
  const valorPromocional = Number(valor.value) * 2
  
  
  //
  titulo.textContent = produto.value
  resultado.textContent = 'Leve 2 ' + produto.value + ' por apens R$: ' + Math.floor(valorPromocional.toFixed(2))
}

const botao = document.getElementById('botao')
botao.addEventListener('click', verPromocao)