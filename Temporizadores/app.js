let mostrarFecha = document.getElementById("date");
let mostrarHora = document.getElementById("reloj");

let fecha = new Date();
let diaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

let mesAnio = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

mostrarFecha.innerHTML = `${diaSemana[fecha.getDay()] }, ${fecha.getDay()} de ${mesAnio[fecha.getMonth()]} de ${fecha.getFullYear()}`;


setInterval(()=>{
    let hora = new Date();
    mostrarHora.innerHTML = hora.toLocaleTimeString();
}, 1000);

