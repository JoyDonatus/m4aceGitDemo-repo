//3. Function Challenges - Implement an isPalindrome function to understand function creation and string manipulation

let nameToReverse = "Arya";

console.log(nameToReverse);

let reversedName = "";

function isPalindrome(nameToReverse){
    for (let i = nameToReverse.length - 1; i >= 0; i--) {
        reversedName += nameToReverse[i];
    }
    console.log(reversedName);
    if (reversedName === nameToReverse) {
        return `${nameToReverse} is a palindrome`;
    }
    else {
        return `${nameToReverse} is not a palindrome`;
    }
}

console.log(isPalindrome(nameToReverse));