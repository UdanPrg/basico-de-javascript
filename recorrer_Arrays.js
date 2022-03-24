//* Iniciar Array de Objetos
var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
    {nombre: "Laptop", costo: 18000}
];


//! -- Métodos de recorrido de arrays o de CONSULTA

//? Método FILTER: CREA UN NUEVO ARRAY(en este caso llamado 'articulosFiltrados'), que contendrá los
//? objetos que cumplan la condición que le demos, es te caso "artículos menores o iguales a un costo de 500"
//?-- Crea un nuevo array con los elementos del array que se pasó como parámetro y que cumplan con la condición definida.

var articulosFiltrados = articulos.filter(function(articulo){
    // se filtrarán artículos menores o iguales a un costo de 500
    return articulo.costo <= 500
});

articulosFiltrados; // * resultado ->
// [
//     {
//         "nombre": "Libro",
//         "costo": 320
//     },
//     {
//         "nombre": "Teclado",
//         "costo": 500
//     }
// ]

//? Método MAP: CREA UN NUEVO ARRAY(en este caso llamado 'nombreArticulos'), que contendrá // Crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

// en este caso, solamente los nombre dada la orden dada. NINGÚN OBJETOS!!!

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});

nombreArticulos; // * resultado ->
// [
//     "Bici",
//     "Tv",
//     "Libro",
//     "Celular",
//     "Laptop",
//     "Teclado",
//     "Audifonos"
// ]


//? Método FIND: CREA UN NUEVO ARRAY(o más bien solo genera un nuevo objeto) // Retorna el primer elemento de un array que cumple con una condición definida en un nuevo array.

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
});

encuentraArticulo; // * resultado ->
// {
//     "nombre": "Laptop",
//     "costo": 20000
// }


//? Método FOREACH: Retorna la información al haber recorrido el array sin generar nuevo array o objeto

articulos.forEach(function(articulo){
    console.log(articulo.nombre)
});

// * resultado ->
// Bici
// Tv
// Libro
// Celular
// Laptop
// Teclado
// Audifonos


//? Método SOME: 

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

articulosBaratos // * resultado ->
// true