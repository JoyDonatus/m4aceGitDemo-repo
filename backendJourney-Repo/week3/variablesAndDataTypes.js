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