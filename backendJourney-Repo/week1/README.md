Trying to solve Week 1's Assignment using Javascript that I learned in Week 3.



let nameToReverse = "Arya";

console.log(nameToReverse);

let reversedName = "";

function reverseFunction(nameToReverse){
    for (let i = nameToReverse.length - 1; i >= 0; i--) {
        reversedName += nameToReverse[i];
    }
    console.log(reversedName);
    if (reversedName === nameToReverse) {
        return "The name is a palindrome";
    }
    else {
        return "The name is not a palindrome";
    }
}

console.log(reverseFunction(nameToReverse));
