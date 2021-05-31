$(document).ready(function(){
    $("a").click(function(evento){
        alert("You now going to USAT page ¡Bye!")
    })
})

//Ocultar o Mostrar una caja(div)

$("#botoncito1").click(function(){
    $("#cajita1").toggle(1500);}, function(){
        $("#cajita1").toggle(1500);
    }
)