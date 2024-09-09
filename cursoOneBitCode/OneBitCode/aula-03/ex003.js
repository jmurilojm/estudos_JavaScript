let soma = 0
let totalDeNotasInseridas = 0

while(nota != -1){
    var nota = prompt('Digite a Nota ou -1 para sair a qualquer momento:')

    if(nota != -1){
        nota = parseInt(nota)
        soma += nota
        totalDeNotasInseridas++
    }
}

alert(soma / totalDeNotasInseridas)