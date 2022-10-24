"use strict";

function returnCommons(array1, array2) {
    if(!Array.isArray(array1) || !Array.isArray(array2)) {
        throw Error("Uno o più parametri non sono array");
    }

    
    if(array1.length <= array2.length) {
        return findCommon(array1,array2);
    }
    else {
        return findCommon(array2, array1);
    }

}

function findCommon(array1, array2) {
    let commonArray = [];
    for(let elem of array1){
        if(array2.includes(elem) && !commonArray.includes(elem)) {
            commonArray.push(elem);
        }
    } 
    return commonArray;
}


let firstArray = ["pippo","pippo", true, 234, 4.54, false];
let secondArray = ["mario", "pippo", 123, 4.54, true, 200, 300];

console.log(firstArray);
console.log(secondArray);
console.log(returnCommons(firstArray, secondArray));
