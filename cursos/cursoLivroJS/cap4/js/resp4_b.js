/*
b) Digamos que o número de chinchilas de uma fazenda triplica a cada ano, após o primeiro ano. Elaborar um programa que leia o número inicial de chinchilas e anos e informe ano a ano o número médio previsto de chinchilas da fazenda. Validar a entrada para que o número inicial de chinchilas seja maior ou igual a 2 (um casal). A Figura 4.16 exibe a página com um exemplo de saída do programa.
*/

const botao = document.getElementById('btCalcular')
botao.addEventListener('click', gerarEstatistica)



function gerarEstatistica() {
  const quantidade = Number(document.getElementById('inNumero').value)
  const anos = Number(document.getElementById('inAnos').value)
  const saida = document.getElementById('outRetorno')


  // validacoes e retorno
  if (quantidade == '' || isNaN(quantidade) || quantidade < 2 || anos == '' || isNaN(anos) || anos < 1) {
    alert('Por favor, preencha a quantidade com um valor mínimo de um casal.')
    limpar()
  }
  else {
    let producao = quantidade
    let lista = ''
    for (let i = 1; i <= anos; i++) {
      lista += i + 'º ano: ' + producao + ' Chinchilas\n'
      producao *= 3
    }
    saida.textContent = lista
  }
}


function limpar() {
  document.getElementById('inNumero').value = ''
  document.getElementById('inAnos').value = ''
  document.getElementById('outRetorno').textContent = ''
}