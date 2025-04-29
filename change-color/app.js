const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

const textRojo = document.getElementById("red-text");
const textVerde = document.getElementById("green-text");
const textAzul = document.getElementById("blue-text")

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

textRojo.innerText = rojo;
textVerde.innerText = verde;
textAzul.innerText = azul;


function actualizarColor(rojo, verde, azul){
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor = colorRGB; 
}

//Para Actulizar el color rojo (R)

inputRojo.addEventListener('change', (e) => {
    rojo = e.target.value;
    textRojo.innerText = rojo;
    actualizarColor(rojo, verde, azul);
})

inputVerde.addEventListener('change', (e) => {
    verde = e.target.value;
    textVerde.innerText = verde;
    actualizarColor(rojo, verde, azul);
})

inputAzul.addEventListener('change', (e) => {
    azul = e.target.value;
    textAzul.innerText = azul;
    actualizarColor(rojo, verde, azul);
})