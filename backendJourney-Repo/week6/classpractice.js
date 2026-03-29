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