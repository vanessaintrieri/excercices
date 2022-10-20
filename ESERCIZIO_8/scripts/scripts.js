"use strict"

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function applyRandomBg() {
    let randomNum = getRandomInt(1,5);

    let bodyContainer = document.getElementById("bodyContainer")
    if (bodyContainer.hasAttribute("class")) {
        bodyContainer.removeAttribute("class");
    }
    
    switch (randomNum) {
        case 1:
            bodyContainer.setAttribute("class", "bg-primary")
            break;
        case 2:
            bodyContainer.setAttribute("class", "bg-success")
            break;
        case 3:
            bodyContainer.setAttribute("class", "bg-warning")
            break;
        case 4:
            bodyContainer.setAttribute("class", "bg-danger")
            break;
       
    }
}

window.addEventListener("load", () => {
        setInterval(applyRandomBg, 5000);
})