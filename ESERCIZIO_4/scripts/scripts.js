"use strict";

let btnConfirm = document.getElementById("btnConfirm");

btnConfirm.addEventListener("click", () => {
    let list = document.getElementById("listContainer");
    let txtInput = document.getElementById("txtInput");

    if (txtInput.value.trim() != "") {
        let listItem = document.createElement("li");
        listItem.innerText = txtInput.value;

        list.appendChild(listItem);
        txtInput.value = "";
    }

})