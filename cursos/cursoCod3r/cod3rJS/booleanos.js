let a = true
console.log(a)
a = false
console.log(a)

let b = 1
console.log(b)
console.log(!!b)
console.log(!b)

console.log('alguns verdadeiros...')
console.log(!!'texto')
/*
O que seria um valor booleano?
Formas para transformar um elemento em uma resposta verdadeiro ou falso.
*/

console.log(!!' ')
console.log(!!3)
console.log(!!(b = true))

console.log('agora, alguns falsos...')
console.log(!!'')
console.log(!!0)
console.log(!!null)
console.log(!!undefined)
console.log(!!NaN)

console.log('utilizando expressoes logicas...')
let c = ''
console.log(true || false)
console.log('' || 'nao vazio')
console.log(c || 'a variavel c esta vazia')