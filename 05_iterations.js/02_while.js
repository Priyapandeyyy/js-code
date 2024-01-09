// ♦️♦️♦️ While Loop ♦️♦️♦️ //

// SYNTAX //

// let something = something
// while (condition) {
    
// }

// In this Condition we don't check true or false.

let index = 0
while (index <= 10) {
    console.log(`value of index is ${index}`);
    index = index + 2
}

// Output for : console.log(`value of index is ${index}`);
    //index = index + 2
// Value of index is 0
// value of index is 2
// Value of index is 4
// ... Value of index is 10

let myArray = ['Haha', 'Hehe', 'Huhu']

let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

// Output :
// Value is Haha
// Value is Hehe
// Value is Huhu

// ♦️♦️♦️ DO WHILE LOOP ♦️♦️♦️ //

// In this, the condition is in end.
// Means first we perform work and then we checks condition.

// SYNTAX //

// do {
    
// } while (condition);

let score = 11

do {
    console.log(`Score is ${score}`);  
    score ++  
} while (score <= 10);

// Output for : let score = 1
// Score is 1
// ...Score is 10

// Output for : let score = 11
// Score is 11


