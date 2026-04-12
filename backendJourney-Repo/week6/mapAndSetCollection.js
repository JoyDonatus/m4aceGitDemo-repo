//Map and Set Collections - Create a user cache with Map, 
// implement word frequency tracking, build a phone book, 
// remove duplicates with Set, find unique characters, 
// and implement set operations (union, intersection, difference)



//Create a user cache with Map
const user = new Map();
console.log(user);

user.set(1, { name: "Joy", id: 1, age: "50", address: {streetNumber: 40, city: "Lagos", Country: "Nigeria"}});
user.set(2, { name: "Mike", id: 2, age: "20", address: {streetNumber: 30, city: "Abuja", Country: "Namibia"}});
user.set(3, { name: "Steve", id: 3, age: "10"});


console.log(user);


//Word Frequency Counter

const sentence = "apple banana apple orange banana apple";

function frequencyCounter(sentences) {
  const words = sentences.split(" ");
  const newSentence = new Map();
  words.map((word) => {
    let newWord = newSentence.get(word) || 0;
    newSentence.set(word, newWord + 1);
  });
  return newSentence;

}

console.log(frequencyCounter(sentence));

//build a phone book
const phoneBook = new Map();

phoneBook.set(1, { name: "Joy", phoneNumber: "+2347905678"});
phoneBook.set(2, { name: "Peter", phoneNumber: "+2347905679"});
phoneBook.set(3, { name: "Jeniffer", phoneNumber: "+2347905674"});

console.log(phoneBook);

//remove duplicates with Set
const alphabets = ["a", "b", "c", "b", "c", "d", "z", "h"]
const removeDuplicateAlphabets = new Set(alphabets);
console.log(removeDuplicateAlphabets);

//find unique characters
const story = "Story, story";
const uniqueCharacters = new Set(story);
console.log(uniqueCharacters);


//set operations (union, intersection, difference)
const firstSet = new Set([1, 2, 3, 4]);
const secondSet = new Set([3, 4, 5, 6]);

//union (merging two sets with spread operator)
const newSet = new Set([...firstSet, ...secondSet]);
console.log(newSet);

//intersection (finding common elements between two sets)
const newSetIntersection = new Set([...firstSet].filter(x => secondSet.has(x)));
console.log(newSetIntersection);

//difference (finding unique elements in the first set that are not in the second set)
const newSetDifference = new Set([...firstSet].filter(x => !secondSet.has(x)));
console.log(newSetDifference);