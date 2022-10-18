function incrementNumber() {
    let inputNumber = document.getElementById("txtNumber");
    let value = Number(inputNumber.value);
    inputNumber.value = (++value);
}

function decrementNumber() {
    let inputNumber = document.getElementById("txtNumber");
    let value = Number(inputNumber.value);
    inputNumber.value = (--value);
}

function resetNumber() {
    let inputNumber = document.getElementById("txtNumber");
    inputNumber.value = 0;
}

let btnIncrement = document.getElementById("btnIncrement");
btnIncrement.addEventListener("click", incrementNumber);

let btnDecrement = document.getElementById("btnDecrement");
btnDecrement.addEventListener("click",decrementNumber);

let btnReset = document.getElementById("btnReset");
btnReset.addEventListener("click", resetNumber);