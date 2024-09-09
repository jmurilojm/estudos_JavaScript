//chave e valor
const saudacao = 'opa!'; //contexto lexico 1

function exec(){
  const saudacao = 'ops!'; //contexto lexico 2
  return saudacao
}

const cliente = {
  nome: 'Fulano',
  idade: 99,
  
  endereco: {
    logradouro: 'Rua Prog',
    numero: 0,
    cidade: 'Perdida'
  }
}



console.log(saudacao)
console.log(exec())
console.log(cliente)