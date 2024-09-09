// const com funcao arrow
const resultado = nota => nota >= 7 ? 'Aprovado!' : 'Reprovado';

console.log(resultado(7.1))
console.log(resultado(6.9))

// sem o uso de funcao arrow
let nota = 8.3
const status = nota >= 7 ? 'Aprovado' : 'Reprovado';
console.log(status)