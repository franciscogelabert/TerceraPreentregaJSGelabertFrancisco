
let recipe = [];
let nombreReceta = "";
let origen = "";
let mensaje = false;



actualizarPagina();

function actualizarPagina() {

    recipe = JSON.parse(localStorage.getItem('recipe'));
    nombreReceta = document.getElementById("nombreReceta");
    origen = document.getElementById("origen");

    nombreReceta.value = localStorage.getItem('nombreReceta');
    origen.value = localStorage.getItem('origen');

    if (recipe == null) {
        recipe = [];
    }
    else {
        cargarTablaIngredientes();
        calcularTotales();
    }
}

// Formulario de Carga de Ingredientes
const fingredientes = document.getElementById("fingredientes");

// Para agregar elementos a la Tabla de ingredientes. 
const botonAgregar = document.querySelector("#publicar");
botonAgregar.addEventListener("click", (e) => {
    e.preventDefault();
    cargarIngrediente();
    limpiarFormulario(fingredientes);
})

// Para eliminar elementos de la Tabla de ingredientes. 
const tablaIngredientes = document.getElementById("tablaAlimentos");
tablaIngredientes.addEventListener("click", eliminarIngrediente);

// Para calcular totales. 
const btnTotales = document.getElementById("btnTotales");
btnTotales.addEventListener("click", calcularTotales);

// Para confeccionar un nuevo reporte. 
const recarga = document.getElementById("recarga");
recarga.addEventListener("click", nuevoReporte);

function limpiarFormulario(formulario) {
    formulario.reset();
};

function cargarIngrediente() {
    nombreReceta = document.getElementById("nombreReceta").value;
    origen = document.getElementById("origen").value;
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

    if (alimento1.valido() && nombreReceta !='' && origen !='') {
        recipe.push(alimento1);
        localStorage.setItem('nombreReceta', nombreReceta);
        localStorage.setItem('origen', origen);
        localStorage.setItem('recipe', JSON.stringify(recipe));
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
        if (mensaje) {
            document.getElementById("h3ing").firstElementChild.remove();
            mensaje = false;
        }
    } else {
        if (!mensaje) {
            const agregado = document.createElement("p");
            const fila = `** Para continuar debe completar todos los datos de la Receta **`;
            agregado.innerHTML = fila;
            document.getElementById("h3ing").append(agregado);
            mensaje = true;
        }
    }
}


// redibuja la tabla de ingredientes y totales con la info que se encuentra en el Local Storage
function cargarTablaIngredientes() {

    const tablaIngredientes = document.getElementById("tablaAlimentos");
    let eliminar = `<svg xmlns="http://www.w3.org/2000/svg" class="accionEliminar icon icon-tabler icon-tabler-trash smallimagebox colorDelete" 
     stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M4 7l16 0"></path>
        <path d="M10 11l0 6"></path>
        <path d="M14 11l0 6"></path>
        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
    </svg>`;
    tablaIngredientes.innerHTML = ``;
    recipe.forEach((item, index) => {
        const fila = `<tr>
    <td>${item.nombre}</td>
    <td>${item.precio}</td>
    <td>${item.cantidad}</td>
    <td>${item.calorias}</td>
    <td>${item.sodio}</td>
    <td>${item.grasas}</td>
    <td>${eliminar}</td>
    </tr>`;
        const btn = document.createElement("TR");
        btn.innerHTML = fila;
        tablaIngredientes.appendChild(btn);
    })
}

function eliminarIngrediente(elemento) {
    if (elemento.target.matches(".accionEliminar")) {
        const indice = elemento.target.parentNode.parentNode.rowIndex;
        tablaIngredientes.deleteRow(indice - 1);
        recipe.splice(indice - 1, 1);
    }
    localStorage.setItem('recipe', JSON.stringify(recipe));
}

function calcularTotales() {
    const receta1 = new Receta(nombreReceta, recipe, origen);
    dibujaTablaTotales(receta1.mostrar());
    }

function dibujaTablaTotales(cantidades) {
    document.getElementById("totalesHead").innerHTML = "";
    document.getElementById("totalesValores").innerHTML = "";

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

function nuevoReporte() {
    window.location.href = window.location.href;
    localStorage.clear();

}