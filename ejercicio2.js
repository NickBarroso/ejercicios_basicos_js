//2.1. Actualizar la edad del hermano gemelo de la famosa princesa.
const jedi = {nombre: "Luke Skywalker", edad: 19};

jedi.edad = 25;

console.log("Luke Skywalker se ha metido en un agujero negro y ahora tiene "+ jedi.edad + " años.");

//2.2 Presentación al estilo Leia Organa.
const nombre = "Leia";
const apellido = "Organa";
let edad = 20;

console.log("Soy " + nombre + " "+  apellido + " tengo " + edad + " años y soy una princesa de Alderaan.");

//2.3 Calcula el coste total de dos sables de luz.
const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

let costeTotal = sable1.precio + sable2.precio;

console.log("El coste total de los dos sables es de " + costeTotal + " créditos.");

//2.4 Anctualizando el precio final de las naves:

let precioBaseGlobal = 10000;

// Actualización precio base
precioBaseGlobal = 25000

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

nave1.precioFinal = precioBaseGlobal + nave1.precioBase ;
nave2.precioFinal = precioBaseGlobal + nave2.precioBase;

console.log(nave1);
console.log(nave2);