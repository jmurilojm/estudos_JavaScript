let valorDaCompra = prompt('Qual o valor da compra?')
let porcentagemDeDesconto = prompt('Porcentagem de desconto?')

let valorASerDescontado = (valorDaCompra * porcentagemDeDesconto) / 100
let valorAPagar = valorDaCompra - valorASerDescontado

alert(`Descrição da compra:

Valor da compra = R$ ${valorDaCompra}
Porcentagem de desconto = ${porcentagemDeDesconto}%
Valor à ser descontado = R$ ${valorASerDescontado}
Valor à pagar = R$ ${valorAPagar}`)