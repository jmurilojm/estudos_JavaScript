// montanha_russa_cricri.py

const idade = 18
const altura = 1.64
const ticket_comprado = true

/*
if (ticket_comprado == true){
	console.log('Ticket OK!')
} else if (idade >= 18){
	console.log('Idade permitida')
} else if (altura >= 1.65){
	console.log('Altura ideal')
} else{
	console.log('Nenhum requisito foi satisfeito')
}
*/

if (ticket_comprado == true){
	console.log('Ticket OK')
	if (idade >= 18 && altura >= 1.65){
		console.log('Passeio permitido')
	} else{
		console.log('Nao autotizado')
		console.log('Idade ou altura abaixo do permitido')
	}
} else{
	console.log('Ticket invalido')
}