const btn = document.querySelector(".boton-cargar");
const btn2 = document.querySelector(".boton-tema");
const body = document.querySelector("body");

btn.addEventListener("click", cargarProyectos);
btn2.addEventListener("click", cambiarEstilo);

function cargarProyectos() {

fetch("js/datos.json")
.then(res => res.json())
.then(proyectos => {

for(proyecto of proyectos) {

document.querySelector("section").innerHTML +=
`<div><h2>${proyecto.titulo}</h2>
<p>${proyecto.descripcion}</p>
<p>${proyecto.detalles}</p></div>`

}

})

}

function cambiarEstilo() {

body.classList.toggle("dark");

}
