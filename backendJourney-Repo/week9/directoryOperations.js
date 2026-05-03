//Directory Operations - Create directories, 
// read directory contents, 
// delete directories recursively, 
// find files by extension, 
// and generate directory tree structures


const fs = require('fs');
const path = require('path');

//Create directories
fs.mkdir('myDirectory', { recursive: true }, (err) => {
    if (err) console.log(err);
    else console.log('Directory created');
});

// adding files to the directory

fs.writeFileSync('./myDirectory/file1.txt', 'Hello, Joy!', (err) => {
    if (err) console.log(err);
    else console.log('File created');
});

// read directory contents,
fs.readdirSync('./myDirectory', (err, files) => {
    if (err) console.log(err);
    else console.log(files);
});

// find files by extension, 
function findFilesUsingExtensionSync(dir, extension) {
    const files = fs.readdirSync(dir);
    const matchedFiles = [];

    files.forEach(file => {
        if (path.extname(file) === extension) {
            matchedFiles.push(file);
        }
    });

    console.log(matchedFiles);
}

findFilesUsingExtensionSync('./week9', '.txt');

//delete directories recursively,
fs.rm('./myDirectory', { recursive: true }, (err) => {
    if (err) console.log(err);
    else console.log('Directory deleted');
});



