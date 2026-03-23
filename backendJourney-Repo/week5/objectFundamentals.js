//Object Fundamentals - Create a user object with nested properties and methods including getFullName, incrementAge, addHobby, and getAddress functions

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
        this.age += 1;
        return this.age;
    }, 
    
    addHobby(hobby){
        this.hobbies.push(hobby);
        return this.hobbies;
    }, 
    
    getAddress(){
        return `${this.address.street}, ${this.address.state} ${this.address.country}`
    }
}

console.log(user.getAddress());
user.addHobby("eating");
console.log(user.hobbies);
console.log(user.incrementAge());


//creating object using class

class User{
    constructor(firstName, lastName, age, hobbies, address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.hobbies = hobbies;
        this.address = address;
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    incrementAge(){
        this.age += 1;
        return this.age;
    } 
    
    addHobby(hobby){
        this.hobbies.push(hobby);
        return this.hobbies;
    } 
    
    getAddress(){
        return `${this.address.street}, ${this.address.city}, ${this.address.state} ${this.address.country}`
    }
}

const user1 = new User("Joy", "Donatus", 40, ["dressing", "talking", "laughing"], {street: "26, Mosafejo Street", city: "Ikorodu", state: "Lagos", country: "Nigeria"});
const user2 = new User("Abass", "Odo", 31, ["dancing", "freelancing", "content making"], {street: "10, Agbele Estate", city: "PortHarcourt", state: "Imo", country: "Spain"});

console.log(user1.getAddress());
console.log(user1.getFullName());

console.log(user1.addHobby("flexing"));

console.log(user2.getAddress());

