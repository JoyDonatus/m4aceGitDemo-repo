// implement event listeners and one-time listeners
    const EventEmitter = require("events");

// Create UserManager class
class UserManager extends EventEmitter {
  constructor() {
    super();
    this.users = [];
  }

  // Add user
  addUser(user) {
    this.users.push(user);

    // Emit add event
    this.emit("add", user);
  }

  // Update user
  updateUser(id, newData) {
    const user = this.users.find((u) => u.id === id);

    if (user) {
      Object.assign(user, newData);

      // Emit update event
      this.emit("update", user);
    } else {
      console.log("User not found");
    }
  }

  // Remove user
  removeUser(id) {
    const index = this.users.findIndex((u) => u.id === id);

    if (index !== -1) {
      const removedUser = this.users.splice(index, 1)[0];

      // Emit remove event
      this.emit("remove", removedUser);
    } else {
      console.log("User not found");
    }
  }
}

// Create object
const userManager = new UserManager();

// Runs every time a user is added
userManager.on("add", (user) => {
  console.log("User added:", user);
});

// Runs every time a user is updated
userManager.on("update", (user) => {
  console.log("User updated:", user);
});

// Runs every time a user is removed
userManager.on("remove", (user) => {
  console.log("User removed:", user);
});

// Runs ONLY ONE TIME
userManager.once("add", (user) => {
  console.log("This runs only once:");
  console.log("First user added is", user.name);
});



// First add
userManager.addUser({
  id: 1,
  name: "John",
  age: 25,
});

// Second add
userManager.addUser({
  id: 2,
  name: "Mary",
  age: 22,
});

// Update user
userManager.updateUser(1, {
  age: 26,
});

// Remove user
userManager.removeUser(2);

const eventEmitter = require('events');
const myEmitter = new eventEmitter();

// 1. Define the listener (What to do when the event happens)
myEmitter.on('greet', (name) => {
    console.log(`Hello ${name}! The event was triggered.`);
});

// 2. Emit the event (Trigger it)
myEmitter.emit('greet', ('Joy'));