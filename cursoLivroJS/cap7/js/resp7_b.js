/*
b) Elaborar um programa que leia o nome completo de um aluno. O programa deve validar o preenchimento de um nome completo e exibir a senha inicial do aluno, a qual será o sobrenome seguido pelo número de vogais do nome completo dele. O programa deve conter as funções:

• validarNome() - que receba um nome como parâmetro e retorne true (nome completo) ou false (nome incompleto).

• obterSobrenome() - que receba um nome como parâmetro e retorne o último nome do aluno em letras minúsculas.

• contarVogais() - que receba um nome e retorne o número de vogais deste, com dois dígitos.

A Figura 7.6 destaca um exemplo de execução desse exercício.
*/


function gerarSenhaInicial() {
  const inNome = document.getElementById('inNome')
  const outSenha = document.getElementById('outSenha')

  const nome = inNome.value
  const senha = outSenha

  const validade = validarNome(nome)
  if (validade == true) {
    const sobrenome = obterSobrenome(nome)
    const vogais = contarVogais(nome)

    senha.textContent = sobrenome + vogais
    inNome.value = ''
    inNome.focus()
    return
  } else {
    alert('Por favor, informe seu Nome Completo!')
    return
  }
}
const btGerar = document.getElementById('btGerar')
btGerar.addEventListener('click', gerarSenhaInicial)



function validarNome(a) {
  const b = a.trim().split(' ')
  
  if (b.length > 2) {
    return true
  }
  return false
}

function obterSobrenome(a) {
  const b = a.toLowerCase().trim().split(' ')
  b.reverse()
  return b[0]
}



function contarVogais(a) {
  a.trim().toLowerCase()
  let total = 0
  const vogais = ['a', 'á', 'ã', 'â', 'e', 'é', 'ê', 'i', 'í', 'o', 'ó', 'õ', 'ô', 'u', 'ú']
  for (let i = 0; i < a.length; i++) {
    if (vogais.indexOf(a.charAt(i)) != -1) {
      total++
    }
  }
  if (total < 10) {
    return '0' + total
  } else {
    return total
  }
}