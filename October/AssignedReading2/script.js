// Looping a Triangle
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

// initialize our triangle row variable to one hashtag "#"
// with every iteration we add a hashtag to the row
// print out a row in every iteration
// exit loop when we are greater than 7 #'s
console.log("Problem 1: Looping a Triangle");
for(let row="#"; row <= "#######"; row += "#"){
    console.log(row);
}

// FizzBuzz
// Write a program that uses console.log to print all the numbers from 1 to 100, with
// two exceptions. For numbers divisible by 3, print "Fizz" instead 
// of the number, and for numbers divisible by 5 (and not 3) print
// "Buzz" instead
console.log("Problem 2: FizzBuzz");
for(let i = 1; i <= 100; i++){
    if((i % 3 === 0) && (i % 5 === 0)){ // if i is divisible by 3 and 5
        console.log("FizzBuzz"); // print FizzBuzz
    }else if(i % 3 === 0){ // if i is divisible by 3
        console.log("Fizz"); // print Fizz
    }else if(i % 5 === 0){ // if i is divisible by 5
        console.log("Buzz"); // print Buzz
    }else{ // else print i 
        console.log(i);
    }
}

// Write a program that creates a string that represents an 8x8 grid,
// using newline characters to separate lines. At each position of 
// the grid there is either a space or a "#" character. The characters
// should form a chessboard.
console.log("Problem 3: Chessboard");
let chessboard = ""; // chessboard string
let size = 8; // size variable determining chessboard size (size x size)
for(let i = 1; i <= size; i++){ // iterate through rows of chess grid (i)
    for(let j = 1; j <= size; j++){ // iterate through squares of row i, (j)
        if((i + j)%2 === 0){ // if the sum of the iterators is even
            chessboard = chessboard + " "; // append a space to chessboard
        }else{ // the sum of of the iterators is odd
            chessboard = chessboard + "#"; // append a hash symbol
        }
    }
    chessboard = chessboard + "\n"; // append a new line at the end of row i
}
console.log(chessboard); // print out chessboard
