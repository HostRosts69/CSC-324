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

//// Bean Counting: