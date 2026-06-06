//Stream Operations -

// and build custom readable streams


const fs = require('fs');
const { Readable, Transform} = require('stream');

// Read large files with streams
const readerStream = fs.createReadStream('input.txt', 'utf8');
const writerStream = fs.createWriteStream('output.txt');

// read and write data with streams
writerStream.write('Hello Joy! I am writing this text into the stream.\n');

readerStream.on('data', (chunk) => {
    //writerStream.write(chunk);
    console.log('Chunk received:', chunk);  
});

writerStream.write('This is a second line of text.');

readerStream.on('end', () => {
    console.log('Finished reading file');
});

readerStream.on('error', (err) => {
    console.error('Error reading file:', err);
});

//pipe streams together

readerStream.pipe(writerStream);

// create transform streams, 
class UpperCaseTransform extends Transform {
    _transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
}

//build custom readable streams
class dataReadable extends Readable {
    constructor(count=1) {
        super();
        this.count = count;
    }

    _read() {
        if (this.count <= 5) {
            this.push(String(this.count));
            this.count++;
        } else {
            this.push(null);
        }
    }
}

const myStream = new dataReadable(10);
myStream.pipe(process.stdout);
