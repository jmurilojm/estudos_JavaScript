/*
Vamos construir um exemplo que explora esses métodos e propriedades na manipulação de tabelas via JavaScript. O terceiro programa deste capítulo deve cadastrar filmes na localStorage e exibir uma tabela contendo título, gênero e uma coluna que permita ao usuário selecionar o filme para exclusão. A Figura 9.7 exibe a página desse programa com alguns filmes cadastrados.

Crie um novo arquivo HTML e salve-o com o nome de ex9_3.html. O código a ser inserido nesse arquivo é descrito no Exemplo 9.3.
*/



function adicionarFilme() {
  const inTitulo = document.getElementById('inTitulo');
  const inGenero = document.getElementById('inGenero');
  
  
  const titulo = inTitulo.value;
  const genero = inGenero.value;
  
  if(titulo == '' || genero == ''){
    alert('Por favor, preencha todos os campos!');
    inTitulo.focus();
    return;
  }
  
  const tbFilmes = document.getElementById('tbFilmes');
  
  // funcao inserir filme na tabela
  inserirLinha(tbFilmes, titulo, genero);
  
  // gravar em localStorage
  gravarFilme(titulo, genero);
  
  inTitulo.value = '';
  inGenero.value = '';
  inTitulo.focus();
}
const btAdicionar = document.getElementById('btAdicionar');
btAdicionar.addEventListener('click', adicionarFilme);



function inserirLinha(tabela, titulo, genero) {
  const linha = tabela.insertRow(-1)
  
  const col1 = linha.insertCell(0);
  const col2 = linha.insertCell(1);
  const col3 = linha.insertCell(2);
  
  col1.textContent = titulo;
  col2.textContent = genero;
  col3.innerHTML = '<input type="checkbox">';
}



function gravarFilme(titulo, genero) {
  if(localStorage.getItem('filmesTitulo')){
    const filmesTitulo = localStorage.getItem('filmesTitulo') + ';' + titulo;
    const filmesGenero = localStorage.getItem('filmesGenero') + ';' + genero;
    
    localStorage.setItem('filmesTitulo', filmesTitulo);
    localStorage.setItem('filmesGenero', filmesGenero);
  } else{
    // nao sendo a primeira inclusão, salvo em delimitador
    localStorage.setItem('filmesTitulo', titulo);
    localStorage.setItem('filmesGenero', genero);
  }
}



function recuperarFilmes() {
  if(localStorage.getItem('filmesTitulo')){
    const titulos = localStorage.getItem('filmesTitulo').split(';');
    const generos = localStorage.getItem('filmesGenero').split(';');
    
    const tbFilmes = document.getElementById('tbFilmes');
    
    for(let i = 0; i < titulos.length; i++){
      inserirLinha(tbFilmes, titulos[i], generos[i])
    }
  }
}
recuperarFilmes();



// marcar quando clicar em Todos
const ckTodos = document.getElementById('ckTodos');
ckTodos.addEventListener('change', function(){
  const tbFilmes = document.getElementById('tbFilmes');
  const ckExcluir = tbFilmes.getElementsByTagName('input');
  
  const status = ckTodos.checked;
  
  for(let i = 1; i < ckExcluir.length; i++){
    ckExcluir[i].checked = status;
  }
});



function removerFilmes() {
  const tbFilmes = document.getElementById('tbFilmes');
  const ckExcluir = tbFilmes.getElementsByTagName('input');
  
  let temSelecionado = false;
  for(let i = 1; i < ckExcluir.length; i++){
    if(ckExcluir[i].checked){
      temSelecionado = true;
      break;
    }
  }
  
  if(!temSelecionado){
    alert('Não há filmes selecionados.');
    return;
  }
  
  if(confirm('Confirma a exclusão?')){
    localStorage.removeItem('filmesTitulo');
    localStorage.removeItem('filmesGenero');
    
    for(let i = 1; i < ckExcluir.length; i++){
      if(!ckExcluir[i].checked){
        var titulo = tbFilmes.rows[i].cells[0].textContent;
        var genero = tbFilmes.rows[i].cells[1].textContent;
        
        gravarFilme(titulo, genero);
      }
    }
    
    for(let i = ckExcluir.length - 1; i > 0; i--){
      if(ckExcluir[i].checked){
        tbFilmes.deleteRow(i);
      }
    }
    
    ckExcluir[0].checked = false;
  }
}
const btExcluir = document.getElementById('btExcluir');
btExcluir.addEventListener('click', removerFilmes);