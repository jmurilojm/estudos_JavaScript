// media_da_turma.py

const notas = [7.3, 8.1, 6.9, 7.6, 9.3, 7.7, 8.5, 6.4, 7.1]

let soma_das_notas = 0
for (nota  of notas){
	soma_das_notas += nota
}
let media_da_turma = soma_das_notas / notas.length
	
console.log(soma_das_notas)
console.log(media_da_turma)