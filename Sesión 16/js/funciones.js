function compara() {
    var a = 2;
    var b = 5;

    if(a==b)
    alert("SON INGUALES, REACIONAAAA");
    else
    alert("SÍ SON DIFERENTES");
}

function resta(x,y) {
    var rest = x - y;
    document.write("<h2> La resta es " + rest + "</h2>");
}

function suma(x,y) {
    var sum = x + y;
    document.getElementById("sumar").innerHTML = "la suma es " + sum;
}