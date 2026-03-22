//Create an object for a student with: name, score, subjects (array), method: addSubject

// const student = {
//     name: "Joy",
//     score: 90,
//     subjects: ["Mathematics", "English", "Yoruba"],

//     addSubject(subject){
//         this.subjects.push(subject);
//     }
// }

// student.addSubject("Finance");
// console.log(student.subjects);

// //Destructure: name → rename to studentName score with default = 0

// const {name: studentName} = student;

// const {score = 0} = student;

// console.log()

// //Extract city from this using nested destructuring:

// const user = {
//   address: {
//     city: "Abuja"
//   }
// };

// const { address: {city} } = user;  //DO NOT have access to address anymore as only city was extracted:
// console.log(city);

// //OR

// const { address: { city: userCity } } = user; 

// console.log(userCity);

// //Clone and update this object using spread operator:

// //const newUser = {
//   // copy user
//   // change age
// //};

// const newUser = { ...user,  age: 49};

// console.log(newUser.age);

//Create a user object with: firstName, lastName, age, email, hobbies (array), address (nested object: city, country)

const numbers = [1, 2, 3, 4];

const [first, ...others] = numbers;
console.log(first);
console.log(others);
