const a = 5
const b = '5'

console.log('01)', a == b);// true
console.log('02)', a === b);// false
console.log('03)', a < b); // false
console.log('04)', a > b); // false
console.log('05)', a != b); // false
console.log('06)', a !== b);// true
console.log('07)', a <= b);// true
console.log('08)', a >= b);// true

const d1 = new Date()// 1º de janeiro
console.log(d1)
console.log('Dia:', d1.getDay());
console.log('Time:', d1.getTime());
console.log('Data:', d1.getDate());
console.log('Ano:', d1.getFullYear())