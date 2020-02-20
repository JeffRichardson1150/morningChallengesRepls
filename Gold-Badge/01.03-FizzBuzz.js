

// ELSE IF
let FB = 30;

if(FB % 5 == 0 && FB % 3 == 0) {
    console.log("FizzBuzz");
} else if (FB % 5 == 0) {
    console.log("Buzz");
} else if (FB % 3 == 0) {
    console.log("Fizz");
} else {
    console.log(FB)
}

// SWITCH
let FB = 5

switch(true) {
    case (FB % 5 == 0 && FB % 3 == 0):
        console.log("FizzBuzz");
        break;
    case (FB % 5 == 0):
        console.log("Buzz");
        break;
    case (FB % 3 == 0):
        console.log("Fizz");
        break;
    default:
        console.log(FB);
}

// TERNARY
let FB = 30;

(FB % 5 == 0 && FB % 3 == 0) ? console.log("FizzBuzz") 
: (FB % 5 == 0) ? console.log("Buzz") 
: (FB % 3 == 0) ? console.log("Fizz") 
: console.log(FB)