// Expressões Lógicas - Operadores lógicos: e (&&), ou (||) e not (!)
// Estruturas condicionais: if / else e switch case
let idade = 18
if(idade < 18){
    console.log('Menor')
} else{
    console.log('Maior de idade')
}

let opção = 2
switch(opção){
    case 1:
        console.log(1)
        break
    case 2:
        console.log(2)
        break
    case 3:
        console.log(3)
        break
    default:
        console.log('Nenhuma das opções!')
}


// Estruturas de repetição: while, do while e for
let cont = 12
while(cont < 15){
    console.log(cont)
    cont++
}

let cont2 = 8
do{
    console.log(cont2)
    cont2++
} while(cont2 < 11)

for(let i = 0; i < 3; i++){
    console.log(i)
}