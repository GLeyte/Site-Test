function Calcular() {
  var a = parseFloat(document.getElementById("A").value) 
  var b = parseFloat(document.getElementById("B").value) 
  var c = parseFloat(document.getElementById("C").value) 
  var x1 = document.getElementById("X1")
  var x2 = document.getElementById("X2")

  var delta = Math.pow(b,2)-4*a*c
  var imag = (Math.sqrt(-delta)/(2*a)).toFixed(3)

  if(a==0){
    x1.innerHTML = -c/b
    x2.innerHTML = "Não existe"
  } else if (delta < 0){
    x1.innerHTML = (-b/(2*a)).toFixed(3) + "   " + imag + "i"
    x2.innerHTML = (-b/(2*a)).toFixed(3) + "   " + -imag + "i"
  } else {
    x1.innerHTML = ((-b+Math.sqrt(delta))/(2*a)).toFixed(3)
    x2.innerHTML = ((-b-Math.sqrt(delta))/(2*a)).toFixed(3)
  }
}