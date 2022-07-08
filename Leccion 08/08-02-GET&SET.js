let persona = {
    nombre: "Angel",
    apellido: "Days",
    email: "20203tn127@utez.edu.mx",
    edad: 15,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set modifyLang(lang){
      this.idioma = lang.toUpperCase();
    },
//Se agrega GET para retornar valores de un objeto
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

//METODO GET of Object
console.log(persona.nombreCompleto);
console.log(persona.lang);
//METODO SET of Object
persona.modifyLang = "english";
console.log(persona.lang);
console.log(persona.idioma);


