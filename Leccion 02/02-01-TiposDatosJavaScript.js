//Tipos de datos en JS

//Tipo de dato String
var nombre = "Angel";
console.log(nombre);


//Tipo de dato numerico
var numero = 1000;
console.log(numero);

//Tipo de dato objeto
var objeto = {
    nombre: "HyperX",
    modelo: "Alloy Fps Pro",
    precio: "1800"
}
console.log(typeof objeto);

//Tipo de dato boolean (true,false)
var bandera = true;
console.log(bandera);
console.log(typeof bandera);

//Tipo de dato function
function miFuncion(){

}
console.log(typeof miFuncion)

//Tipo de dato Symbol
var simbolo = Symbol("Mi simbolo");
console.log(simbolo)

//Tipo clase es una function
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona)

//Tipo undefined
var x;
console.log(x)

//null(tipo OBJETO) = ausencia de valor
var y = null;
console.log(y);
