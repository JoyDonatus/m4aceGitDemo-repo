//Loop Mastery - Create multiplication tables using nested loops and while loops to understand different iteration patterns
function multiplicationTableFor(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}
console.log(multiplicationTableFor(5));

function multiplicationTableWhile(number) {
    let i = 1;
    while (i <= 10) {
        console.log(`${number} x ${i} = ${number * i}`);
        i++;
    }
}
console.log(multiplicationTableWhile(Math.floor(Math.random() * 10) + 1));
//Array Methods Practice - Work with a student dataset to practice filter, map, reduce, sort, some, and every methods for data transformation and analysis

//Function Challenges - Implement an isPalindrome function to understand function creation and string manipulation

let nameToReverse = "Arya";

console.log(nameToReverse);

let reversedName = "";

function reverseFunction(nameToReverse){
    for (let i = nameToReverse.length - 1; i >= 0; i--) {
        reversedName += nameToReverse[i];
    }
    console.log(reversedName);
    if (reversedName === nameToReverse) {
        return "The name is a palindrome";
    }
    else {
        return "The name is not a palindrome";
    }
}

console.log(reverseFunction(nameToReverse));
