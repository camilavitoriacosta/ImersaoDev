function mostrar(id, valor) {
    var elementoValorConvertido = document.getElementById(id);
    var valorConvertido = valor;
    elementoValorConvertido.innerHTML = valorConvertido.toFixed(2);
  }
  
  function ConverterDeDolar() {
    var valorElemento = document.getElementById("valor");
    var valorDolar = parseFloat(valorElemento.value);
  
    var valorReal = valorDolar * 5;
    var valorEuro = valorDolar * 0.85;
  
    mostrar("valorConvertidoReal", valorReal);
    mostrar("valorConvertidoEuro", valorEuro);
    mostrar("valorConvertidoDolar", valorDolar);
  }
  
  function ConverterDeReal() {
    var valorElemento = document.getElementById("valor");
    var valorReal = parseFloat(valorElemento.value);
  
    var valorDolar = valorReal / 5;
    var valorEuro = valorReal * 0.16;
  
    mostrar("valorConvertidoReal", valorReal);
    mostrar("valorConvertidoEuro", valorEuro);
    mostrar("valorConvertidoDolar", valorDolar);
  }
  
  function ConverterDeEuro() {
    var valorElemento = document.getElementById("valor");
    var valorEuro = parseFloat(valorElemento.value);
  
    var valorDolar = valorEuro * 1.18;
    var valorReal = valorEuro * 6.22;
  
    mostrar("valorConvertidoReal", valorReal);
    mostrar("valorConvertidoEuro", valorEuro);
    mostrar("valorConvertidoDolar", valorDolar);
  }
  