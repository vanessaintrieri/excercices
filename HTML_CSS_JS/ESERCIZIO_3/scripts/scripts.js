function reverseArray(array) {
    let newArray = [];
    for(let i = (array.length -1); i >= 0; i--) {
        newArray.push(array[i]);
    }

    return newArray;
}

Array.prototype.reverseArrayInPlace = function() {
    let newArray = [];
    
    this.forEach(item => {
        newArray.push(item);
    })
    this.splice(0,this.length);

    for(let i = (newArray.length -1); i >= 0; i--) {
        this.push(newArray[i]);
    }

}

let array = ["pippo", true, 1, 2.3, false, "mario"];

console.log(array);
array.reverseArrayInPlace();
console.log(array);