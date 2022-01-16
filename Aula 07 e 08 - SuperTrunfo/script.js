var carta01 = {
    nome: "Musa",
    imagem:
      "https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/01/MusaPerfilT7-1200x675.png",
    atributos: {
      ataque: 7,
      defesa: 8,
      magia: 8
    }
  };
  
  var carta02 = {
    nome: "Flora",
    imagem:
      "http://www.recreio.com.br/images/original/2020/12/10/flora-winx-1225926.jpg",
    atributos: {
      ataque: 5,
      defesa: 5,
      magia: 7
    }
  };
  
  var carta03 = {
    nome: "Tecna",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLx0U3wm1OX2oQ34PI2TBPLfZkbv0Is7cG9A&usqp=CAU",
    atributos: {
      ataque: 8,
      defesa: 7,
      magia: 8
    }
  };
  
  var carta04 = {
    nome: "Aisha",
    imagem:
      "https://www.winxclub.com/sites/default/files/galleria/aisha-fata-dei-fluidi.jpg",
    atributos: {
      ataque: 6,
      defesa: 8,
      magia: 10
    }
  };
  
  var carta05 = {
    nome: "Stella",
    imagem:
      "https://www.winxclub.com/sites/default/files/galleria/immagine-corpo_69.jpg",
    atributos: {
      ataque: 9,
      defesa: 6,
      magia: 8
    }
  };
  
  var carta06 = {
    nome: "Stormy",
    imagem:
      "https://i.pinimg.com/originals/67/e1/3e/67e13eeeb759d950ebab76325be8683b.png",
    atributos: {
      ataque: 8,
      defesa: 7,
      magia: 7
    }
  };
  
  var carta07 = {
    nome: "Darcy",
    imagem:
      "https://i.pinimg.com/originals/be/21/82/be2182e74f93873286903e26f58c57ce.png",
    atributos: {
      ataque: 8,
      defesa: 8,
      magia: 8
    }
  };
  var carta08 = {
    nome: "Icy",
    imagem:
      "https://i.pinimg.com/originals/d3/cc/82/d3cc821087944f2cb62aec4b7480fd9e.jpg",
    atributos: {
      ataque: 9,
      defesa: 9,
      magia: 9
    }
  };
  
  var carta09 = {
    nome: "Roxy",
    imagem:
      "https://pm1.narvii.com/6515/aa1a466ddf51f2e0220d7aa227222b98253d8e10_hq.jpg",
    atributos: {
      ataque: 6,
      defesa: 8,
      magia: 7
    }
  };
  
  var carta10 = {
    nome: "Bloom",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQATjphD5wORLjjkBZTYpd6nGV3R3eUZZBbkQ&usqp=CAU",
    atributos: {
      ataque: 9,
      defesa: 9,
      magia: 9
    }
  };
  
  var cartas = [
    carta01,
    carta02,
    carta03,
    carta04,
    carta05,
    carta06,
    carta07,
    carta08,
    carta09,
    carta10
  ];
  
  var cartaMaquina;
  var cartaJogador;
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
    cartaMaquina = cartas[numeroCartaMaquina];
    //console.log(cartaMaquina);
  
    do {
      var numeroCartaJogador = parseInt(Math.random() * cartas.length);
    } while (numeroCartaMaquina == numeroCartaJogador);
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    //exibirOpcao();
    exibirCartaJogador();
  }
  
  // function exibirOpcao() {
  //   var opcoes = document.getElementById("opcoes");
  //   var opcoesTexto = "";
  //   for (var atributo in cartaJogador.atributos) {
  //     opcoesTexto +=
  //       "<input type='radio' name='atributo' value='" +
  //       atributo +
  //       "'>" +
  //       atributo;
  //   }
  //   opcoes.innerHTML = opcoesTexto;
  // }
  
  function obterAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
  
    for (var i = 0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked) {
        return radioAtributos[i].value;
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obterAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
  
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  
    var textoResultado = "";
    if (valorCartaJogador > valorCartaMaquina) {
      textoResultado = "<p class='resultado-final'> Você venceu!! </p>";
    } else if (valorCartaMaquina > valorCartaJogador) {
      textoResultado = "<p class='resultado-final'> Você perdeu </p>";
    } else {
      textoResultado = "<p class='resultado-final'> Empate </p>";
    }
    //console.log(cartaMaquina);
    divResultado.innerHTML = textoResultado;
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
  }
  
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  
    var tagOpcoesHTML = "<div id='opcoes' class='carta-status'>";
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' class='opcao--atributo--carta' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
    var nomePersonagem = `<p class="carta-subtitle"> ${cartaJogador.nome} </p>`;
  
    divCartaJogador.innerHTML =
      moldura + nomePersonagem + tagOpcoesHTML + opcoesTexto + "</div>";
  }
  
  function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  
    var tagOpcoesHTML = "<div id='opcoes' class='carta-status'>";
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] +
        "</p>";
    }
    var nomePersonagem = `<p class="carta-subtitle"> ${cartaMaquina.nome} </p>`;
  
    divCartaMaquina.innerHTML =
      moldura + nomePersonagem + tagOpcoesHTML + opcoesTexto + "</div>";
  }
  