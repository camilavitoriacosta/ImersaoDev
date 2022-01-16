function adicionarFilme() {
    var filme = document.getElementById("filmeImagem").value;
    var filmeNome = document.getElementById("filmeNome").value;
  
    if (filme.endsWith(".jpg") || filme.endsWith(".png")) {
      listarFilmesNaTela(filme);
    } else {
      console.error("Endereço de imagem inválido");
    }
  
    limparCampoFilme();
  }
  
  function listarFilmesNaTela(filme) {
    var divFilme = "<div>";
    var elementoFilme = "<img src=" + filme + ">";
    var filmeNome = document.getElementById("filmeNome").value;
    var elementoNome = "<p> " + filmeNome + " </p>";
    var fimDivFilme = "</div>";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    adicionar = divFilme + elementoFilme + elementoNome + fimDivFilme;
    elementoListaFilmes.innerHTML += adicionar;
  }
  
  function limparCampoFilme() {
    document.getElementById("filmeImagem").value = "";
    document.getElementById("filmeNome").value = "";
  }
  
  // https://upload.wikimedia.org/wikipedia/pt/d/d6/Beauty_and_the_Beast_2017_poster.jpg
  
  // https://media.fstatic.com/6oZGFnT8vgNMqCiKEmmdv63yCz4=/290x478/smart/media/movies/covers/2017/01/beauty_and_the_beast_ver4_xlg.jpg
  