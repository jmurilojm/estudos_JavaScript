function apresentarCorSelecionada() {
  const escolha = document.getElementById("inCor");
  const corSelecionada = escolha.options[escolha.selectedIndex].text;

  document.getElementById("outSaida").innerHTML = corSelecionada;

  switch (corSelecionada) {
    case "Azul":
      document.body.style.backgroundColor = "blue";
      break;
    case "Vermelho":
      document.body.style.backgroundColor = "red";
      break;
    case "Amarelo":
      document.body.style.backgroundColor = "yellow";
      break;
    case "Verde":
      document.body.style.backgroundColor = "green";
      break;
    default:
      //document.getElementById("outSaida").innerHTML = "Cor nao selecionada!";
      document.body.style.backgroundColor = "gray";
  }
}