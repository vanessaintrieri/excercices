"use strict";

let counter = 0;
let btnConfirm = document.getElementById("btnConfirm");

btnConfirm.addEventListener("click", () => {
    let txtNumber = document.getElementById("txtNumber");
    let num = Number(txtNumber.value);
    
    let counterContainer = document.getElementById("counterContainer");
    if(num <= 0) {
        counterContainer.innerText = "Numero inserito non valido";
    }

    counter = num;
    //Originale
    counterContainer.innerText = counter;
    setInterval(() => {
        if(counter > 0){
            counterContainer.innerText = --counter;
        }
        else {
            counterContainer.innerText = "Conto alla rovescia terminato";
            return;
        }
    }, 1000)

    //Alternativa
    // countDown(counter, counterContainer);
})

//Alternativa
// function countDown(count, element) {
//     element.innerText = count;
//     setTimeout(() => {
//         if(count > 0){
//             countDown(--count, element);
//         }
//         else {
//             element.innerText = "Conto alla rovescia terminato";
//         }
//     },1000);
// }