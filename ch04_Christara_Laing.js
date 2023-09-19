//Chapter 4
/// Exercises
//// Sum and Range
/// Basic range
function range(start, end){
    let holdRange = [];
    for (let number = start; number <= end; number = number + 1){
        holdRange.push(number)
    };
    return holdRange;
  }

console.log(range(1, 10));

/// Range With Step added
function rangeStep(start, end, step){
    let holdRange = [];
    if ((end - start) > 0 & step != 0){
        for (let number = start; number <= end; number += step){
            holdRange.push(number);
        };
    } else{
        for (let number = start; number >= end; number += step){
            holdRange.push(number);
        };
    };
    return holdRange;
}
console.log(rangeStep(1, 10, 2));

console.log(rangeStep(0, 10, 3));

console.log(rangeStep(5, 2, -1));

// fixed with your suggestion
console.log(rangeStep(1, 10, 3));


// figured it out the <= made it not function correctly and return(sumPop)
    /// or else it becomes undefined
// can see 55 equated with console.log but comes back as undifined when returned
function sumPop(array, total = 0){
    if (array.length == 0){
        return(total);
    } else {
        total += array.pop();
        return(sumPop(array, total));
    }
}

console.log(sumPop(range(1,10)))

// functioning sum
function sum(array){
    let total = 0;
    for(let num = 0; num <= (array.length - 1); num += 1){
      total = total + array[num];
    }
    return(total);
  }

console.log(sum(range(1,10)))
//// Reversing an Array
///// unshift could also be used as it pushes to the begining 
function reverseArray(array){
    arrayNew = []
    for(let num = array.length-1; num >= 0; num -= 1){
        arrayNew.push(array[num]);
    }
    return arrayNew;
}
console.log(reverseArray(["A", "B", "C"]));
console.log(reverseArray(["O","l","l","E","H"]));

// can you guess this word?
console.log(reverseArray(['s','i','s', 'o', 'i', 'n', 'o', 'c', 'o', 'n', 'a', 'c', 'l', 'o', 'v', 'o', 'c', 'i', 'l', 'i', 's', 'c', 'i', 'p', 'o', 'c', 's', 'o', 'r', 'c', 'i', 'm', 'a', 'r', 't', 'l', 'u', 'o', 'n', 'o', 'm', 'u', 'e', 'n', 'P']))

function reverseArray2(array){
    for(let num = 0; num <= array.length - 1; num += 1){
        array.splice(num, 0, array.pop(0));
    }
    return array;
}

console.log(reverseArray2(['0', 'l', 'l', 'e', 'H']))
console.log(reverseArray2(['s','i','s', 'o', 'i', 'n', 'o', 'c', 'o', 'n', 'a', 'c', 'l', 'o', 'v', 'o', 'c', 'i', 'l', 'i', 's', 'c', 'i', 'p', 'o', 'c', 's', 'o', 'r', 'c', 'i', 'm', 'a', 'r', 't', 'l', 'u', 'o', 'n', 'o', 'm', 'u', 'e', 'n', 'P']))