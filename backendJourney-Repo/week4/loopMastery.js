//1. Loop Mastery - Create multiplication tables using nested loops and while loops to understand different iteration patterns

//nested for loop

    for (let i = 1; i <= 10; i++){
        console.log(`Multiplication Table for number ${i}`);
        for(let j = 1; j <= 10; j++){
            console.log(`${i} x ${j} = ${i * j}`);
        }  
    }

//nested while loop

let i = 1;

while (i <= 10) {
    console.log(`Multiplication Table for ${i}`);
    let j = 1;
    while (j <= 10){
        console.log(`${i} x ${j} = ${i * j}`);
        j++;
    }
    i++;
}