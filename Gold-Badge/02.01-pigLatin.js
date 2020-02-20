/*
MORNING CHALLENGE (pair coding)
************
    -s Create a function that takes in strings
    - In the function, translate a phrase into pig latin and print it to the console.
    - If able to do so, return the value into another variable and print that variable
    What is Pig Latin?
        * If the word begins with a consonant, remove the consonant to the first vowel, place it at the end of the word, and add an 'ay' to the end (i.e. Pig Latin => IgPay Atinlay)
        * If the word begins with a vowel, simply add an 'ay' at the end of the word
*/

function pigLatin (sentence) {
    let words = sentence.split(" ");
    let newSentence = [];
    let i = 0;
    let vowels = "aeiou";
    while (words[i] != undefined) {
        let word = words[i];
        let firstChar = word[0];
        let restOfWord = word.slice(1);
        if(vowels.includes(firstChar.toLowerCase())) {
            console.log("vowel logic for word, firstChar, restOfWord ",word, firstChar, restOfWord);
            newSentence.push(word + "ay");
            console.log(newSentence);
        } else {
            console.log("consonant logic for word, firstChar, restOfWord ",word, firstChar, restOfWord);
            newSentence.push(restOfWord + firstChar + "ay");
            console.log(newSentence);
        }
        i += 1;

    }
    return newSentence;
}


pigLatinSentence = pigLatin("This is a sentence");
console.log(pigLatinSentence);



let word = "This";

function checkAdult(age) {
  return age >= 18;
}

let firstChar = "T";
let word = "This";
function findVowel(str) {
    let index = vowels.includes(firstChar.toLowerCase());
    // console.log(vowels.includes(firstChar.toLowerCase());
    console.log(index);
}
let i = 0;
while (vowels[i] != undefined) {
    let vowel = vowels[i];
    if word[i](vowel)
    i++;
}

findVowel("This");

let vowelIndex = word.find(findVowel(word));

function myFunction() {
  document.getElementById("demo").innerHTML = ages.find(checkAdult);
}
