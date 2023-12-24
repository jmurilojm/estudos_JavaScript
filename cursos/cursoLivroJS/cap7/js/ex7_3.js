/*
Vamos agora construir um exemplo com uso de funções com retorno de valor.

Nosso programa será para a Revenda Herbie (a mesma do Exemplo 5.3).Ele deve ler:
- modelo, 
- ano de fabricação e 
- preço do veículo (o valor que o proprietário deseja receber pelo veículo).

Em seguida, o programa deve classificar o veículo como:
- "Novo" (do ano atual), 
- "Seminovo" (até 2 anos de uso) ou 
- "Usado". 

Também deve apresentar o preço de venda do veículo com um acréscimo de 
- 8% no preço dos veículos novos ou de 
- 10% no preço dos veículos classificados como seminovos ou usados. 

Para a classificação e o cálculo do preço de venda do veículo, serão utilizadas funções com retorno de valor. A Figura 7.1 ilustra a página com um veículo para exemplificar os dados de entrada e saída do programa.
*/

const btCalcular = document.getElementById('btCalcular')
btCalcular.addEventListener('click', calcularEClassificar)


function calcularEClassificar() {
  // Tab to edit
  const inModelo = document.getElementById('inModelo')
  const inAno = document.getElementById('inAno')
  const inPreco = document.getElementById('inPreco')
  const outClassificacao = document.getElementById('outClassificacao')
  const outVenda = document.getElementById('outVenda')
  
  const modelo = inModelo.value
  const ano = Number(inAno.value)
  const precoCliente = Number(inPreco.value)
  const retornoClasse = outClassificacao
  const retornoValor = outVenda
  
  
  const estadoDoVeiculo = classificacao(ano)
  const precoDoVeiculo = precificacao(estadoDoVeiculo, precoCliente)
  
  
  retornoClasse.textContent = modelo + ' - ' + estadoDoVeiculo
  retornoValor.textContent = 'Preço de Venda R$: ' + precoDoVeiculo
}


function classificacao(anoDoVeiculo) {
  // Tab to edit
  
  const data = new Date()
  const anoAtual = data.getFullYear()
  
  if (anoDoVeiculo == anoAtual) {
    return 'Novo'
  } else if ((anoAtual - anoDoVeiculo) <= 2) {
    return 'Seminovo'
  } else {
    return 'Usado'
  }
}


function precificacao(estado, valor) {
  // Tab to edit
  let precoDeVenda = 0
  const TX_NOVO = 0.08
  const TX_OUTROS = 0.1
  
  switch (estado) {
    case 'Novo':
      // Tab to edit
      precoDeVenda = valor + (valor * TX_NOVO)
      return precoDeVenda.toFixed(2)
      break;
      
    case 'Seminovo':
      precoDeVenda = valor + (valor * TX_OUTROS)
      return precoDeVenda.toFixed(2)
      break
      
    case 'Usado':
      precoDeVenda = valor + (valor * TX_OUTROS)
      return precoDeVenda.toFixed(2)
      break
  }
}