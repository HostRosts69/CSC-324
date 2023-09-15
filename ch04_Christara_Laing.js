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
    if ((end - start) % step != 0){
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
// where is undefined coming from?
console.log(rangeStep(1, 10, 2));

console.log(rangeStep(0, 10, 3));

console.log(rangeStep(5, 2, -1));

// weird this one doesnt work
console.log(rangeStep(1, 10, 3));


// failed use of pop
// can see 55 equated with console.log but comes back as undifined when returned
function sumPop(array, total = 0){
    if (array.length <= 0){
        total += array.pop();
        return(total);
    } else {
        console.log(total)
        total += array.pop();
        sumPop(array, total);
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
function reverseArray(array){
    arrayNew = []
    for(let num = array.length-1; num >= 0; num -= 1){
        console.log(num)
        arrayNew.push(array[num]);
    }
    return arrayNew;
}
console.log(reverseArray(["A", "B", "C"]));
console.log(reverseArray(["O","l","l","E","H"]));