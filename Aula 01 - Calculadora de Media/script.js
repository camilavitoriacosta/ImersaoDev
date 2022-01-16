function CalcularMedia() {
    var notaPrimeiroBimestre = parseInt(
      document.getElementById("NotaPrimeiroBimestre").value
    );
    var notaSegundoBimestre = parseInt(
      document.getElementById("NotaSegundoBimestre").value
    );
    var notaTerceiroBimestre = parseInt(
      document.getElementById("NotaTerceiroBimestre").value
    );
    var notaQuartoBimestre = parseInt(
      document.getElementById("NotaQuartoBimestre").value
    );
  
    var notaFinal =
      (notaPrimeiroBimestre +
        notaSegundoBimestre +
        notaTerceiroBimestre +
        notaQuartoBimestre) /
      4;
  
    notaFinal = notaFinal.toFixed(1);
  
    var msg = document.getElementById("Nota-Final");
  
    if (notaFinal >= 7) {
      var situacao = "Aprovado";
      msg.style.background = "#38A056";
    } else {
      var situacao = "Reprovado";
      msg.style.background = "#C42B28";
    }
  
    msg.innerHTML = situacao + ". Sua nota final é: " + notaFinal;
  }
  