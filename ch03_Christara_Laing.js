// Chapter 3

// Exercises 
//// Minimum:
function min(a = 0, b= 1){
	if (a < b){
    	return(a);
    }else{
  		return(b);
  }
}
console.log(min(0, 10));

console.log(min(0, -10));

//// Recursion:
///// Does not work with negative numbers
function isEven(n) {
    if (n == 0){
        return true;
    } else if (n <=1){
        return false;
    } else{
        return isEven(n - 2);
    }
}
console.log(isEven(50));

console.log(isEven(75));

console.log(isEven(-1));

console.log(isEven(-2));
// Note: added suggestion from Dr. White to multiply by - 1 
    ///instead of change return(isEven(n + 2)) if n is < 0


///// Does work with negative numbers

function isEven(n) {
    if (n < 0){
        n = n * -1;
    }

    if (n == 0){
        return true;
    } else if (n <=1){
        return false;
    } else{
        return isEven(n - 2);
    }
}

console.log(isEven(50));

console.log(isEven(75));

console.log(isEven(-1));

console.log(isEven(-2));

//// Bean Counting:
// Notes:
    /// need to -1 from string.length so that number is similar to counting seq
        //// starts at 0
function countBs(string = "Box"){
    let num_Bs = 0;
    for(let strLength = string.length - 1; strLength != -1; strLength -= 1){
        console.log("number: "+ strLength );
        console.log("letter: " + string[strLength]);
    }
}

console.log(countBs("BBC"));