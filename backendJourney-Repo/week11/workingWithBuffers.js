//Working with Buffers - Practice creating buffers from different sources, 
// writing to buffers, slicing and concatenating buffers, 
// and converting between buffers and JSON

//creating buffers from different sources
const buf = Buffer.from('Hello, World!');
console.log('Buffer from string:', buf);


const emptyBuf = Buffer.alloc(10);
console.log("Empty Buffer:", emptyBuf);

//writing to buffers, slicing and concatenating buffers,
emptyBuf.write("Joy");
console.log("After Writing:", emptyBuf);
console.log("Read as String:", emptyBuf.toString());

const frame1 = Buffer.from("Learning ");
const frame2 = Buffer.from("Buffers!");


const combined = Buffer.concat([frame1, frame2]);
console.log("Combined String:", combined.toString());

// Slicing out the word "Buffers"

const slicedWord = combined.subarray(9, 16); 
const slicedWord2 = combined.slice(9, 16);
console.log("Sliced String:", slicedWord.toString());
console.log("Sliced String2:", slicedWord2.toString());


//converting between buffers and JSON
const myBuffer = Buffer.from("Joy");

const bufferJson = myBuffer.toJSON();
console.log("Buffer as JSON Object:", bufferJson);

const reconstructedBuffer = Buffer.from(bufferJson.data);
console.log("Reconstructed Buffer:", reconstructedBuffer);
console.log("Reconstructed String:", reconstructedBuffer.toString());