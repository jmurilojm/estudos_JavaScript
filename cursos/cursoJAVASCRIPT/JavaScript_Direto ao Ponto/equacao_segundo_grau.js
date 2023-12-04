 function equacao_segundo_grau(){
	/*a = int(input('Valor de a = '))
	b = int(input('Valor de b = '))
	c = int(input('Valor de c = '))*/
	const a = 1
	const b = 3
	const c = 2
	
	// ax**2 + bx + c
	
	const delta = b**2 - 4*a*c
	if (delta >= 0){
		console.log('∆: ' + delta)
		const raiz_de_delta = delta ** (.5)
		console.log('Raiz de ∆: ' + raiz_de_delta)
		
		const x1 = (- b + raiz_de_delta) / (2*a)
		console.log('X¹: ' + x1)
		const x2 = (- b - raiz_de_delta) / (2*a)
		console.log('X²: ' + x2)
	} else{
		console.log('Delta Negativo!')
	}
}

equacao_segundo_grau()