function Converter() {
    var tempCelsius = parseFloat(document.getElementById("temperatura").value);
  
    var pCelsius = window.document.getElementById("temp-celsius");
    pCelsius.innerText = tempCelsius + "ºC";
  
    // Conversão para ºF
    tempF = tempCelsius * 1.8 + 32;
    var pF = window.document.getElementById("temp-fahrenheit");
    pF.innerText = tempF + "ºF";
  
    // Conversão para K
    tempK = tempCelsius + 273.15;
    var pKelvin = window.document.getElementById("temp-kelvin");
    pKelvin.innerText = tempK + "K";
  }
  