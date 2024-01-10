let cont = 0

let input = document.getElementById('inTarefa');
let btAdd = document.getElementById('btAdd');
let main = document.getElementById('areaLista')



function addTarefa() {
  // pegar calor do input
  let valorInput = input.value;
  
  // validacao
  if((valorInput!=='') && (valorInput!==null) && (valorInput!==undefined)){
    
    ++cont;
    
    let novoItem = `
    <div id='${cont}' class="item">
      <div class="item-icone" onclick='marcarTarefa(${cont})'>
        <i id='icone_${cont}'><span class="material-symbols-outlined">radio_button_unchecked</span>
        </i>
      </div>
      
      <div class="item-nome" onclick='marcarTarefa(${cont})'>
        ${valorInput}
      </div>
      
      <div class="item-botao">
        <button class="delete" onclick='deletar(${cont})'>
          <span class="material-symbols-outlined">delete_forever</span> Deletar
        </button>
      </div>
    </div>`
    
    // add novo item
    main.innerHTML += novoItem;
    // limpar
    input.value = '';
    input.focus();
  }
}


function deletar(id) {
  var tarefa = document.getElementById(id);
  tarefa.remove();
}



function marcarTarefa(id) {
  var item = document.getElementById(id);
  var classe = item.getAttribute('class')
  
  if(classe == 'item'){
    item.classList.add('clicado')
    
    var icone = document.getElementById('icone_'+id)
    icone.classList.remove('material-symbols-outlined')
    icone.classList.add('material-symbols-outlined marcado')
    
    //item.parentNode.appendChild(item);
    
  } else{
    item.classList.remove('clicado')
    
    var icone = document.getElementById('icone_'+id)
    icone.classList.remove('material-symbols-outlined marcado')
    icone.classList.add('material-symbols-outlined')
  }
}



input.addEventListener('keyup',function(e){
  // tecla enter 13
  if(e.keyCode === 13){
    e.preventDefault();
    btAdd.click();
  }
})