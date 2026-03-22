//2. Array Methods Practice - Work with a student dataset to practice filter, map, reduce, sort, some, and every methods for data transformation and analysis

const students = ["Modupe", "Bimpe", "Skyscraper", "Joy", "MadMax"];
const alphabets = ["d", "a", "r", "b", "c"];
const newFigures = [10, 2, 1, 5]

//map

const newStudents = students.map((names) => {
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

students.push("Daenerys");
console.log(students);

//sort

console.log(students.sort());
console.log(alphabets.sort());
console.log(newFigures.sort((a, b) => a - b));
console.log(newFigures.sort((a, b) => b - a));

//reverse

console.log(students.reverse());
console.log(alphabets.reverse());

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

const newStudents1 = students.filter(a => a.length === 6);
console.log(newStudents1);

//reduce 

console.log(newFigures.reduce((a, b) => a + b, 0))
console.log(newFigures.reduce((a, b) => a * b, 1))