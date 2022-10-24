"use strict";

function spaceChars(str) {
    let spacedString = "";
    for(let char of str.replaceAll(" ", "")) {
        spacedString += (char + " ");
    }
    return spacedString;
}

let normalString = "ciao sono pippo. dove è pluto ?";

console.log(normalString);
console.log(spaceChars(normalString));