alert('Vamos calcular o Perímetro e a Área de um Trângulo. Ok?')

// calculando o perimetro do triangulo
alert('Primeiro o Perímero. Informe as medidas de cada lado do triângulo.')

let lado1 = prompt('Lado 1')
let lado2 = prompt('Lado 2')
let lado3 = prompt('Lado 3')

lado1 = parseInt(lado1)
lado2 = parseInt(lado2)
lado3 = parseInt(lado3)

let perimetro = lado1 + lado2 + lado3


// calculando a area do trinagulo
alert('Agora, para calcular a área preciso que informe as medidas de sua Base e Altura.')
let base = prompt('Base')
let altura = prompt('Altura')

base = parseInt(base)
altura = parseInt(altura)

let area = (base * altura) / 2

alert(`O Perímetro do triângulo = ${perimetro} e Sua Área = ${area}`)