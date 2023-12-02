// Funções
function ola(parametro, parametro2 = 'Parâmetro2 não foi informado'){
  console.log('Hello, World!')
  console.log(parametro)
  console.log(parametro2)
}
ola('Mensagem para o Parâmetro')

// função anônima
const ola2 = function (parametro, parametro2 = 'Parâmetro2 não foi informado 2'){
  console.log('Hello, World! 2')
  console.log(parametro)
  console.log(parametro2)
}
ola2('Mensagem para o Parâmetro da ola2')
console.log(ola2)
console.log(ola2())


// Módulos

// NPM

// Empacotadores - Vite