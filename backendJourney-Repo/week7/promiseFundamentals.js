//create a promise from scratch

let is_shop_open = false;

const myPromise = new Promise((resolve, reject) => {
    if( is_shop_open ){
        resolve('Please place your order');
    } else {
        reject('I\'m sorry, we are closed for the day');
    }
});

myPromise.then((message) => {
    console.log(message);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('Thank you for visiting our shop today');
    });

//Converting callback-based function to Promise-Based using the ice-cream call back hell example in the understandingCallbacks.js file.
let stocks = {
    Fruits : ["Strawberry", "Grapes", "Banana", "Apple"],
    liquid : ["Water", "Ice"],
    holder : ["Cone", "Cup", "Stick"],
    toppings : ["Chocolate", "Peanuts"],
 };

let order = ( time, work ) => {

  return new Promise( ( resolve, reject )=>{

    if( is_shop_open ){

      setTimeout(()=>{

        resolve( work() )

       }, time)

    }

    else{
      reject( console.log("Our shop is closed") )
    }

  })
}
 

//Practicing promise chaining

order( 2000, ()=>console.log(`${stocks.Fruits[0]} was selected`))


.then(()=>{
  return order(0000, ()=>console.log(`Production has started`))
})

.then(()=>{
  return order(2000, ()=>console.log(`The fruit has been chopped`))
})

.then(()=>{
  return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`))
})

.then(()=>{
  return order(1000, ()=>console.log(`${stocks.machine[0]} was started`))
})

.then(()=>{
  return order(2000, ()=>console.log(`${stocks.holder[1]} container was selected`))
})

.then(()=>{
  return order(3000, ()=>console.log(`${stocks.toppings[0]} was selected`))
})

.then(()=>{
  return order(2000, ()=>console.log(`Ice-Cream Served`))
})


//error handling
.catch(()=>{
  console.log("Sorry, we are closed");
})

.finally(()=>{
  console.log("End of Day");
});