function dod() {
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  c = a + b;
  document.getElementById("wynik").innerText = "Wynik : " + c;
}
function odj() {
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  c = a - b;
  document.getElementById("wynik").innerText = "Wynik : " + c;
}
function mnż() {
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  c = a * b;
  document.getElementById("wynik").innerText = "Wynik : " + c;
}
function dzl() {
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  c = a / b;
  document.getElementById("wynik").innerText = "Wynik : " + c;
}
function pot() {
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  c = Math.pow(a, b);
  document.getElementById("wynik").innerText = "Wynik: " + c;
}
