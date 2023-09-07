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
    /// needs to strLength != -1 or else it will stop at zero and not continue(stops short)
    /// does not count lowercase (exercise said only uppercase)

// CountBs(string)
function countBs(string = "Box"){
    let num_Bs = 0;
    for(let strLength = string.length - 1; strLength != -1; strLength -= 1){
        if(string[strLength] == "B"){
            num_Bs += 1;
        }
    }
    return(num_Bs);
}

console.log(countBs("BBC"));
console.log(countBs("Button Bean Borrito"))
console.log(countBs("Big bold eyelashes"))
console.log(countBs())

// countChar(string)
function countChar(string = "mississippi", char = "i"){
    let num_char = 0;
    for(let strLength = string.length - 1; strLength != -1; strLength -= 1){
      if(string[strLength] == char){
        num_char += 1;
      }
    }
    return(num_char);
  }
  
  console.log(countChar("kakkerlak", "k"));
  console.log(countChar("mississippi", "p"));
  console.log(countChar("Big Rats Love High Fives On River Rocks", "R"));
  console.log(countChar());

