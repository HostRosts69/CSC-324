//Chapter 2

// Exercises
//// Looping a triangle
for (let number = 1; number <= 7; number = number+1) {
    console.log("#".repeat(number));
  };

//// FizzBuzz
///// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead
for (let number = 0; number <= 100; number = number+1) {
    if (number % 3 == 0 && number % 5 == 0){
      console.log("FizzBuzz");
    }else if (number % 3 == 0){
        console.log("Fizz");
    } else if (number % 5 == 0){
        console.log("Buzz");
    } else{
        console.log(number);
    }
  }

//// Chessboard

///// A 8 x 8 checkerboard
let heck = "" ;
let size = 8;
for (let sizeL = size; sizeL >= 1; sizeL = sizeL-1) {

    if (sizeL % 2 == 0){
        let length = size;
        while (length >= 1) {
            if (length % 2 != 0){
                heck = heck + "#";
            } else {
                heck = heck + " ";
            }
            length = length-1;
        }
        
        }else{
            let length = size;
            while (length >= 1) {
                if (length % 2 == 0){
                    heck = heck + "#";
                } else {
                    heck = heck + " ";
                }
                length = length-1;
        }
    }
    heck = heck + "\n";
}
console.log (heck);

///// larger 20 x 20
size = 20;
for (let sizeL = size; sizeL >= 1; sizeL = sizeL-1) {

    if (sizeL % 2 == 0){
        let length = size;
        while (length >= 1) {
            if (length % 2 != 0){
                heck = heck + "#";
            } else {
                heck = heck + " ";
            }
            length = length-1;
        }
        
        }else{
            let length = size;
            while (length >= 1) {
                if (length % 2 == 0){
                    heck = heck + "#";
                } else {
                    heck = heck + " ";
                }
                length = length-1;
        }
    }
    heck = heck + "\n";
}
console.log (heck);