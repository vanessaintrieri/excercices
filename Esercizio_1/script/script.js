document.querySelectorAll('#div p')
    .forEach(e => e.addEventListener("mouseover", function () {
        if (e.className == "odd") {
            e.style.color ="red";
        } 
    }));
    document.querySelectorAll('#div p')
    .forEach(e => e.addEventListener("mouseout", function () {
        e.style.color ="black";
    }));
