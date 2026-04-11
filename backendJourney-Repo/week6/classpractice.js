const addAnyNumber = (a, ...values) => {
    return values.reduce((total, n) => total + n, a)
}

console.log(addAnyNumber(1, 2, 3, 4));

const products = [
  { name: "laptop", price: 1000, tags: ["tech", "device"] },
  { name: "phone", price: null, tags: null },
  { name: null, price: 500, tags: ["gadget"] }
];

const newProducts = products.map((product) => {
    const isExpensive = (typeof product.price === "number" && product.price > 500)
    const tags = product.tags ?? []
    return {name: product.name?.toUpperCase() ?? "UNKNOWN",
            price: product.price ?? "N/A",
            tags,
            tagCount: tags.length,
            isExpensive
        }
}) 

console.log(newProducts);

//Create a user cache with Map
const user = new Map();
console.log(user);

// Add 3 users (id → name)
user.set(1, { name: "Joy", id: 1, age: "50", address: {streetNumber: 40, city: "Lagos", Country: "Nigeria"}});
user.set(2, { name: "Mike", id: 2, age: "20", address: {streetNumber: 30, city: "Abuja", Country: "Namibia"}});
user.set(3, { name: "Steve", id: 3, age: "10"});

// Retrieve one user
console.log(user.get(1));
console.log(user.get(2).address.city);
console.log(user.get(3).age);

console.log(user.size);

for (let [a, b] of user) {
  console.log(a, b);
}

// Check if a user exists
console.log(user.has(1));


//deleting a user
user.delete(1);
console.log(user);

//emptying the user object
user.clear();
console.log(user);