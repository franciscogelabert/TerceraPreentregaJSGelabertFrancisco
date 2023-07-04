class Trago {
    nombre;
    origen;
    calorias;
    sodio;
    alcohol;
    precio;
    
constructor (nombre,ingredientes,origen) {
            this.nombre=nombre;
            this.origen=origen;
            this.calorias = 0;
            this.sodio = 0;
            this.alcohol = 0; 
            this.precio=0;

            let iCantidad, iCalorias, iSodio, iAlcohol, iPrecio;
            let r=[]
            r=ingredientes;
            
    for (let i = 0; i < r.length; i++) {
        iCantidad = parseInt(r[i].cantidad);
        iCalorias = parseInt(r[i].calorias);
        iSodio = parseInt(r[i].sodio);
        iAlcohol = parseInt(r[i].alcohol);
        iPrecio = parseInt(r[i].precio);

        this.calorias = this.calorias + iCantidad / 100 * iCalorias;
        this.sodio =this.sodio + iCantidad / 100 * iSodio;
        this.alcohol = this.alcohol + iAlcohol;
        this.precio =this.precio + iPrecio;
    }
    this.alcohol = this.alcohol /r.length;
}

mostrar = function () {
    
// la función Math.round()retorna el valor de un número redondeado al entero más cercano.
    let cantidades = [{
        descripcion: 'Calorías',
        cantidad: Math.round(this.calorias)
    },
    {
        descripcion: 'Sodio',
        cantidad: Math.round(this.sodio)
    },
    {
        descripcion: 'Precio',
        cantidad: Math.round(this.precio)
    },
    {
        descripcion: 'Promedio % de Alcohol',
        cantidad: Math.round(this.alcohol)
    },
    ]
    return cantidades;
    }
}
