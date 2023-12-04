// maior_nota.py

const notas = [1, 6, 4, 10, 3, 2, 0, 7]

let nota_maior = notas[0]
for (nota of notas){
	if (nota > nota_maior){
		nota_maior = nota
	}
}

console.log(nota_maior + ' ou ' + Math.max(...notas))