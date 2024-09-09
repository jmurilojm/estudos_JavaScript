/*
c) Elaborar um programa para cadastrar os serviços a serem realizados por um auto center, que organize a ordem de execução dos serviços. 
Armazenar os serviços no navegador do usuário e a cada clique no botão Executar Serviço remover o primeiro serviço e exibi-lo na página. 
O programa deve atualizar o número de serviços pendentes quando: 

a) a página for aberta; 
b) um serviço for incluído; 
c) um serviço for removido. 

A Figura 8.9 ilustra a página do sistema.
*/



let listaDeServicos = []

if(localStorage.getItem('lista')){
  document.getElementById('outPendentes').textContent = localStorage.getItem('servicos')
  
  let tam = localStorage.getItem('lista').split(',')
  for(let i = 0; i < tam.length; i++){
    listaDeServicos.push(tam[i])
  }
}

const btAdicionar = document.getElementById('btAdicionar')
btAdicionar.addEventListener('click', function(){
  
  const inServico = document.getElementById('inServico')
  const outPendentes = document.getElementById('outPendentes')
  
  const servico = inServico.value
  const pendentes = outPendentes
  
  if(servico == ''){
    alert('Por favor, informe um serviço!')
    return
  }
  
  listaDeServicos.push(servico)
  inServico.value = ''
  inServico.focus()
  
  pendentes.textContent = listaDeServicos.length
  
  salvar()
})



const btExecutar = document.getElementById('btExecutar')
btExecutar.addEventListener('click', function(){
  
  const outRetorno = document.getElementById('outRetorno')
  const outPendentes = document.getElementById('outPendentes')
  
  const retorno = outRetorno
  const pendentes = outPendentes
  
  if(listaDeServicos.length == 0){
    alert('Não há serviços!')
    return
  }
  
  retorno.textContent = listaDeServicos.shift()
  pendentes.textContent = listaDeServicos.length
  
  inServico.focus()
  
  salvar()
})



function salvar(){
  localStorage.setItem('lista', listaDeServicos)
  localStorage.setItem('servicos', listaDeServicos.length)
}