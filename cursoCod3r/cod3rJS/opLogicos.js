const num1 = 0
const num2 = 1

if (num1 == 0 && num2 == 1){
  console.log('V')
}

if (num1 == 0 || num2 == 1){
  console.log('V')
}

if (num1 == 0 && num2 == 0){
  console.log('V')
} else{
  console.log('F')
}

if (num1 == 2 && num2 == 2){
  console.log('V')
} else{
  console.log('F')
}



// exemplo pratico
const trabalho1 = true
const trabalho2 = true

if (trabalho1 == true || trabalho2 == true){
  console.log('Ok!')
} else{
  console.log('Ops!')
}

function compras(t1, t2){
  const comprarSorvete = t1 || t2
  const comprarTv50 = t1 && t2
  const comprarTv32 = !!(t1 ^ t2)// bitwise xor
  const comprarTv43 = t1 != t2
  const manterSaudavel = !comprarSorvete//unario
  
  return {comprarSorvete, comprarTv50, comprarTv32, comprarTv43, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, false))
console.log(compras(false, true))