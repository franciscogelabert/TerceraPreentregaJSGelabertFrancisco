class Receta {
    nombre;
    origen;
    calorias;
    sodio;
    grasas;
    precio;


    constructor(nombre, ingredientes, origen) {
        this.nombre = nombre;
        this.origen = origen;
        this.calorias = 0;
        this.sodio = 0;
        this.grasas = 0;
        this.precio = 0;

        let iCantidad, iCalorias, iSodio, iGrasas, iPrecio;

        let r = []
        r = ingredientes;

        for (let i = 0; i < r.length; i++) {
            iCantidad = parseInt(r[i].cantidad);
            iCalorias = parseInt(r[i].calorias);
            iSodio = parseInt(r[i].sodio);
            iGrasas = parseInt(r[i].grasas);
            iPrecio = parseInt(r[i].precio);

            this.calorias = this.calorias + iCantidad / 100 * iCalorias;
            this.sodio = this.sodio + iCantidad / 100 * iSodio;
            this.grasas = this.grasas + iCantidad / 100 * iGrasas;
            this.precio = this.precio + iCantidad / 100 * iPrecio;
       }

    }


    mostrar = function () {

        // la función Math.round()retorna el valor de un número redondeado al entero más cercano.
        let cantidades = [
            {
                descripcion: 'Precio',
                cantidad: Math.round(this.precio)
            },
            {
                descripcion: 'Calorías',
                cantidad: Math.round(this.calorias)
            },
            {
                descripcion: 'Sodio',
                cantidad: Math.round(this.sodio)
            },

            {
                descripcion: 'Grasas',
                cantidad: Math.round(this.grasas)
            },
        ]
        return cantidades;
    }
}
