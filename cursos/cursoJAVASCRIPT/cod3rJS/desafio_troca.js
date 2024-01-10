/*
O desafio e fazer a troca dos valores constantes nas variaveis "a" e "b".
*/

let a = 7
let b = 94

// depois da troca a = 94 e b = 7
console.log(a)
console.log(b)

let temporaria = a
a = b
b = temporaria

// ou [a, b] = [b, a]
console.log(a)
console.log(b)