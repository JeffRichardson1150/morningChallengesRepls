/*
    - create a function that has two parameters: both of them will be numbers.
    -  inside of the function, add both of the numbers together and console.log the result
*/
let addTwoNum = (num1, num2) => console.log(num1 + num2);
addTwoNum(5,3);

/*
- create an object literal named 'gym' that holds the following key/value pairs:
- id: number
- name: string
- location: string
- equipment: array
- equipment is an array that should store no more than two objects. Those 2 objects should each store 'equipmentName' and 'equipmentDesc' keys.
*/

let gym = {
    id: 5,
    name: "Jock Strap",
    location: "ElevenFifty Academy",
    equipment: ["basketball", "climbing rope"]

}

console.log(Object.keys(gym));
console.log(Object.values(gym));
console.log(gym.id);
console.log(gym['location']);


/*
    - create a function named volumeFinder that has 3 parameters: one named 'length', one named 'width', and the last named 'height'.
    - using the formula listed below, find the volume of a solid rectangle
        - length x width x height
    - capture the value of the equation above in a new variable, and console.log that value once equated.
*/

function volumeFinder(length, width, height) {
    let rectangleVolume = length * width * height;
    console.log(rectangleVolume);
}

volumeFinder(2, 4, 6);
