/*
d) Suponha que o prazo para o pagamento de uma infração de trânsito com desconto seja de 90 dias.Elaborar um programa que leia a data de uma infração e o valor da multa.Informe qual a data limite do pagamento com desconto(até 90 dias) e o valor a ser pago até essa data(com 20 % de desconto).A Figura 6.19 ilustra o funcionamento do programa.
*/


const btCalcular = document.getElementById('btCalcular')
btCalcular.addEventListener('click', calcularDataLimite)


function calcularDataLimite(){
  const inData = document.getElementById('inData')
  const inValor = document.getElementById('inValor')
  const outRetorno = document.getElementById('outRetorno')
  
  
  const data = inData.value
  const valor = Number(inValor.value)
  const retorno = outRetorno
  
  
  let dataDoc = new Date()
  dataDoc.setDate()
  dataDoc.setMonth()
  dataDoc.setFullYear()
  
  
  console.log()
}
