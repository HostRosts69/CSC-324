//Chapter 5

/// Flattening

//note: reduce auto recurses
let arrays = [[1, 2, 3], [4, 5], [6], [8, 9, 10], [11]];
function flatten(array = [[1, 2, 3], [4, 5], [6]]){
    return arrays.reduce((a,b) => a.concat(b));
}

console.log(flatten(arrays));
// → [1, 2, 3, 4, 5, 6]


console.log(flatten());

/// Write Your Own Loop Function

// notes:
    // Value, test, body, update: argument values needed
    // first test
        // second update function
        // do it all over again until test == true
function loop(value, test, body ,update){
    if(test(value) == false){
        return ;
    } else{
        update(value);
        value = body(value);
        return (loop(value, test, body, update));
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

/// Everything
function every(array, test) {
    for (let elem of array){
        if (test(elem) != true){
            return false;
        }
    } 
    return true;
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true


function every_log(array, test) {
    for (let elem of array){
        if (test(elem) != true){
            console.log(`The element in "${array}" that failed the test is ${elem}. \n The function used to equate this array is "${test}"`)
            return false;
        }
    } 
    return true;
}




console.log(every_log([1, 3, 5], n => n < 10));
// → true
console.log(every_log([2, 4, 16], n => n < 10));
// → false
console.log(every_log([], n => n < 10));
// → true


