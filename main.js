//el juego selecciona  un numero al azar para que adivines
let numeroAzar= Math.floor(Math.random()*100)+1

let numeroEntrada = document.getElementById("numeroEntrada")
let mensaje = document.getElementById("mensaje")
let intento = document.getElementById("intento")
let intentos = 0

//esta accion se  va a ejecutar cuando se toque el boton chequear 

function chequearResultado (){

    intentos++

    intento.textContent = intentos

    let numeroIngresado = parseInt(numeroEntrada.value)

    if (numeroIngresado === 0 || numeroIngresado > 100 || isNaN(numeroIngresado)){
       mensaje.textContent = "Por favor, ingrese un numero valido entre 1 y 100"
       mensaje.style.color = "red";
       return
    }
    
    if(numeroIngresado === numeroAzar){
        mensaje.textContent= "Felicitaciones ¡ Has adivinado el numero !"
        mensaje.style.color="Green"
    } else if (numeroIngresado < numeroAzar){
        mensaje.textContent= "El numero es más alto"
        mensaje.style.color="Blue"
    } else {
        mensaje.textContent= "El numero es más bajo"
        mensaje.style.color="Pink"
    }
}