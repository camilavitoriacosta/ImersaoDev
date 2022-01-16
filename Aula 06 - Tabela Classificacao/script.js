// objeto
rafa = { nome: "Rafa", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
paulo = { nome: "Paulo", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
gui = { nome: "Gui", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };

// lista de objetos
var jogadores = [rafa, paulo, gui];
exibirJogadoresNaTela(jogadores);

function calcularPontos(jogador) {
  return jogador.vitorias * 3 + jogador.empates;
}

function exibirJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr> <td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button class='botao__tabela' onClick='adicionarVitoria(" +
      i +
      ")'>Vitória</button></td>";
    elemento +=
      "<td><button class='botao__tabela' onClick='adicionarEmpate(" +
      i +
      ")'>Empate</button></td>";
    elemento +=
      "<td><button class='botao__tabela' onClick='adicionarDerrota(" +
      i +
      ")'>Derrota</button></td>";
    elemento +=
      "<td><button class='botao__tabela' onClick='resetar(" +
      i +
      ")'> Resetar </button></td>";
    elemento += " </tr>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calcularPontos(jogador);
  exibirJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calcularPontos(jogador);
  exibirJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  jogador.pontos = calcularPontos(jogador);
  exibirJogadoresNaTela(jogadores);
}

function resetar(i) {
  var jogador = jogadores[i];
  jogador.pontos = 0;
  jogador.empates = 0;
  jogador.vitorias = 0;
  jogador.derrotas = 0;
  exibirJogadoresNaTela(jogadores);
}
