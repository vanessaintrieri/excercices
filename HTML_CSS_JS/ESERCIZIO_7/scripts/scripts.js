"use strict";

function fromJsonToObject(object) {
    JSON.stringify(object)
   
}
console.log(fromJsonToObject({
    nome: ' Classe A 2021 A180', marca: 'Mercedes-Benz', caratteristiche: {
    trazione: 'posteriore',
    cilindrata: 1950 },
    accessori: ["displayLCD", "sedile_riscaldato"],
    venduta: true }));