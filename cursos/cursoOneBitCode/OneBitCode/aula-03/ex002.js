let numero = prompt('Fatorial de que numero?')

let cont = numero
let fatorial = 1

while(cont != 0){
    fatorial *= cont
    cont--
}

alert(`O fatorial de ${numero} é = ${fatorial}`)