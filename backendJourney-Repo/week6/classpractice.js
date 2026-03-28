const addAnyNumber = (a, ...values) => {
    return values.reduce((total, n) => total + n, a)
}

console.log(addAnyNumber(1, 2, 3, 4));