let itens = []

function cadastrar() {
  let numero = document.getElementById('numero')
  let lista = document.getElementById('listagem')


  if (numero.value == '' || numero.value > 100 || itens.indexOf(numero.value) != -1) {
    alert('Número existente ou inválido!')
  } else {
    itens.push(numero)
    lista.innerText = itens
    numero.value = ''
  }
  numero.focus()
}


function finalizar(){
  let saida = document.getElementById('tela')
  
  let quantidade = itens.length
  let maior = Math.max(itens)
  let menor = Math.min(itens)
  let soma = somarLista(itens)
  let media = soma / quantidade
  
  
  saida.innerHTML = 
  '<p>Total de elementos: '+quantidade+
  '</p><p>Maior elemento: '+maior+
  '</p><p>Menor: '+menor+
  '</p><p>Soma dos elementos: '+soma+
  '</p><p>Media: '+media+'</p>'
}

function somarLista(parametro){
  let soma = 0
  
  for(i of parametro){
    soma += Number(i)
  }
  return soma
}