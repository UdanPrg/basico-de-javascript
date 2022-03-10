// Condicionales

var edad = 18;

if(edad === 18){
    console.log("Puedes votar, será tu 1ra votación");
}else if(edad > 18){
    console.log("Puedes votar de nuevo")
}else{
    console.log("Aún no puede votar")
}



// -- Operador Ternario
// condition ? true : false;

var numero = 1;
var resultado = numero === 1 ? "Sí soy un número" : "No, no soy un número";