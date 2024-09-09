// declaracao de funcao
function mostraOla(){
  // pegar o inserido no input id='nome'
  const nome = document.getElementById('nome').value
  
  // exibir resposta na tag de id='resposta'
  document.getElementById('resposta').textContent = 'Olá, ' + nome + '!'
}


// busca o responsavel pelo evento: o botao
let botao = document.getElementById('mostrar')
// add um ouvinte para ele
botao.addEventListener('click', mostraOla)