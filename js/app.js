


// al presionar cargar crear alimento 
function cargarIngrediente() {
    let receta = [];
    let item = 0;
    let nombre = document.getElementById("ingrediente").value;
    let precio = document.getElementById("precio").value;
    let cantidad = document.getElementById("cantidad").value;
    let calorias = document.getElementById("calorias").value;
    let sodio = document.getElementById("sodio").value;
    let grasas = document.getElementById("grasas").value;
    item = item + 1;
    const alimento1 = new Alimento(nombre, precio, cantidad, calorias, sodio, grasas);
    receta.push(alimento1);
    console.log(alimento1);

    //actualizarTabla();
    console.table(receta);
}

function actualizarTabla() {

    let eliminar = `<a href="404.html" Title="Eliminar">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash smallimagebox colorDelete"
     stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M4 7l16 0"></path>
        <path d="M10 11l0 6"></path>
        <path d="M14 11l0 6"></path>
        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
    </svg> </a>`;
    receta.forEach(function (alimento) {
        var fila = `<tr id= ${item}>
    <td>${item}</td>
    <td>${alimento.nombre}</td>
    <td>${alimento.precio}</td>
    <td>${alimento.cantidad}</td>
    <td>${alimento.calorias}</td>
    <td>${alimento.sodio}</td>
    <td>${alimento.grasas}</td>
    <td>${eliminar}</td>
    </tr>`;
        var btn = document.createElement("TR");
        btn.innerHTML = fila;
        document.getElementById("tablaAlimentos").appendChild(btn)
    })

}

// agregarlo en la lista de receta 
// crear el JSON
// persistirlo el el locar storage
// dibujar la tabla  

function reporteAlimenticio() {
    if (receta.length > 0) {
        const receta1 = new Receta(nombreReceta, rfitrada, origenReceta);
        console.table(receta1.mostrar());

    }

}