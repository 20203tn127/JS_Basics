// Una funcion es un codigo reutilizable

//Ejemplo de hoisting
miFuncion(10,10)
//Declaracion de una funcion
function miFuncion(a,b){
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



