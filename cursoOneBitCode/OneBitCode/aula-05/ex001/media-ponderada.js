// Média Ponderada
let nota, peso;
let notas = []
let pesos = []

alert('Iniciando o cálculo de Média Ponderada.')

const ok = window.confirm(`Atenção!\n\nDigite -1 para encerrar o envio de notas e obter o resultado.`)

if (ok == true) {
  while (nota != -1) {
    nota = prompt('Nota:')
    if (nota >= 0) {
      notas.push(Number(nota))
      peso = prompt('Peso:')
      pesos.push(Number(peso))
    }
  }

  if (nota.length > 0) {
    let calc = 0
    let somaDosPesos = 0
    for (let i = 0; i < notas.length; i++) {
      calc += notas[i] * pesos[i]
      somaDosPesos += pesos[i]
    }
    const mediaPonderada = (calc / somaDosPesos).toFixed(2)


    console.log(`Média Ponderada = ${mediaPonderada}`)
  } else {
    console.log('Não há notas!')
  }
} else {
  alert('Até mais!')
}