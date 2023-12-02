let numeroAleatorio = (Math.random() * 100) + 1
numeroAleatorio = parseInt(numeroAleatorio)


let tentativas = 15
while(tentativas > 0){
    let palpite = prompt(`
    Palpite de um número entre 1 e 100:
    Número de Tentativas = ${tentativas}`)

    if(isNaN(palpite) || palpite < 1 || palpite > 100){
      alert('Apenas números e que esteja entre 1 e 100')
      tentativas--
    } else if(palpite == numeroAleatorio){
        alert('Você acertou!')
        break
    } else if(palpite < numeroAleatorio){
        alert('É Maior')
        tentativas--
    } else if( palpite > numeroAleatorio){
        alert('É Menor')
        tentativas--
    }
}

if(tentativas == 0){
  alert('Suas tentaivas acabaram. Atualize a página e inicie um Novo jogo.')
}