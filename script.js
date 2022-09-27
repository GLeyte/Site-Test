var jogadores = [];

function adicionaJogador() {
  var nomeJogador = document.getElementById("Nome").value;
  var jogador = {
    nome: nomeJogador,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
  };
  jogadores.push(jogador);
  exibirTabela();
}

function calcularPontos(jogador) {
  jogador.pontos = jogador.vitorias * 3 + jogador.empates;
}

function exibirTabela() {
  var elemento = "";

  jogadores.sort(function (a, b) {
    if (a.pontos > b.pontos) {
      return -1;
    }
    if (a.pontos < b.pontos) {
      return 1;
    }
    return 0;
  });

  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr>";
    elemento += "<td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

function adicionarVitoria(i) {
  console.log(jogadores[i], i);
  jogadores[i].vitorias++;
  calcularPontos(jogadores[i]);
}

function adicionarEmpate(i) {
  jogadores[i].empates++;
  calcularPontos(jogadores[i]);
}
function adicionarDerrota(i) {
  jogadores[i].derrotas++;
  calcularPontos(jogadores[i]);
}

function adicionaPartida() {
  // var jogador1 = document.getElementById("jogador1").value
  var jogador1 = document.querySelector(".from").value;
  var jogador2 = document.querySelector(".to").value;
  // var jogador2 = document.getElementById("jogador2").value
  var placar1 = document.getElementById("placar1").value;
  var placar2 = document.getElementById("placar2").value;

  document.getElementById("jogador1").value = "";
  document.getElementById("jogador2").value = "";
  document.getElementById("placar1").value = "";
  document.getElementById("placar2").value = "";

  var num1 = jogadores.findIndex(posicao1);
  var num2 = jogadores.findIndex(posicao2);

  if (placar1 > placar2) {
    adicionarVitoria(num1);
    adicionarDerrota(num2);
  } else if (placar1 < placar2) {
    adicionarVitoria(num2);
    adicionarDerrota(num1);
  } else {
    adicionarEmpate(num1);
    adicionarEmpate(num2);
  }

  exibirTabela();

  function posicao1(jogador) {
    return jogador.nome === jogador1;
  }
  function posicao2(jogador) {
    return jogador.nome === jogador2;
  }
}

$(document).on("click", "#novoJogador", function () {
  var nomeJogador = document.getElementById("Nome").value;
  document.getElementById("Nome").value = "";
  var newitemnum = nomeJogador;
  var newitemdesc = "Jogador " + nomeJogador;

  // Append the option to select
  $("#jogador1").append(
    '<option value="' + newitemnum + '">' + newitemdesc + "</option>"
  );

  // Set the select value with new option
  $("#jogador1").val(newitemnum);

  // Append the option to select
  $("#jogador2").append(
    '<option value="' + newitemnum + '">' + newitemdesc + "</option>"
  );

  // Set the select value with new option
  $("#jogador2").val(newitemnum);

  console.log(String(nomeJogador));
});
