class Receta {
    nombre;
    origen;
    calorias;
    sodio;
    grasas;
    precio;
    cantidad;


    constructor(nombre, ingredientes, origen) {
        this.nombre = nombre;
        this.origen = origen;
        this.calorias = 0;
        this.sodio = 0;
        this.grasas = 0;
        this.precio = 0;
        this.cantidad = 0;

        let r = []
        r = ingredientes;

        for (let i = 0; i < r.length; i++) {
        
            // Prueba de Desestructuracion y Alias
            let {cantidad, calorias, sodio, grasas, precio} = r[i];
        
            this.calorias = this.calorias + cantidad / 100 * calorias;
            this.sodio = this.sodio + cantidad / 100 * sodio;
            this.grasas = this.grasas + cantidad / 100 * grasas;
            this.precio = this.precio + cantidad / 100 * precio;
            this.cantidad = this.cantidad + cantidad;
       }

    }


    mostrar = function () {

        // la función Math.round()retorna el valor de un número redondeado al entero más cercano.
        let cantidades = [
            {
                descripcion: 'Cantidad',
                cantidad: Math.round(this.cantidad)
            },
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

    valido = function () {
        const valido = this.nombre !='' && this.origen !='';
        return valido;
    }


}
