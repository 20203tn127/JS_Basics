//CONSTRUCTOR DE OBJETOS
//LLamada de un constructor de objeto
function Persona(nombre,apellido,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    //AGREGAR METODOS A UN METODO CONSTRUCTOR
    this.printEmail = ()=>{
        return this.email;
    }
    this.printFullName = ()=>{
        return this.nombre + " " + this.apellido;
    };

}

let padre = new Persona('agel','Days','tilin@gmail.com');
console.log(padre);

let madre = new Persona('Tedesita','Salgado','sastre06@gmail.com');
console.log(madre);

padre.nombre = "Angelinho";
console.log(padre)

//AGREGAR METODOS A UN METODO CONSTRUCTOR
console.log(padre.printEmail());
console.log(madre.printEmail())
console.log(madre.printFullName())
console.log(padre.printFullName())

//FORMAS DE CONSTRUIR UN OBJETO EN JS
//Sintaxis vieja
let miObjeto = new Object();
//Sintaxis nueva, sin el uso de 'new';
let miObjeto2 = {};
//Crear una cadena de manera formal
let miCadena1 = new String();
//Sintaxis simplificada
let miCadena2 = 'Tilin';
//Aplica para todos los tipos de datos...







