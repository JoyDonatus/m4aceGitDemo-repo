//for loop
// count 1 to 100 
for (let i = 1; i <=100; i++){
    console.log(i);
}

//looping through an array of students
const students = ['Joy', 'Sodiq', 'Elijah', 'Oluwaseun'];
for (let i = 0; i < students.length; i++){
    console.log(students[i]);
}

//while loop
let i = 1;
while (i <= 100) {
    console.log(i);
    i++;
}
//do-while loop
let j = 1;
 do{
    console.log(j);
    j++;
} while (j <= 100);

//for-of loop - used to iterate over arrays and strings especially when you don't need the index
for (const i of students){
    console.log(i);
}
const oruko = "Joy";
console.log(oruko);
console.log(oruko.toLowerCase());
for (const i of oruko){
    if (i === 'o') {
    console.log(i);
}
}

//for -in loop - used to iterate over the properties of an object
const car = {name: 'GLE', color: 'Black', engine: 'v4'};

for (const i in car){
    console.log(i);
}

// for each loop - used to execute a provided function once for each array element
students.forEach((student) =>{
    console.log(student);
});
students.map((student) =>{
    console.log(student);
});

//Array Manipulation
const numbers = [1, 2, 3, 4, 5];

const myString = "a new Fat bigggy just as myself";

function toTitleCaseStringOfWords(title){
    title = title.toLowerCase().split(" ");
    let newWord;
    let finalTitle = "";
     title.map((words, index) => {
        newWord = "";
        if (index === 0  || words.length > 3){
            for(let i = 0; i < words.length; i++){
                if(i === 0){
                    newWord = words[i].toUpperCase();
                }
                else{
                    newWord = newWord + words[i];
                }   
            }
        }
        else if (index > 0 && words.length <= 3){
            newWord = words;
        }
        finalTitle = finalTitle + newWord + " ";
    })
   return finalTitle.trim();
}

console.log(toTitleCaseStringOfWords(myString));



//1. Loop Mastery - Create multiplication tables using nested loops and while loops to understand different iteration patterns

    for (let i = 1; i <= 10; i++){
        for(let j = 1; j <= 10; j++){
            console.log(`${i} x ${j} = ${i * j}`);
        }  
    }


function multiplicationTableFor(number) {
    for (let i = 1; i <= 10; i++) {
        
        console.log(`${number} x ${i} = ${number * i}`);
    }
}
console.log(multiplicationTableFor(5));

function multiplicationTableWhile(number) {
    
}
console.log(multiplicationTableWhile(Math.floor(Math.random() * 10) + 1));

//2. Array Methods Practice - Work with a student dataset to practice filter, map, reduce, sort, some, and every methods for data transformation and analysis

const students1 = ["Modupe", "Bimpe", "Skyscraper", "Joy", "MadMax"];
const alphabets = ["d", "a", "r", "b", "c"];
const newFigures = [10, 2, 1, 5]

//map

const newStudents = students1.map((names) => {
    return names;
});
console.log(newStudents);

//some

const result = newStudents.some((student) =>
  student.length >= 5
);
const newResult = newFigures.some((num) =>
  num === 4
);
console.log(result);
console.log(newResult);

//push

students1.push("Daenerys");
console.log(students1);

//sort

console.log(students1.sort());
console.log(alphabets.sort());
console.log(newFigures.sort((a, b) => a - b));
console.log(newFigures.sort((a, b) => b - a));

//reverse

console.log(students1.reverse());
console.log(alphabets.reverse());

//slice (New array from the first three students from the reversed array);

const firstThreeStudents = students1.slice(0, 3);
console.log(firstThreeStudents);

//splice (Replace MadMax and Joy in the array of students)

students1.splice(2, 2, "Emmanuel", "Samuel");
console.log(students1);

// Delete Skyscraper

students1.splice(0, 1);
console.log(students1);

//filter

const newStudents1 = students1.filter(a => a.length === 6);
console.log(newStudents1);

//reduce 

console.log(newFigures.reduce((a, b) => a + b, 0))
console.log(newFigures.reduce((a, b) => a * b, 1))

//3. Function Challenges - Implement an isPalindrome function to understand function creation and string manipulation

let nameToReverse = "Arya";

console.log(nameToReverse);

let reversedName = "";

function isPalindrome(nameToReverse){
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

console.log(isPalindrome(nameToReverse));
