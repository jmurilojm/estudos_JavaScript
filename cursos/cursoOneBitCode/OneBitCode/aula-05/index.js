// Estrutura de Dados

// objeto
const pessoa = {
  nome: 'Fulano',
  idade: 36,
  endereco: {rua: 'Rua da Esquina', numero: 101},
  ola: function(){
    console.log('Ola! Sou um método de um object.')
  }
}

console.log(pessoa)
console.log(pessoa.nome)
pessoa.ola()
console.log(pessoa.endereco)
pessoa.endereco.cidade = 'Mont'
console.log(pessoa.endereco)
console.log(pessoa.endereco.rua)

// arrays
let frutas = ['Maça', 'Uva']

console.log(frutas)
frutas[0] = 'Laranja'
console.log(frutas)

// alguns metodos para arrays: pop, push, shift, unshift
frutas.push('add com push')
console.log(frutas)
frutas.unshift('add com unshift')
console.log(frutas)

// outros metodos: concat, join, slice e splice
let arr1 = [1,3,5,7,2]
let arr2 = [4,9,6]

let arr3 = arr1.concat(arr2)
console.log(arr3)//combina arrays

let arr4 = arr1.join('_')
console.log(arr4)//junta tudo para str

let arr5 = arr1.slice(1,3)
console.log(arr5)//retorna copia de parte

let arr6 = arr1
arr6.splice(0, 0, 'oi')
console.log(arr1)//eleminou e inseriu

let arr7 = arr4.split()
console.log(arr7)//faz contrário do join
let arr8 = arr4.split('_')
console.log(arr8)



// outros metodos: forEach e map
const n = [1,3,5,7,9]

n.forEach(function(el , i, array){
  //comportamento que deve fazer
  console.log(`i = ${i} - ${el}`)
})

const objetos = n.map(function(el, i, array){
  console.log(`i = ${i} - ${el}`)
  return {dobro: el * 2, metade: el / 2, elemento: el}
})
console.log(objetos)



// mais métodos: filter(filtrar) pega todos os elementos que satisfaça... e find(encontrar) pega o primeiro elemento
const a = [16, 18, 21, 27, 30, 36]

const pares = a.filter(function(e){
  return e % 2 == 0
})
console.log(a, pares)

const pessoas = [
  {id:4, nome:'Fulano'},
  {id:7, nome:'Cicrano'},
  {id:11, nome:'Beltrano'}
]

let idMax = parseFloat(prompt('Escolha idade maxima:'))
const pessoasNoLimite = pessoas.filter(function(p){
  return p.id <= idMax
})
console.log(pessoasNoLimite)


let pesquisa = prompt('Digite o nome:')
const pessoaEncontrada = pessoas.find(function(p){
  return p.nome == pesquisa
})
console.log(pessoaEncontrada)