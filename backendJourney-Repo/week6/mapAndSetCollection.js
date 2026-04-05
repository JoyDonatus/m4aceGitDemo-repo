//Map and Set Collections - Create a user cache with Map, 
// implement word frequency tracking, build a phone book, 
// remove duplicates with Set, find unique characters, 
// and implement set operations (union, intersection, difference)

//Create a Map to store users:

// Add 3 users (id → name)
// Retrieve one user
// Check if a user exists

const user = new Map();
console.log(user);

user.set(1, { name: "Joy", age: "50", address: {streetNumber: 40, city: "Lagos", Country: "Nigeria"}});
user.set(2, { name: "Mike", age: "20", address: {streetNumber: 30, city: "Abuja", Country: "Namibia"}});
user.set(3, { name: "Steve", age: "10"});


console.log(user.get(1).name);



// user.push(user1);
// user.push(user2);
// user.push(user3)
