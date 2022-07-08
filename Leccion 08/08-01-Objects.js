//Casi todo lo que se maneja en JS son objetos
//Agregar una funcion dentro de un objeto
let persona = {
    nombre: "Angel",
    apellido: ".this",
    email: "20203tn127@utez.edu.mx",
    edad: 15,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombreCompleto());

//MANERAS DE CREAE UN OBJETO =
// comun
let objeto = {
    propiedad1: "ola",
    prop2: "hola"
    
}
//Sintaxis explicita para reservar un espacio en memoria
let persona2 = new Object();
persona2.nombre = "carlos";
persona2.apellido = "tilinesio";

console.log(persona2)

//ACCEDER A PROPIEDADES DE OBJETOS
//Manera clasica
console.log(persona.nombre);
//Accediendo como si fuera un array, con ['propiedad']
console.log(persona["email"]);
//For in
//Recorrer las propiedades del objeto con un for in (solamente los nombres)
for(nombrePropiedad in persona){
    console.log(nombrePropiedad);
    //Valores de las propiedades acumuladas en el objeto nombrePropiedad
    console.log(persona[nombrePropiedad])
}

//AGREGAR Y ELIMINAR PROPIEDADES DE UN OBJETO
persona.tel = '7771626374';
console.log(persona)
 //eliminar atributo de un objeto
 delete persona.tel;
 console.log(persona)

//COMO IMPRIMIR UN OBJETO EN UN NAVEGADOR WEB
//Concatenando propiedad por propiedad
console.log(persona.nombre + ', ' + persona.apellido + ", etc ...")
//For in
for (namePropiedades in persona){
    console.log(persona[namePropiedades])
}
//Sintaxis de objeto
    //Metodo que retorna los valores del objeto como array
let personArray = Object.values(persona);
console.log(personArray)
                    //JSON.STRINGIFICADOR
let personaString = JSON.stringify(persona);
console.log(personaString)

