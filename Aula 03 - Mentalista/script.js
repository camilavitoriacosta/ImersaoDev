var tentativa = 3;
var numeroSecreto = parseInt(Math.random() * 11);

function ResetarJogo(){
  document.getElementById("vidas").innerHTML = "❤️ ❤️ ❤️";
  var tentativa = 3;
  var numeroSecreto = parseInt(Math.random() * 11);
  ativarCartas();
  document.getElementById("mensagem").innerHTML = "Selecione uma carta";
}

function ativarCartas(){
  for (var i=0; i < 10; i++){
    var carta = "carta" + i;
    const elemento = document.getElementById(carta);
    if (elemento.classList.contains("disabled")){
      elemento.classList.remove("disabled");
    }
  }
}

function Chutar(chute) {
 if (tentativa > 0){
   if (chute == numeroSecreto) {
     document.getElementById("mensagem").innerHTML = "YOU WIN!!"
   } 
   else{
     verificaNumero(chute)
     desativarCarta("carta"+ chute);
     chuteErrado()
   }
 }
}

function chuteErrado(){
  var vidas = document.getElementById("vidas");
  tentativa--;
  if (tentativa == 2){
    vidas.innerHTML = "❤️ ❤️ 🖤";
  }
  else if (tentativa == 1){
    vidas.innerHTML = "❤️ 🖤 🖤";
  }
  else {
    vidas.innerHTML = "🖤 🖤 🖤";
    var mensagem = document.getElementById("mensagem");
    mensagem.innerHTML = "GAME OVER"
  }
}

function verificaNumero(chute){
  var mensagem = document.getElementById("mensagem");
  if (chute > numeroSecreto) {
    mensagem.innerHTML = "O chute é MAIOR do que o número secreto. Tente novamente!"
  }
  else{
    mensagem.innerHTML = "O chute é MENOR do que o número secreto. Tente novamente!"
  }
}

// Desativar carta quando errar
function desativarCarta(carta) {
  const elemento = document.getElementById(carta);
  if (elemento.classList) elemento.classList.add("disabled");
  else elemento.className += " disabled";
}
 


