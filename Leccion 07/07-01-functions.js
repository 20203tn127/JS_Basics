// Una funcion es un codigo reutilizable

//Ejemplo de hoisting
miFuncion(10,10)
//Declaracion de una funcion
function miFuncion(a,b){
    console.log(arguments.length)
    console.log("Suma " + (a+b));
}

//llamado a funcion
miFuncion(5,7)

//uso de Return
function funcioncita(a,b){
    return a+b; //Se retorna el valor de la suma de a y b
}

let resultado = funcioncita(2,3);
console.log(resultado); //Se imprime el valor del return

//Funciones tipo anonimas o tipo expresion
//Declaracion de funcion anonima
let suma = function(a,b){return (a + b)};
resultado = suma(1,2);
console.log(resultado);

//funciones de tipo self - invoking
//se define entre parentesis
//Solamente se ejecuta una vez, ya no puede ser llamada
(function(a,b){
    console.log("Ejecutando una funcion self invoke: " + a + b)
}) (5,7);

//Funciones como objetos
//Las funciones a su vez se pueden describir como objetos
//Tienen propiedades y metodos
let miFuncionText = miFuncion.toString();
console.log(miFuncionText)

//Arrow functions ()=>
//Se introdujo en ECMAS6
//Declaracion:
//constante nombre         argumentos - cuerpo de la funcion
const sumarArrowFunction = (a, b)     =>    a+b;
console.log(sumarArrowFunction(3,5));

