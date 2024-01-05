function adicionarTarefa(){
  const inTarefa = document.getElementById('inTarefa')
  
  const tarefa = inTarefa.value
  
  if(tarefa == ''){
    alert('Por favor, informe uma tarefa!')
    inTarefa.focus()
    return
  }
  
  // agora, criar elemento html
  // onde sera colocado a nova tag
  const divQuadro = document.getElementById('divQuadro')
  
  // cria a tag e o texto para a tag
  const h5 = document.createElement('h5')
  const texto = document.createTextNode(tarefa)
  
  // indicar que texto é de h5 e h5 é de ...
  h5.appendChild(texto)
  divQuadro.appendChild(h5)
  
  inTarefa.value = ''
  inTarefa.focus()
}
const btAdicionar = document.getElementById('btAdicionar')
btAdicionar.addEventListener('click', adicionarTarefa)



function selecionarTarefa(){
  const h5 = document.getElementsByTagName('h5')
  
  const totalH5 = h5.length
  
  if(totalH5 == 0){
    alert('Não há tarefas para selecionar!')
    return
  }
  
  let aux = -1
  for(let i = 0; i < totalH5; i++){
    if(h5[i].className == 'tarefaSelecionada'){
      h5[i].className = 'tarefaNormal'
      aux = i
      break
    }
  }
  
  if(aux == totalH5 - 1){
    aux = -1
  }
  
  h5[aux + 1].className = 'tarefaSelecionada'
}
const btSelecionar = document.getElementById('btSelecionar')
btSelecionar.addEventListener('click', selecionarTarefa)



function retirarSelecionado(){
  const divQuadro = document.getElementById('divQuadro')
  const h5 = document.getElementsByTagName('h5')
  
  const totalH5 = h5.length
  if(totalH5 == 0){
    alert('Não há tarefa para ser retirada!')
    return
  }
  
  let aux = -1
  for(let i = 0; i < totalH5; i++){
    if(h5[i].className == 'tarefaSelecionada'){
      aux = i
      break
    }
  }
  
  if(aux == -1){
    alert('Selecione uma tarefa para removela.')
    return
  }
  
  if(confirm('Confirma a exclusão de ' + h5[aux].textContent + '?')){
    divQuadro.removeChild(h5[aux])
  }
}
const btRetirar = document.getElementById('btRetirar')
btRetirar.addEventListener('click', retirarSelecionado)



function gravarTarefa(){
  const h5 = document.getElementsByTagName('h5')
  
  const totalH5 = h5.length
  if(totalH5 == 0){
    alert('Não há o que salvar!')
    return
  }
  
  let tarefas = ''
  for(let i = 0; i < totalH5; i++){
    tarefas += h5[i].textContent + ';'
  }
  
  localStorage.setItem('tarefasDoDia', tarefas.substr(0, tarefas.length -1))
  
  if(localStorage.getItem('tarefasDoDia')){
    alert('As tarefas foram salvas!')
    return
  }
  
}
const btGravar = document.getElementById('btGravar')
btGravar.addEventListener('click', gravarTarefa)



function recuperarTarefas(){
  if(localStorage.getItem('tarefasDoDia')){
    const tarefas = localStorage.getItem('tarefasDoDia').split(';')
    
    const divQuadro = document.getElementById('divQuadro')
    
    for(let i = 0; i < tarefas.length; i++){
      const h5 = document.createElement('h5')
      const texto = document.createTextNode(tarefas[i])
      
      h5.appendChild(texto)
      divQuadro.appendChild(h5)
    }
  }
}
recuperarTarefas()