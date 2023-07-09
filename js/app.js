
let recipe = [];

const tablaIngredientes = document.getElementById("tablaAlimentos");
tablaIngredientes.addEventListener("click", verificaAccion);

// al presionar cargar crear alimento 

function cargarIngrediente() {
    let nombre = document.getElementById("ingrediente").value;
    let precio = document.getElementById("precio").value;
    let cantidad = document.getElementById("cantidad").value;
    let calorias = document.getElementById("calorias").value;
    let sodio = document.getElementById("sodio").value;
    let grasas = document.getElementById("grasas").value;
    let eliminar = `<svg xmlns="http://www.w3.org/2000/svg" class="accionEliminar icon icon-tabler icon-tabler-trash smallimagebox colorDelete" 
     stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M4 7l16 0"></path>
        <path d="M10 11l0 6"></path>
        <path d="M14 11l0 6"></path>
        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
    </svg>`;

    const alimento1 = new Alimento(nombre, precio, cantidad, calorias, sodio, grasas);
    recipe.push(alimento1);
    const fila = `<tr>
    <td>${alimento1.nombre}</td>
    <td>${alimento1.precio}</td>
    <td>${alimento1.cantidad}</td>
    <td>${alimento1.calorias}</td>
    <td>${alimento1.sodio}</td>
    <td>${alimento1.grasas}</td>
    <td>${eliminar}</td>
    </tr>`;
    const btn = document.createElement("TR");
    btn.innerHTML = fila;
    document.getElementById("tablaAlimentos").appendChild(btn);
}


function verificaAccion(elemento) {
    if (elemento.target.matches(".accionEliminar")) {
        const indice = elemento.target.parentNode.parentNode.rowIndex;
        tablaIngredientes.deleteRow(indice - 1);
        recipe.splice(indice-1,1);
        //console.log(recipe.length);
        //console.log(recipe);
        }

}

// agregarlo en la lista de receta 
// crear el JSON
// persistirlo el el locar storage
// dibujar la tabla  


function calcularTotales() {
    let nombreReceta = document.getElementById("nombreReceta").value;
    let origenReceta = document.getElementById("origen").value;
    const receta1 = new Receta(nombreReceta, recipe, origenReceta);
    dibujaTablaTotales(receta1.mostrar());
    //deshabilitar("btnTotales");
    //deshabilitar("publicar");
   
}


function deshabilitarClase(nombreClase)
{
    const lista=[];
    lista=document.getElementsByClassName(nombreClase);
    console.log(document.getElementsByClassName(nombreClase));
    lista.forEach(element => element.disable=true);
}


function dibujaTablaTotales(cantidades) {

    document.getElementById("totalesHead").innerHTML="";
    document.getElementById("totalesValores").innerHTML="";
    
    var titulo = "<tr><th>Cantidad Total</th><th>Total</th></tr>";
    var btnT = document.createElement("TR");
    btnT.innerHTML = titulo;
    document.getElementById("totalesHead").appendChild(btnT);
   

    for (let i = 0; i < cantidades.length; i++) {
        var fila = "<tr><td>" + cantidades[i].descripcion + "</td><td>" + cantidades[i].cantidad + "</td><td>";
        var btn = document.createElement("TR");
        btn.innerHTML = fila;
        document.getElementById("totalesValores").appendChild(btn);
    }
    
}

function deshabilitar(nombreBtn) {
    const myButton = document.getElementById(nombreBtn);
    myButton.disabled = true;
    myButton.style.opacity = 0.7;

}

function habilitar(nombreBtn) {
    const myButton = document.getElementById(nombreBtn);
    myButton.disabled = false;
    myButton.style.opacity = 1;

}

function nuevoReporte() {
    window.location.href = window.location.href;
}