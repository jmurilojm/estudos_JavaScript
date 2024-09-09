/*
Elaborar um programa que leia um número e calcule sua raiz quadrada.

Caso a raiz seja exata (quadrados perfeitos), informá-la, caso contrário,

informe: ‘Não há raiz exata para ..’. A Figura 3.5 ilustra uma execução desse
programa.
*/

/*
const numero = 20
const raiz = numero**.5
alert(raiz)
const teste = numero % raiz
alert(teste)
*/

function calcularRaizQuadrada(){
  const numero = document.getElementById('inNumero').value
  const resultado = document.getElementById('outResultado')
  
  //
  const raiz = Number(numero)**0.5
  const teste = numero % raiz
  
  if(teste != 0){
    resultado.textContent = 'Não há raiz exata para o numero: ' + numero
    return
  }
  
  resultado.textContent = 'A raiz do número é exata: ' + raiz
}

const btCalcular = document.getElementById('btCalcular')
btCalcular.addEventListener('click', calcularRaizQuadrada)