//ARGUMENTOS Y PARAMETROS DE FUNCIONES
//Los parametros son las variables que recibira una funcion
//Los argumentos son los valores reales, digamos en crudo, ya sean numeros o string


//Paso por valor (Functions)
//Cuando utilizamos tipos que no son objetos
//Como numeros, boolean, etc
//Valor de tipo primitivo
//No tienen ni atriubutos ni metodos asociados, por eso son primitivos
let x = 10;

function cambiarValor(a){
    a = 20;
    console.log(a)
}

cambiarValor(x);//10
console.log(x)

//Paso por referencia
// ref PERSONA hexadecimal 0x333
const persona = {
    nombre: "Agel",
    apellido: "Peres"
}
                    //Referencia hex 0x333
const cambiarValorObjeto = (p1)=>{
    p1.nombre = "Diego";
    p1.apellido = "tilin";
};
//Paso por referencia
cambiarValorObjeto(persona);
console.log(persona)

