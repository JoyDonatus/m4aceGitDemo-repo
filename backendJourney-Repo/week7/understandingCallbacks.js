// implement error-first callbacks pattern, 
// and create a simple event emitter

//Understanding Callbacks - Simulate asynchronous operations with callbacks, 

setTimeout(()=>{
  console.log("eat");
},2000)

console.log("Ice Cream");

// demonstrate callback hell with nested callbacks, 

//Making Ice-Cream based on order placed. Steps to make Ice Cream:
//Place Order - 2 secs
// Cut the fruit - 2 secs
// Add water and ice - 1 sec
// Start the machine - 1 sec
// Select Container - 2 secs
// Select Topping - 3 secs
// Serve Ice Cream. - 2 secs

let stocks = {
    Fruits : ["Strawberry", "Grapes", "Banana", "Apple"],
    liquid : ["Water", "Ice"],
    holder : ["Cone", "Cup", "Stick"],
    toppings : ["Chocolate", "Peanuts"],
 };

let order = (fruit_name, call_production) =>{

  setTimeout(function(){

    console.log(`${stocks.Fruits[fruit_name]} was selected`)

    call_production();
  },2000)
};



let production = () =>{
    setTimeout(()=>{
        console.log("production has started")

        setTimeout(()=>{
            console.log("The fruit has been chopped")

            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`)

                setTimeout(()=>{
                    console.log(`Ice-Cream Machine was started`)

                    setTimeout(()=>{
                        console.log(`${stocks.holder[1]} container was selected`)

                        setTimeout(()=>{
                            console.log(`${stocks.toppings[0]} was selected`)

                            setTimeout(()=>{
                                console.log(`Ice-Cream Served`)
                            },2000)

                        },3000)

                    },2000)

                },1000)

            },1000)

        },2000)

    },0000)
};


order(0, production);

