// pegando dados de um objeto
const pessoa = {
  nome: 'Fulano',
  idade: 99,
  peso: 100,
  
  endereco: {
    logradouro: 'Rua Fechada',
    numero: 123
  }
}


// ex 01
const {nome, idade} = pessoa;
console.log(nome, idade);

// ex 02
const {nome: n, idade: i} = pessoa;
console.log(n, i);

// ex 03
const {sobrenome, outro = true} = pessoa;
console.log(sobrenome, outro)

// ex 04
const {endereco} = pessoa;
console.log(endereco)

// ex 05
const {endereco: {logradouro, numero, bairro}} = pessoa;
console.log(logradouro, numero, bairro);



// pegando dados um Array
const [a] = [10]
console.log(a)

const [n1, ,n3, ,n4,n5,n6 = 0] = [10,7,9,8]
console.log(n1,n3,n5,n6)

const [,[,nota]] = [[,1,2], [4,5,6]]
console.log(nota)



// uso em uma funcao
function rand({min = 0, max = 1000}){
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

const obj = {min: 30, max: 60}
console.log(rand(obj))
console.log(rand({min: 300}))
console.log(rand({}))



// uso de um Array como parametro de funcao
function ran([min = 0, max = 100]){
  if(min > max) [min, max] = [max, min]
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

console.log(ran([50, 30]))
console.log(ran([90]))
console.log(ran([, 10]))
console.log(ran([]))