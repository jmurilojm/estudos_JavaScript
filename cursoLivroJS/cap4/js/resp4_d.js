/*
d) Elaborar um programa que leia um número e exiba estrelas na página, em linhas diferentes. A cada nova linha, o número de estrelas deve ser incrementado. Observação: caso você informe um valor alto, as linhas podem ultrapassar o tamanho da imagem e se alinhar à margem esquerda da página. Para evitar que isso ocorra, crie uma nova classe no arquivo estilos.css, que defina uma flutuação à direita para essa imagem. A Figura 4.18 ilustra uma execução do programa desse exercício.
*/


const botao = document.getElementById('btExibir')
botao.addEventListener('click', exibirEstrelas)



function exibirEstrelas(){
  const numero = Number(document.getElementById('inNumero').value)
  const saida = document.getElementById('outRetorno')
  
  
  let estrelas = ''
  for(let i = 1; i <= numero; i++){
    estrelas += '*'.repeat(i) + '\n'
  }
  saida.textContent = estrelas
}