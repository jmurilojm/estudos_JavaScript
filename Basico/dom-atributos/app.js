// Manipulando Atributos

/*
setAttribute
getAttribute
removeAttribute
*/


// adicionando atributos a um elemento
function addAtributo() {
  // criar elemento
  const el = document.createElement("input");

  // adicionar atributo ao elemento
  el.setAttribute("id", "inTexto");
  el.setAttribute("placeholder", "Digite...");

  // adicionar o elemento na pagina
  document.body.appendChild(el);
}


// pegando atributos de um elemento
function exibirAtributo() {
  // criar um elemento para receber os gets
  const parag = document.createElement("p");

  // pegando os atributos
  const valor = document.getElementById("inTexto").value;
  const identificador = document.getElementById("inTexto").getAttribute("id");
  const place = document.getElementById("inTexto").getAttribute("placeholder");

  // colocando os atributos no elemento
  parag.innerHTML = `Value: ${valor}\nId: ${identificador}\nPlaceholder: ${place}`;

  // adicionando o elemento na pagina
  document.body.appendChild(parag);
}


// removendo atribibutos de um elemento
function removerLink() {
  document.getElementById("link").removeAttribute("href");
}


/*
Utilisando className para inserir ou retornar
*/
function adicionarClasse() {
  // pegar o elemento
  const el = document.getElementById("link");

  // adicionar uma class
  el.className = "bgYellow";
  alert(el.className)
}


/*
Utilizando style para adiconar ou retornar
*/
function adicionarEstilo() {
  const el = document.getElementById("link");

  // adicionar o estilo
  el.style.backgroundColor = 'darkblue';
  el.style.color = 'white';
  console.log(el.style)
}