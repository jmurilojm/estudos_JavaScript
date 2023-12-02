const produtoNome = "Exemplo de Produto";
const produtoValor = 1.5;
const produtoQuantidade = 20;


const compraValorTotal = produtoValor * produtoQuantidade;
const porcentagem = .05;
const taxa = porcentagem * compraValorTotal;
const compraPagamentoAVista = compraValorTotal - taxa;
const meses = 1
const compraPagamentoAPrazo = meses * taxa + compraValorTotal;




console.log(compraValorTotal, compraPagamentoAVista, compraPagamentoAPrazo);