//Destructuring & Spread Practice - 
// Practice object and array destructuring with renaming and default values, 
// nested destructuring, function parameter destructuring, 
// and spread operator for merging and cloning

const user = {
    firstName: "Joy",
    lastName: "Donatus",
    age: 70,
    dateOfBirth: "01/01/2090",
    hobbies: ["Reading", "Exercising", "Football"],
    address: {
        street: "Mosafejo",
        state: "Lagos",
        country: "Nigeria"
    },

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    },

    incrementAge(){
        return `${this.age + 1}`;
    }, 
    
    addHobby(hobby){
        return `${this.hobbies.push(hobby)}`;
    }, 
    
    getAddress(){
        return `${this.address.street}, ${this.address.state} ${this.address.country}`
    }
}

//renaming
const {firstName: newfirstName, lastName: newlastName} = user;

console.log (newfirstName);
console.log (newlastName);

//default values
const {age = 20} = user;
const {family = "none"} = user;

console.log (age);
console.log(family);

//nested destructuring

const {address : {state: states}} = user;
console.log(states);

//spread operator for cloning user

const newUser = { ...user };
console.log(newUser.getAddress());

//function destructuring

function greet({ newfirstName }){
  return `Good Morning ${newfirstName}`;
}

console.log(greet({newfirstName}));

//spread operator for merging

const newUser1 = { ...newUser, clothing: ["Givenchi", "Naija Made"]};
console.log(newUser1.clothing);

//rest operator

const {firstName, lastName, ...others } = newUser1;
console.log(firstName);
console.log(lastName);
console.log(others);