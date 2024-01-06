//Desafio 1
//Obter somente as vogais da frase digitada
function getVocais() {
  let frase = document.getElementById("frase").value;
  let vogais = [];
  for (var i = 0; i < frase.length; i++) {
    let letra = frase[i];
  }
  let resultadoVogais = document.getElementById("resultadoVogais");
  resultadoVogais.innerText =
    "Você vai ter que substituir essa string pela resposta certa";
}

class Personagem {
  constructor(sexo, nome, raca) {
    this.sexo = sexo;
    this.nome = nome;
    this.raca = raca;
  }
}

class Item {
  constructor(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
  }
}
