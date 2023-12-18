const TX_MULTA = .02
const TX_JUROS = .03 / 100

function calcularMultaJuros(){
  // referencias aos elementos
  const inVencimento = document.getElementById('inVencimento')
  const inValor = document.getElementById('inValor')
  const outMulta = document.getElementById('outMulta')
  const outJuros = document.getElementById('outJuros')
  const outTotal = document.getElementById('outTotal')
  
  
  // obter conteúdo dos campos de entrada
  const vencimento = inVencimento.value
  const valor = Number(inValor.value)
  
  
  // duas instacias de data
  let hoje = new Date()
  let venc = new Date()
  
  
  // a data vem no formato aaaa-mm-dd
  let partes = vencimento.split('-')
  venc.setDate(Number(partes[2]))
  venc.setMonth(Number(partes[1]))
  venc.setFullYear(Number(partes[0]))
  
  
  // calculo de diferenca de dias
  let atraso = hoje - venc
  
  // iniciando multa e juros com valor = 0
  let multa = 0
  let juros = 0
  
  // analisando a consta
  if(atraso > 0){
    let dias = Math.round(atraso / 86400000)
    
    multa = valor * TX_MULTA
    juros = (valor * TX_JUROS) * dias
  }
  
  let total = valor + multa + juros
  
  outMulta.value = multa.toFixed(2)
  outJuros.value = juros.toFixed(2)
  outTotal.value = total.toFixed(2)
}

function limparCampos(){
  location.reload()
}


// referência aos botões 
const btCalcular = document.getElementById('btCalcular')
const btNova = document.getElementById('btNova')

btCalcular.addEventListener('click', calcularMultaJuros)
btNova.addEventListener('click', limparCampos)


