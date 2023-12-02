/*
a) Elaborar um programa que leia o nome de uma fruta e um número. O programa deve repetir a exibição do nome da fruta, de acordo com o número informado. Utilize '*' para separar os nomes. A Figura 4.15 ilustra a execução do programa.
*/

function listarFruta(){
  const nomeDaFruta = document.getElementById('inFruta').value
  const numero = Number(document.getElementById('inNumero').value)
  const saida = document.getElementById('outRetorno')
  
  let retorno = ''
  for(let i = 0; i < numero; i++){
    retorno += nomeDaFruta
    if(i < (numero - 1)){
      retorno += ' * '
    }
  }
  
  saida.textContent = retorno
}

const botao = document.getElementById('btListar')
botao.addEventListener('click', listarFruta)