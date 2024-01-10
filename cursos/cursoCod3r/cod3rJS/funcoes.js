//funcao sem retorno
function imprimirSoma(a, b){
  console.log(a + b)
}
imprimirSoma(4,5)


//funcao com retorno
function somar(a, b = 0){
  return a + b
}
console.log(somar(7, 8))


//funcao anonima. usa-se const
const multiplicar = function(a, b){
  console.log(a * b)
}
multiplicar(4,7)


//arrow function
const multi = (a, b) => { console.log(a * b) }
multi(5,5)
const m = (a, b) => a * b
console.log(m(8,9))