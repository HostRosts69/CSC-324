//Chapter 5

/// Flattening

let arrays = [[1, 2, 3], [4, 5], [6], [8, 9, 10], [11]];
function flatten(array = [[1, 2, 3], [4, 5], [6]]){
    return arrays.reduce((a,b) => a.concat(b));
}

console.log(flatten(arrays));
// → [1, 2, 3, 4, 5, 6]


console.log(flatten());

/// Write Your Own Loop Function


/// Everything
function every(array, test) {
    //hi
  }