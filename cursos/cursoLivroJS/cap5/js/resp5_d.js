/*
d) Elaborar um programa que leia as últimas notícias da sua região e armazene-as em um vetor. Exibir na página, a cada inclusão, somente a quantidade de notícias cadastradas. O programa deve conter um botão que solicite o número de notícias que o usuário deseja visualizar e, então, liste as notícias em ordem inversa da inclusão. Ou seja, apenas as notícias mais recentes devem ser listadas, de acordo com o número informado pelo usuário. Validar esse número para que seja inferior ou igual à quantidade de notícias cadastradas. A Figura 5.16 ilustra a página do exercício com um exemplo em que o usuário solicitou as 3 últimas notícias.
*/

const btAdicionar = document.getElementById('btAdicionar')
const btListar = document.getElementById('btListar')
btAdicionar.addEventListener('click', adicionarNoticia)
btListar.addEventListener('click', listarNoticias)

let noticias = []
let cont = 0

function adicionarNoticia(){
  const inNoticia = document.getElementById('inNoticia')
  const outTotal = document.getElementById('outTotal')
  
  const noticia = inNoticia.value
  const total = outTotal
  
  if(isNaN(noticia) == false){
    alert('Por favor, preencha o campo "Notícia"!')
    return
  } else{
    noticias.push(noticia)
    cont++
    inNoticia.value = ''
    inNoticia.focus()
  }
  
  total.textContent = 'Quantidade de Notícias: ' + cont
}

function listarNoticias(){
  const outLista = document.getElementById('outLista')
  
  const saida = outLista
  
  let lista = ''
  if(noticias.length == 0){
    alert('Não há notícia publicada.')
    return
  } else{
    var quantidade = Number(prompt('Total que deseja visualizar?'))
    if(quantidade > noticias.length || quantidade == '' || quantidade < 1){
      alert('Por favor, verifique a quatidade digitada! Total de Notícias disponiveis: ' + noticias.length)
      return
    } else{
      for(let i = 0; i < quantidade; i++){
        lista += (noticias.length - i) + 'ª) ' + noticias[(noticias.length - i) - 1] + '\n'
      }
    }
  }
  
  saida.textContent = quantidade + ' últimas Notícias\n' + '------------------\n' + lista
}