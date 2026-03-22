//Variables & Data Types - Declare variables for a user profile with different data types, practice type checking with typeof, explore type coercion, and create template literals

let userName = "Joy Smith";
console.log(typeof userName); 
let userAge = 30;
console.log(typeof userAge);
let isUserActive = true;
console.log(typeof isUserActive);

console.log("User Name: " + userName);
console.log(`User Age: ${userAge}`);
console.log(`Is User Active? : ${isUserActive}`);

let newUserAge = userAge.toString();
console.log(typeof newUserAge); 

//Operators & Conditionals - Build a grade calculator that accepts scores and returns letter grades, handling invalid inputs using both if/else and switch statements
//let studentScore = prompt("Enter student's score (0-100):");
// convert the input to a number
let studentScore = 70
studentScore = Number(studentScore);

function calculateGrade(score) {
    if (isNaN(score) || score < 0 || score > 100) {
        return "Please enter a number between 0 and 100.";
    } else {
        switch (true) {
            case (score >= 70):
                return "A";
            case (score >= 60):
                return "B";
            case (score >= 50):
                return "C";
            case (score >= 40):
                return "D";
        }
    }
}
console.log(calculateGrade(studentScore));

//String Manipulation Challenge - Build functions to convert strings to title case, count vowels, and reverse strings
function toTitleCase(str) {
    let word ="";
    for (let i = 0; i < str.length; i++) {
        if(i === 0){
            word = str[i].toUpperCase();
        }
        else if(i > 0){
            word = word + str[i].toLowerCase();
        }
        }
        return word;
    }

console.log(toTitleCase("HelloWorld"));

//to TitleCase for a string of words

const myString = "a new Fat bigggy just as myself";

function toTitleCaseStringOfWords(title){
    title = title.toLowerCase();
    let titleArray = title.split(" ");
    let newWord;
    let newWords;
    let newArray = [];
    let newTitleArray = "";
     titleArray.map((words) => {
        newWord = words;
        if(words.length > 3 ){
            newWord = toTitleCase(words);
        }
        console.log(newWord);
        newArray.push(newWord);
    })
    for (let i = 0; i < newArray.length; i++){
        newWords = newArray[i];
        if (i === 0){
             newWords = toTitleCase(newWords);
        }
        newTitleArray = newTitleArray + newWords + " ";
    }
        return newTitleArray.trim();
}

console.log(toTitleCaseStringOfWords(myString));


// count vowels
let vowelCount = 0;
let word = "Palindrome"

function countVowel(str){
    for(let i = 0; i < str.length; i++){
        str = str.toLowerCase();
    
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
            vowelCount = vowelCount + 1
        }
    }
    return `vowelCount is ${vowelCount}`; 
}

console.log(countVowel(word));


function reverseWord(str){
    let reversedWord = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedWord += str[i];
    }
    return reversedWord;
}
console.log(reverseWord("hello"));
