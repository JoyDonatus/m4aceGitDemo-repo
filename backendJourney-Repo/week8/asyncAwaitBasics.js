// and understand the difference between sequential 
// and parallel execution patterns

let stocks = {
    fruits : ["Strawberry", "Grapes", "Banana", "Apple"],
    liquid : ["Water", "Ice"],
    holder : ["Cone", "Cup", "Stick"],
    toppings : ["Chocolate", "Peanuts"],
 };

 //Convert promise-based code to async/await, 
let is_shop_open = true;

function time(ms) {

   return new Promise( (resolve, reject) => {

      if(is_shop_open){
         setTimeout(resolve,ms);
      }

      else{
         reject(console.log("Shop is closed"))
      }
    });
}

async function kitchen(){

    // practice error handling with try/catch, 
   try{
     await time(2000)
     console.log(`${stocks.fruits[0]} was selected`)

     await time(0000)
     console.log(`Production has started`)   
    
     await time(2000)
     console.log(`The fruit has been chopped`) 

     await time(1000)
     console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`) 

     await time(1000)
     console.log(`Machine was started`) 

     await time(2000)
     console.log(`${stocks.holder[1]} container was selected`) 

     await time(3000)
     console.log(`${stocks.toppings[0]} was selected`) 

     await time(2000)
     console.log(`Ice-Cream Served`) 

    }

   catch(error){
     console.log("Customer left", error)
   }

   finally{
      console.log("Day ended, shop closed")
    }
}


kitchen();