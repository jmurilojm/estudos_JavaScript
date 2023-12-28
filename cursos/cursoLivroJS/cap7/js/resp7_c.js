/*
c) Elaborar um programa para uma veterinária, o qual leia o preço de uma vacina e se o cliente possui ou não convênio. Caso possua algum convênio, exibir uma caixa de seleção com os convênios "Amigo dos Animais" e "Saúde Animal. O programa deve exibir o valor do desconto (10% sem convênio; 20% para "Amigo dos Animais"; 50% para "Saúde Animal") e o valor a ser pago. Criar a função:

• calcularDesconto() que receba os parâmetros valor e taxa de desconto. Retornar o valor do desconto.

A Figura 7.7 apresenta a tela inicial do programa para um cliente sem convênio. Já a Figura 7.8 exibe a página para um cliente que possui convênio. Observe que a caixa de seleção não deve ser exibida no início do programa.
*/


function verificarConvenio(){
  /*
  Esta função verificar se a opção "SIM" está marcada. Caso esteja, a lista de convênios será exibida para que possa se escolher o convênio.
  */
  if(rbSim.checked){
    pConvenio.className = 'exibe'
    return true
  } else{
    pConvenio.className = 'oculta'
    return false
  }
}
const rbSim = document.getElementById('rbSim')
const rbNao = document.getElementById('rbNao')
rbSim.addEventListener('change', verificarConvenio)
rbNao.addEventListener('change', verificarConvenio)



function buscarConvenio(){
  /*
  Esta função captura o convênio que foi selecionado para que possa realizar o desconto para pagamento.
  */
  if(rbSim.checked){
    const nome = inConvenio.selectedIndex
    const convenio = inConvenio.options[nome].text
    return convenio
  }
}
const inConvenio = document.getElementById('inConvenio')
inConvenio.addEventListener('change', buscarConvenio)



function calcularDesconto(){
  /*
  Esta função irá calcular o valor a ser pago por ter ou não algum convênio.
  */
  const inValor = document.getElementById('inValor')
  const outDesconto = document.getElementById('outDesconto')
  const outPagar = document.getElementById('outPagar')
  
  const valor = Number(inValor.value)
  const desconto = outDesconto
  const pagar = outPagar
  
  if(valor == '' || valor < 1){
    alert('Por vafor, digite o valor!')
    return
  }
  
  // tem ou não algum convênio e qual deles?
  const temConvenio = verificarConvenio()
  const tipoDeConvenio = buscarConvenio()
  
  let valorDeDesconto
  let valorTotal
  if(temConvenio == false){
    valorDeDesconto = valor * .1
    valorTotal = valor - valorDeDesconto
  } else{
    if (inConvenio.value == 'amigo') {
      valorDeDesconto = valor * .2
      valorTotal = valor - valorDeDesconto
    } else {
      valorDeDesconto = valor * .5
      valorTotal = valor - valorDeDesconto
    }
  }
  
  desconto.textContent = 'Desconto R$: ' + valorDeDesconto.toFixed(2)
  pagar.textContent = 'A Pagar R$: ' + valorTotal.toFixed(2)
}
const btCalcular = document.getElementById('btCalcular')
btCalcular.addEventListener('click', calcularDesconto)



function limparCampos(){
/*
Esta função faz a kimpeza de todos os campo, retornando as opções para o estado inicial.
*/
  inValor.value = ''
  outDesconto.textContent = ''
  outPagar.textContent = ''
  rbSim.checked = false
  rbNao.checked = true
  inConvenio.selectedIndex = 0
  pConvenio.className = 'oculta'
  inValor.focus()
}
const btLimpar = document.getElementById('btLimpar')
btLimpar.addEventListener('click', limparCampos)