function sumatoria() {  
    var x,y,suma,resultado;  
    x = document.getElementById("num1").value;  
    y = document.getElementById("num2").value;   
      suma=parseFloat(x)+parseFloat(y);  
      resultado = suma;
    document.getElementById("sumando").innerHTML = resultado;  
  }  

  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num1").value;

  Let resultado = parseInt(num1) + parseInt(num2);
  console.log(resultado);