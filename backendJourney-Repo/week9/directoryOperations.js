//Directory Operations - Create directories, 
// read directory contents, 
// delete directories recursively, 
// find files by extension, 
// and generate directory tree structures


const fs = require("fs");
const path = require("path");

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
fs.readdir('./myDirectory', (err, files) => {
    if (err) console.log(err);
    else console.log(files);
});

// find files by extension, 
function findFilesUsingExtensionSync(dir, extension) {

    const files = fs.readdirSync(dir);

    const matchedFiles = [];

    files.forEach(file => {

        if(path.extname(file) === extension){

            matchedFiles.push(file);

        }

    });

 console.log(matchedFiles);
}

findFilesUsingExtensionSync('./myDirectory', '.txt');

//generate directory tree structures
function directoryTree(folderPath, indent = "") {

   const files = fs.readdir(folderPath);

   files.forEach(file => {

      const fullPath = path.join(folderPath, file);

      const stats = fs.statSync(fullPath);

      console.log(indent + file);

      if(stats.isDirectory()) {
         directoryTree(fullPath, indent + "   ");
      }

   });
}

//delete directories recursively,
fs.rm('./myDirectory', { recursive: true }, (err) => {
    if (err) console.log(err);
    else console.log('Directory deleted');
});

