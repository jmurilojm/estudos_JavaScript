// Valores Strings
let string = 'Murilo'
console.log(string)// "Murilo"

// Acessando caracteres
console.log(string[2])// r


// Valores Booleanos - Verdadeiro(true) ou Falso(false)


// Tipos de dados primitivos - Number BigInt (maior que Number)
let numero = 36
let numeroBig = 999999999999999 * 99999999999999// ex: 99n * 99n
console.log(numero)// 36
console.log(numeroBig)// 9.99999999999989e+28


// Valores Null e Undefined
let x = null
let y
console.log(x)// null
console.log(y)// undefined


// Tipos de variáveis var, let e const
var variavelVar = 10// variável global
let variavelLet = 500// variável de escopo
const variavelConst = 3.14159// variável não alterável
console.log(variavelVar)
console.log(variavelLet)
console.log(variavelConst)


// Operadores Matemáticos
// aritimeticos +  * / %
// agrupamento ()
// atribuição = += -= *= /= %=
// incremento ++ e decremento --
// lógicos == === != !== > >= < <=


// Manipulação de Strings
const frase = 'JMurilo'
console.log(frase[1])// M
console.log(frase.length)// 7
console.log(frase + ' Lopes')// JMurilo Lopes
console.log(frase.includes('M'))// true


// Iteração com o usuário
const rubrica = prompt('Digite as iniciais do seu nome')
console.log(`Sua rubrica é ${rubrica}`)

// conversao de string
let num = '5'
console.log(num + 1)// 51
num = parseInt(num)
console.log(num + 1)// 6