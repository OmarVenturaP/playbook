// Parte 1

let myCar = new Object(); //Creación un objeto
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;

console.log(myCar);

// Parte 2 - Declarar variables locales y publicas

const myModule = (() => {

    //Contexto Local
    const privateFoo = "Soy un valor privado, solo me usan dentro de este objeto";
    const privateBar = [1,2,3,4];
    const baz = "soy un valor que va a ser expuesto";

    // Guardando vairables locales
    const exported ={
        publicFoo: "Valor publico, me pueden ver desde donde me llamen",
        publicBar: "Otro valor publico",
            publicBaz: baz
    }
    return exported;
    })();

    console.log(myModule);