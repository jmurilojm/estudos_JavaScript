// Manipulando Elementos

/*
getElementById
getElementsByClassName
getElementsByTagName
getElementsByName
*/

document.write("<br>" + document.getElementById("outSaida"));
document.write("<br>" + document.getElementsByClassName("outSaida"));
document.write("<br>" + document.getElementsByTagName("p"))
document.write("<br>" + document.getElementsByName("outSaida"))

const btn = document.createElement("button")
btn.innerHTML = "Botao";
document.getElementsByTagName("body")[0].appendChild(btn)


function verificarAtivo(){
  document.write(document.activeElement.tagName)
}
