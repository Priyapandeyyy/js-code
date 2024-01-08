// Till now we are doing If cases in which we are learning by proving the conditions true or false.
// 🌸🌸 But there are some cases in which we assume that they are either true or false 🌸🌸

// const userEmail = "Priya@gmail.com"

// if (userEmail) {
//     console.log("Got User email");
// } else {
//     console.log("Don't have user email");
// }

// Output ==> Got user email
// If we notice than we have not written any === condition ot stated anything is true in this if condition but still we got the output.

// 💎💎 Truthy ==> When we assume that the string has true value 💎💎 //

// Even if we have empty string it will still give the ouput like " DOn't have user email".

// ⭐⭐⭐⭐ RULES FOR FALSY VALUES ⭐⭐⭐⭐//

// 1. false
// 2. 0
// 3. -0 (Mostly for interview)
// 4. BigInt (0n)
// 5. ""
// 6. null
// 7. undefined
// 8. NaN

// ⭐⭐⭐⭐ RULES FOR TRUTHY VALUE ⭐⭐⭐⭐ //

// 1. Whichever values is not falsy are truthy value. 
// 2. "0"
// 3. 'false'
// 4. " "
// 5. []
// 6 {}
// 7. function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// WE CAN CHECK IT N CONSOLE.

// 👽👽👽 NULLISH COALESCING OPERATOR (??): null undefined 👽👽👽 //

// The nullish coalescing ( ?? ) operator is a 🌸🌸 logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined 🌸🌸

let val1;
// val1 = 5 ?? 10
// output ==> 5

// val1 = null ?? 10
// output ==> 10

// val1 = undefined ?? 15
// Output ==> 15

// val1 = null ? 10 ?? 20
// Output ==> 10 (jo value pehle milti hai wahi assign hoti hai)

console.log(val1);


// 👽👽👽 TERNIARY OPERATOR 👽👽👽 //

// It is commonly referred to as the conditional operator, ternary if, or inline if (abbreviated iif). An expression a ? b : c evaluates to b if the value of a is true, and otherwise to c

// Nullish operator and Terniary Operator are two different operator.

// SYNTAX :

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more tha 80");

// Output ==> less than 80.
// But if we put condition like <=80 than the ouput will be :
// Output ==> more than 80.

