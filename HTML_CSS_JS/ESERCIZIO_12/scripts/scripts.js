"use strict";

function doubleElements(array) {
    if(!Array.isArray(array)) {
        throw Error("Il parametro non è un array");
    }
    array.forEach(num => {
        if(!Number.isFinite(num)){
            throw Error("L'array contiene valori diversi da numeri");
        }
    })

    let doubleArray = [];
    for (let num of array) {
        doubleArray.push(num * 2);
    }
    return doubleArray;
}

let numbers = [2, 3, 6, 7.5, 11, 12, 3.333333];

console.log(numbers);
console.log(doubleElements(numbers));