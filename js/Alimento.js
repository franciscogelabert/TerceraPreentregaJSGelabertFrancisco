class Alimento {
    nombre;
    precio;
    cantidad;
    calorias;
    sodio;
    grasas;

    constructor(nombre, precio, cantidad, calorias, sodio, grasas) {

        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.calorias = calorias;
        this.sodio = sodio;
        this.grasas = grasas;
    }

    valido = function () {
        const valido = this.nombre != '' && this.precio != '' && this.cantidad != '' && this.calorias != '' && this.sodio != '' && this.grasas != '';
        return valido;
    }

}


