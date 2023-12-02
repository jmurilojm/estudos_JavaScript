// dicionarios.py

let dados = {'nome': 'Fulano', 'peso': 85, 'altura': 1.65}

console.log(dados)
console.log(dados['nome'])

for (dado in dados){
	console.log(dado)
}
	

let x = Object.values(dados)
x.forEach((y) => console.log(y))

let a = Object.keys(dados);
a.forEach((b) => console.log(b))