//Seleccionar los elementos del DOM

const bottom = document.querySelector("button");
const color = document.getElementById("color");

function colorAleatorio(){
    let digitos = "0123456789ABCDEF";
    let colorH = "#";

    for(let i = 0; i< 6; i++ ){
        let indexAleatorio = Math.random() * 16;
        let indexInteger = Math.floor(indexAleatorio);
        colorH += digitos[indexInteger];

    }

    return colorH;

}

bottom.addEventListener("click", function(){
    let aleatorio = colorAleatorio(); 
    //ACTUALIZAR TEXTO
    color.textContent = aleatorio;
    //ACTUALIZAR COLOR DE FONDO
    document.body.style.backgroundColor = aleatorio;
})