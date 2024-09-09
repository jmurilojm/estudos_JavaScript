let musica = document.getElementById('musica');


document.getElementById('play').addEventListener('click', tocarMusica);
document.getElementById('pause').addEventListener('click', pausarMusica);


function tocarMusica(){
  musica.play();
  document.getElementById('play').style.display = 'none';
  document.getElementById('pause').style.display = 'block';
}

function pausarMusica(){
  musica.pause();
  document.getElementById('pause').style.display = 'none';
  document.getElementById('play').style.display = 'block';
}