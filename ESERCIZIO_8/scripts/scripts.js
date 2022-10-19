

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
            bodyContainer.setAttribute("class", "square-200 bg-primary")
            break;
        case 2:
            bodyContainer.setAttribute("class", "square-200 bg-success")
            break;
        case 3:
            bodyContainer.setAttribute("class", "square-200 bg-warning")
            break;
        case 4:
            bodyContainer.setAttribute("class", "square-200 bg-danger")
            break;
       
    }
    document.querySelectorAll('#bodyContainer')
    .forEach(e => e.addEventListener("mouseover", function (applyRandomBg) {
        
    }));
    document.querySelectorAll('#bodyContainer')
    .forEach(e => e.addEventListener("mouseout", function (applyRandomBg) {
       
    }));


}

