import { dobro, somar, subtrair } from "./funcoes.js";

/*
// ex001
let numero = prompt('Digite um numero')
let retornoDaFuncao = dobro(numero)

alert(retornoDaFuncao)
*/

// ex002




function menu() {
    let opcoes = prompt(`
1 - Dobro
2 - Somar
3 - Subtração`)
    opcoes = parseInt(opcoes)
    return opcoes
}

let opcao = menu()

switch(opcao){
    case 1:
        let nOp1 = prompt('Digite um número')
        let respOp1 = dobro(nOp1)
        alert(respOp1)
        break

    case 2:
        let n1Op2 = prompt('Digite um número')
        let n2Op2 = prompt('Outro número')
        n1Op2 = parseInt(n1Op2)
        n2Op2 = parseInt(n2Op2)
        let respOp2 = somar(n1Op2,n2Op2)
        alert(respOp2)
        break

    case 3:
        let n1Op3 = prompt('Digite um número')
        let n2Op3 = prompt('Outro numero')
        n1Op3 = parseInt(n1Op3)
        n2Op3 = parseInt(n2Op3)
        let respOp3 = subtrair(n1Op3, n2Op3)
        alert(respOp3)
        break

    default:
        alert('Você não escolheu uma das opções. Reinicie!')
}