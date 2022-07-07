//Casi todo lo que se maneja en JS son objetos
const persona = {
    nombre: "Agel",
    apellido: "Diaz",
    email: "20203tn127@utez.edu.mx",
    edad: 15,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombreCompleto())

