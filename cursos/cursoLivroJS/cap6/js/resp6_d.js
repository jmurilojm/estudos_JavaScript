/*
d) Suponha que o prazo para o pagamento de uma infração de trânsito com desconto seja de 90 dias.Elaborar um programa que leia a data de uma infração e o valor da multa.Informe qual a data limite do pagamento com desconto(até 90 dias) e o valor a ser pago até essa data(com 20 % de desconto).A Figura 6.19 ilustra o funcionamento do programa.
*/


const btCalcular = document.getElementById('btCalcular')
btCalcular.addEventListener('click', calcularDataLimite)


function calcularDataLimite(){
  const inData = document.getElementById('inData')
  const inValor = document.getElementById('inValor')
  const outRetorno = document.getElementById('outRetorno')
  
  
  const dataDoc = inData.value
  const valor = Number(inValor.value)
  const retorno = outRetorno
  
  if(valor == '' || dataDoc == ''){
    alert('Por favor, preencha todos os campos!')
    return
  }
  
  
  const diaDoc = dataDoc.slice(8)
  const mesDoc = dataDoc.slice(5,7)-1
  const anoDoc = dataDoc.slice(0,4)
  
  const calendarioDoc = new Date(anoDoc,mesDoc,diaDoc)
  
  
  /*console.log(calendarioDoc.getDate(), (calendarioDoc.getMonth()+1), calendarioDoc.getFullYear())*/
  
  calendarioDoc.setDate(calendarioDoc.getDate() + 90)
  
  const dataLimite = calendarioDoc.getDate() + '/' + (calendarioDoc.getMonth()+1) + '/' + calendarioDoc.getFullYear()
  
  const TX = 0.2
  const valorComDesconto = (valor - (valor * TX)).toFixed(2)
  
  retorno.textContent = 'Data Limite: ' + dataLimite + '\n\nAté essa data, você pagará R$: ' + valorComDesconto
  
}
