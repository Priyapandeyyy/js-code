//  Kis tarah se data ko memory mai rakha jata hai or access kiya jata hai use do types mai bata gaya hai. 
// they are primitive and non-primitive.


/*  PRIMITIVE DATATYPE
7 types : String, Number, Boolean, null, undefined, Symbol, BigInt ⭐
*/

/*  REFERENCE (NON-PRIMITIVE)
Array, Objects, Functions ⭐
*/

// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = symbol('123')
// const anotherId = symbol('123')

// console.log(id === anotherId); // ==> false

// const bigNumber = 72304829086474n // n lagane pe big int ban jata hai

// const heros = ["shaktiman", "spiderman", 'baalveer'];
// let myObj{                      
//     name: Priya,
//     age: 22,
// }

//curly braces ke andar object likhte hai.
// isme datatype kuch bhi ho sakta hai


//DECLARATION OF FUNCTION

// const myFunction = function(){
//     console.log("Hello world");
// }

// Data ka type pata typeof se karte hai

// console.log(typeof bigNumber); // ==> undefined
// console.log(typeof outsideTemp); // ==> object
// console.log(typeof myFunction);  // ==> Function
// console.log(typeof symbol);  // ==> symbol




// ******************************************************************************//

// STACK AND HEAP MEMORY 

// Stack (Primitive), Heap (Non- Primitive)

// In stack whatever we have created we will get a copy of it.  ⭐⭐
// and in heap we get reference of orginal value, means changes will be done in original. ⭐⭐


let myYoutubename = "Priyapandey@com"

let anothername = myYoutubename

anothername = "Priya Pandey"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : "user123@gmail.com",
    upi : "user@sbi",
}

// userTwo.email ==> This is how we access

// SUMMARY

// Jitne bhi primitive values hote hai wo stack mai jate hai. Or stack ke andar hamesha kisi bhi chiz ka copy milta hai
// or heap mai reference