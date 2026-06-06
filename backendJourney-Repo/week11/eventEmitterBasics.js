// //Event Emitter Basics - 
// // Create a custom UserManager class with event emitters for user operations (add, update, remove), 

const EventEmitter = require("events");

class UserManager extends EventEmitter {
  constructor() {
    super();
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);

    this.emit("add", user);
  }

  updateUser(id, newData) {
    const user = this.users.find((u) => u.id === id);

    if (user) {
      Object.assign(user, newData);

      // Emit event
      this.emit("update", user);
    } else {
      console.log("User not found");
    }
  }

  // Remove user
  removeUser(id) {
    const index = this.users.findIndex((u) => u.id === id);

    if (index !== -1) {
      const removedUser = this.users.splice(index, 1);

      // Emit event
      this.emit("remove", removedUser[0]);
    } else {
      console.log("User not found");
    }
  }
}


const myManager = new UserManager();

myManager.on("add", (user) => {
  console.log("User added:", user);
});

myManager.on("update", (user) => {
  console.log("User updated:", user);
});

myManager.on("remove", (user) => {
  console.log("User removed:", user);
});

// Test the class
myManager.addUser({
  id: 1,
  name: "John",
  age: 25,
});

myManager.addUser({
  id: 2,
  name: "Mary",
  age: 22,
});

myManager.updateUser(1, {
  age: 26,
});

myManager.removeUser(1);

