let numero = prompt('Diga um número para a tabuada:')
let tabuada = ''

for(let i = 1; i < 11; i++){
    tabuada += `${numero} * ${i} = ${numero * i}\n`
}

alert(tabuada)