let elementoDuvida = document.querySelectorAll('.duvida');

// forEach -> para cada
elementoDuvida.forEach(function(duvida){
  duvida.addEventListener('click', function(){
    duvida.classList.toggle('ativa')// se existe tira, se nao coloca
  })
})