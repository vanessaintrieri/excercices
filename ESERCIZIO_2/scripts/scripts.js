// function range(start, end) {
//     let array = [];
//     for(let i = 0; i <= (end - start); i++) {
//         array[i] = (start + i);
//     }
//     return array;
// }

function range(start, end, step = 1) {
    let array = [];
    for(let i = start; i <= (end); i+=step) {
        if(i != end && i+step > end) {
            array.push(i);
            array.push(end);
        }
        else {
            array.push(i);
        }
    }
    return array;
}

function sum(numArray) {
    let sum = 0;
    for(let num of numArray) {
        sum += num;
    }
    return sum;
}

console.log(range(5,10,3));
console.log(sum(range(5,10,3)));

