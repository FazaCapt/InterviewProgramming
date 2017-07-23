/* 
    FizzBuzz: Output numbers from 1 to x. If the number is divisiable by 3, 
    replaca it with " Fizz ". if it divisible by 3 and 5 replace it with "FizzBuzz".

    eg:
    1
    2
    Fizz
    4
    Buzz
    6
    .....
    14
    FizzBuzz
*/

function FizzBuzz(x) {
    for ( i = 0; i <= x; i ++){
        if (i % 3 == 0 && i % 5 == 0)
            console.log("FizzBuzz");
        else if ( i % 3 == 0) 
            console.log("Fizz");
        else if (i % 5 == 0)
            console.log("Buzz");
        else 
            console.log(i); 
    }
}

FizzBuzz(78);