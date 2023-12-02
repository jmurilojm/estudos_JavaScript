/*
Nesse desafio do Cod3r Cursos, ele propoe que seja realizado o calculo da area de uma circunferencia, utilizando uma vatiavel "const" para armazenar o valor de PI e uma variavel "var" ou "let" para armazenar o valor do raio dessa circunferencia.
*/

// PI * raio * raio

const PI = 3.141592
let raio = 10
let areaCircunferencia = PI * (raio * raio);

console.log('A circunferencia é = ' + areaCircunferencia + ' m²')

areaCircunferencia = Math.PI * (raio * raio);
console.log('A circunferencia é = ' + areaCircunferencia + ' m²')