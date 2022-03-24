// Array
[]

var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];

// Acceder al array
console.log(frutas); // ["Manzana", "Plátano", "Cereza", "Fresa"]

// Longitud del array
console.log(frutas.length); // 4

// Acceder a un elemento específico
console.log(frutas[0]); // Manzana


//! -- Métodos para MUTAR/ALTERAR/modificar Arrays 

// Agregar Elemento
var masFrutas = frutas.push("Uvas"); // frutas -> ["Manzana", "Plátano", "Cereza", "Fresa", "Uvas"]

// Sustraer Elemento
var ultimo = frutas.pop("Uvas"); // frutas -> ["Manzana", "Plátano", "Cereza", "Fresa"]

// Agregar Elemento al Inicio del Array
var nuevaLongitud = frutas.unshift("Uvas"); // frutas -> ["Uvas", "Manzana", "Plátano", "Cereza", "Fresa"]

// Sustraer Elemento al Inicio del Array
var borrarFruta = frutas.shift("Uvas"); // frutas -> ["Manzana", "Plátano", "Cereza", "Fresa"]

// Conocer el index de un Elemento                         0          1         2         3                               es
var posicion = frutas.indexOf("Cereza"); // frutas -> ["Manzana", "Plátano", "Cereza", "Fresa"] || --> posicion("Cereza") -> 2