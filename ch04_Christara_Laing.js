//Chapter 4
/// Exercises
//// Sum and Range
function range(start, end){
    let holdRange = [];
    for (let number = start; number <= end; number = number + 1){
        holdRange.push(number)
    };
    return holdRange;
  }

console.log(range(1, 10));

function rangeStep(start, end, step){
    let holdRange = [];
    if ((end - start) % step != 0){
        console.log("Sorry this action cannot be completed! \n" + (end - start) + " is not divisable by " + step)
    }

    for (let number = start; number >= end; number = number + step){
        holdRange.push(number)
    };
    return holdRange;
  }

console.log(rangeStep(1, 10, 2));



//// Reversing an Array