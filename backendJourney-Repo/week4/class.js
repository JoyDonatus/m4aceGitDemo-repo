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
