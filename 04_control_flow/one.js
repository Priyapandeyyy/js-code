// If (Control flow)

//SYNTAX :

//   if (condition) {
    
//   }

  // Condition => If true then only we will enter into scope
  // If false we will not go in.

  // COMPARISON
//   1. <
//   2. >
//   3. <=
//   4. >=
//   5. ==
//   6. !=
// 7. ===

// = : for operatior assinment.  
// == : for checking the value is equal or Not. 
// === : It checks equal and also checks the type.

// const temperature = 10

// if ( temperature < 50) {
//     console.log("less than 50");
// }

// console.log("temperature is less than 50");

//In If condition we can check through many things
// SO, we use else statement as it is a conditional statement.

// if ( temperature === 50) {
//     console.log("less than 50");
// } else {
//     console.log("temperature is less than 50");
// }

// console.log("Execute");

// const score = 200

// if (scor > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }


// console.log(`User power: ${power}`);

// Output = power is not defined.
// var ka scope global hai.

//**short hand notation ***/

const balance = 1000

// if (balance > 500) console.log("test");

// We didn't use semicolom {} but it is still a scope.
// We call it Implecet code isse lekin ek hi line mai likhte hai.
// Not good professionaly.

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 750");
// } else {
//     console.log("less than 1200");
// }

// OUTPUT = less than 1200

// 🎀🎀🎀🎀 USE IN REAL LIFE 🎀🎀🎀🎀 //

// Online shopping or course purchase

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInfromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInfromEmail) {
    console.log("User logged in");
}
// && ==> (AND operator) From this we can check more than one condition together.
// Isme sari condition true hoti hai tabhi work karta hai.

// If we have even one condition that is false than we will not enter into the if statement.

// || ==> (OR operator) Used to check multiple condition
// Isme ek bhi value true hoti hai to work karta hai

// ⭐⭐ THEY ARE CALLED LOGICAL OPERATOR.






