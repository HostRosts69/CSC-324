// Exercises
//// Looping a triangle
for (let number = 1; number <= 7; number = number+1) {
    console.log(hold.repeat(number));
  }

//// FizzBuzz
///// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead
for (let number = 0; number <= 100; number = number+1) {
    if (number % 3 == 0 && number % 5 == 0){
      console.log("FizzBuzz")
    }else if (number % 3 == 0){
        console.log("Fizz")
    } else if (number % 5 == 0){
        console.log("Buzz")
    } else{
        console.log(number)
    }
  }

//// Chessboard
for (let size = 8; size >= 0; size = size-1) {
    console.log(size)
}

