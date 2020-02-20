/*
MORNING CHALLENGE (pair coding)
************
    - Create a function that takes in strings
    - In the function, translate a phrase into pig latin and print it to the console.
​
    - If able to do so, return the value into another variable and print that variable
​
    What is Pig Latin?
        * If the word begins with a consonant, remove the consonant to the first vowel, place it at the end of the word, and add an 'ay' to the end (i.e. Pig Latin => IgPay Atinlay)
        * If the word begins with a vowel, simply add an 'ay' at the end of the word
*/

let sampleString = 'and this is a good day.';

function pigLatin(str) {
    let wordsArray = str.split(' ');
    console.log("wordsArray before forEach: ", wordsArray)
    wordsArray.forEach(function(word, index) {
        console.log("wordsArray in forEach: ", wordsArray);
        console.log("word : ", word);
        console.log("index : ", index);
        let lettersArray = word.split('');
        console.log("lettersArray before while : ", lettersArray);
        while(lettersArray[0] !== 'a' && lettersArray[0] !== 'e' && lettersArray[0] !== 'i' && lettersArray[0] !== 'o' && lettersArray[0] !== 'u') {
            console.log("consonant");
            lettersArray.push(lettersArray[0]);
            console.log("lettersArray push : ", lettersArray);
            console.log("wordsArray in forEach while: ", wordsArray);
            lettersArray.shift();
            console.log("lettersArray : shift ", lettersArray);
        }
        lettersArray.push('ay');
        wordsArray[index] = lettersArray.join('');
    })
    return wordsArray.join(' ');
}

let pigString = pigLatin(sampleString);
console.log(pigString);