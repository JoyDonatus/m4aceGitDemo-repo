//Arrow Functions & Context - Convert traditional functions to arrow functions, 
// practice different arrow function syntaxes with various parameter counts 
// and return types

//traditional function
function multiplyArrow(a, b) {
  return a * b;
}

//arrow function
const multiply = (a, b) => a * b;

//traditional function
// function createUser(name, age) {
//   return {
//     name: name,
//     age: age
//   };
// }

//arrow function
const createUser = (name, age) => {
    return{
        name,
        age
    }
}

//traditional function (no parameter)
// function getDate(){
//     return new Date();
// }

//arrow function

const getDate = () => new Date();

console.log(getDate());
//traditional function (no parameter)
// function getCurrentYear() {
//   return new Date().getFullYear();
// }

//arrow function
const getCurrentYear = () => new Date().getFullYear();

//console.log(getCurrentYear());

// const person = {
//   name: "Joy",
//   greet: function () {
//     setTimeout(function () {
//       console.log("Hello " + this.name);
//     }, 1000);
//   }
// };

const person = {
  name: "Joy",
  greet: function(){
    setTimeout( () => {
      console.log("Hello " + this.name);
    }, 1000);
  }
};


person.greet();
