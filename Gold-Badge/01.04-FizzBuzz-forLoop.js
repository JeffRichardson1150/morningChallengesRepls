/*
FIZZBUZZ WHITEBOARDING
*/
function FizzBuzz(FB) {
    for (let i = 0; i <= FB; i++) {
        (i % 3 == 0 && i % 5 == 0) ? console.log("FizzBuzz") :
            (i % 5 == 0) ? console.log("Buzz") :
                (i % 3 == 0) ? console.log("Fizz") :
                    console.log(i);
    }
}

FizzBuzz(100);
