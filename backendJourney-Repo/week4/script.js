//1. Loop Mastery - Create multiplication tables using nested loops and while loops to understand different iteration patterns
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

//2. Array Methods Practice - Work with a student dataset to practice filter, map, reduce, sort, some, and every methods for data transformation and analysis
let students = ["Modupe", "Bimpe", "Skyscraper", "Joy", "MadMax"];
//push
students.push("Daenerys");
console.log(students);
//sort
console.log(students.sort());
//reverse
console.log(students.reverse());
//slice (New array from the first three students from the reversed array);
const firstThreeStudents = students.slice(0, 3);
console.log(firstThreeStudents);
//splice (Replace MadMax and Joy in the array of students)
students.splice(2, 2, "Emmanuel", "Samuel");
console.log(students);
// Delete Skyscraper
students.splice(0, 1);
console.log(students);
//filter
const newStudents = students.filter(a => a.length === 6);
console.log(newStudents);

let newFigures = [10, 2, 1, 5]
let alphabe = ["d", "a", "r", "b", "c"]
//reduce 
console.log(newFigures.reduce((a, b) => a + b, 0))
console.log(newFigures.reduce((a, b) => a * b, 1))

//3. Function Challenges - Implement an isPalindrome function to understand function creation and string manipulation

let nameToReverse = "Arya";

console.log(nameToReverse);

let reversedName = "";

function reverseFunction(nameToReverse){
    for (let i = nameToReverse.length - 1; i >= 0; i--) {
        reversedName += nameToReverse[i];
    }
    console.log(reversedName);
    if (reversedName === nameToReverse) {
        return `${nameToReverse} is a palindrome`;
    }
    else {
        return `${nameToReverse} is not a palindrome`;
    }
}

console.log(reverseFunction(nameToReverse));
