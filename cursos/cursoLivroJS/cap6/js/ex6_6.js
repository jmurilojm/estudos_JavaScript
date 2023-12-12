/*
Vamos, então, construir um exemplo de programa de validação de senhas? Suponha que, para ser válida, uma senha deva possuir as seguintes regras de composição: 

a) possuir entre 8 e 15 caracteres; 
b) possuir, no mínimo, 1 número; 
c) possuir, no mínimo, 1 letra minúscula; 
d) possuir, no mínimo, 2 letras maiúsculas; 
e) possuir, no mínimo, 1 simbolo. 

As figuras 6.7 e 6.8 ilustram o funcionamento desse programa.
*/

const btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', verificarSenha)


function verificarSenha(){
  const inSenha = document.getElementById('inSenha')
  const outRetorno = document.getElementById('outRetorno')
  
  const senha = inSenha.value
  const retorno = outRetorno
  
  let erros = []
  if(senha.length < 8 || senha.length > 15){
    erros.push('Deve conter entre 8 e 15 digitos')
  }
  
  if(senha.match(/[0-9]/g) == null){
    erros.push('Deve possuir pelo menos 1 número')
  }
  
  if(!senha.match(/[a-z]/g)){
    erros.push('Precisa conter ao menos uma letra minúscula')
  }
  
  if(!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length < 2){
    erros.push('A senha deve ter pelo menos 2 letras maiúsculas')
  }
  
  if(!senha.match(/\W|_/g)){
    erros.push('Tem que conter um símbolo')
  }
  
  if(erros.length == 0){
    retorno.textContent = 'Senha Validada com Sucesso!'
  } else{
    retorno.textContent = 'Erros: ' + erros
  }
}

// utilização fo metodo replace()
let frase = 'ESTUDANDO A PROGRAMACAO'
console.log(frase.replace('A', '_'))
console.log(frase.replace(/A/g, '•'))
console.log(frase.replace(/ /g, '').toLocaleLowerCase())