//File Operations Basics - Practice reading files, 
//writing files, checking file existence, 
//copying/renaming/deleting files, 
//and getting file statistics

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'redFile.txt');

console.log(process.cwd());

//readFile
fs.readFileSync(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});

// fs.readFile('./backendJourney-Repo/week9/redFile.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data);
// });

//write file
fs.writeFile('testFile.txt',
  'Hello, World!',
  (err) => {
    if (err) throw err;
    console.log('Saved!');
  }
);

//checking file existence
// const filePath1 = path.join(__dirname, 'testFile.txt');
// console.log(fs.existsSync(filePath1));
console.log(fs.existsSync('testFile.txt'));


//copying/renaming/deleting files
fs.copyFileSync('testFile.txt', 'copiedTestFile.txt');


console.log(fs.existsSync('copiedTestFile.txt'));

fs.renameSync('copiedTestFile.txt', 'renamedTestFile.txt');

console.log(fs.existsSync('copiedTestFile.txt'));
console.log(fs.existsSync('renamedTestFile.txt'));

fs.unlinkSync('renamedTestFile.txt');

console.log(fs.existsSync('renamedTestFile.txt'));

//getting file stats

console.log(fs.stat('readFile.txt'));