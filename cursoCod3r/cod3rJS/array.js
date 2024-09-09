/*
Algumas metodos que podem ser utilizados com os arrays.
*/

let num = [4.6, 5, 7.2, 8]
console.log('itens de num: ', num)
console.log('mostrando elem: ', num[0], num[3])
console.log('num[4] nao existe(unde): ', num[4])
num[8] = 9,1
console.log('add valor na posicao [8]: ', num)

num.push({id: 4}, true, null, 'texto')
console.log('usando num.push(): ', num)
console.log('tamanho de num: ', num.length)

console.log('usando pop: ', num.pop())
delete num[0]
console.log('usado delete num[0]: ', num)
console.log('tipo de num: ', typeof num)