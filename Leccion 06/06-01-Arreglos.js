//Es un Tipo objeto que almacena muchos valores
// let autos = new Array('BMW','Audi','Nissan'); Manera antigua
const autos = ['BMW','Audi','Nissan'];
console.log(autos);


console.log(autos[0]);

for(let i = 0; i<autos.length; i++){
    console.log(autos[i])
}


autos[1] = "Audi S3";
console.log(autos[1])

autos.push('Mercedez Benz'); //Agrega un elemento al final del array
console.log(autos)


console.log(Array.isArray(autos))


const persona = {
    nombre: "Tilin",
    apellido: "eso tilin",
    numero: '77756273645'
}


