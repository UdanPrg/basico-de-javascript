// * 'this.' se usa para referenciar al mismo objeto y acceder a ese dato
var miAuto = {
    marca: "Toyota",
    modelo: "Corola",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
}

// Llamar un dato
miAuto.marca // "Toyota"

// Llamar un método: un metodo es una función de un objeto
miAuto.detalleDelAuto(); // Auto Corolla 2020