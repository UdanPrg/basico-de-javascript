// * Lo que pasa con esta función es que les estoy diciendo que construya un objeto, que los datos de mi objeto 
// * diciendole(con this.parametro) serán iguales al dato que me pasen en el parametro dado en mi función.
function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}


// * Y la siguiente instancia utiliza la palabra 'new' y el nombre de mi función construcctora pasandole los datos
// * para crear un nuevo objeto
var autoNuevo = new auto("Tesla", "Model 3", 2020);
autoNuevo; // {marca: "Tesla", modelo: "Model 3", annio: 2020}

var autoNuevo2 = new auto("Tesla", "Model X", 2018);
var autoNuevo3 = new auto("Toyota", "Corolla", 2020);
autoNuevo2; // {marca: "Tesla", modelo: "Model X", annio: 2018}
autoNuevo3; // {marca: "Toyota", modelo: "Corolla", annio: 2020}