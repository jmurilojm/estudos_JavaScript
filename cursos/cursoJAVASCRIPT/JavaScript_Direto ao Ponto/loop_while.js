// loop_while.py

let x = 0

while (x < 5){
	console.log(x)
	x += 1
}

while (true){
	const resposta = prompt('A Capital do Brasil? ')
	if (resposta == 'brasilia'){
		console.log('Voce acertou!')
		break
	} else{
		console.log('Tente novamente.')
	}
}	

while (true){
	const login = input('Login: ')
	if (login != 'admin'){
		console.log('Login invalido')
		continue
	}
	
	const senha = prompt('Senha: ')
	if (senha == 'admin1'){
		console.log(`Ola, ${login}!`)
		console.log('Acessando...')
		break
	}
}