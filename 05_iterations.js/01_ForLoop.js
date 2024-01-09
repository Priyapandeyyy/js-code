// We also cal for loop as Iteration

// 👽👽👽 FOR 👽👽👽 //

// SYNTAX :

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for loop ka control bohot jump karta hai.

// First we have declared a variable index and set its value as 0.
// Then we check condition :
// index < array.length 
// index ++ checks when we the condition is proved and we go inside the scope and after that we check index ++

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is best number");
//     }
//     console.log(element);
// }

// output ==> 1,2,3,4, 5 is best number, 5, 6, 7, 8, 9

// console.log(element);
// output ==> element is not defined.

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         // console.log(`Inner loop value: ${j} and inner loop ${i}`);
//         console.log(i + '*' + j + '=' + i*j)
//     }
// }

// output : console.log(`Inner loop value: ${j} and inner loop ${i}`)
// Outer loop value: 0
// Inner loop value 0 and inner loop 0
// Inner loop value 1 and inner loop 0
// ..... till Inner loop value 10 
//.. till inner loop is 10 and Output loop value is 10.


// If we have console.log(`Inner loop value: ${j} then :
// Output :
// Outer loop value: 0
// Inner loop value: 0
// Inner loop value: 1 ..... 10
// Outer loop value: 1
// Inner loop value: 0....10
// This will repeat till Output loop value : 10.

// Output : console.log(i + '*' + j + '=' + i*j)
// Output loop value: 0
// 0*0=0
// 0*1=0
// ... till 0*10=0
// ... till Output loop value: 10

let myArray = ["flash", "Batman", "Superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}
// output ==> 3, flash, Batman, Superman

// If we put condition like index <= myArray then :
// output ==> 3, flash, Batman, Superman, undefined.

// 👽👽👽 index++ is important 👽👽👽

// 👻👻👻 KEYWORDS 👻👻👻//

// 1. break ==> Kisi bhi control flow ko break karna hota hai to we use break.
// 2. continue ==> Isme particular condition change ho jati hai baaki sab same rehta hai.

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of i is ${index}`);
    
// }

// Output : console.log(`Value of i is ${index}`); (break)
// Value of i is 1
// ....Value of i is 20

// Output : console.log(`Detected 5`);
// Value of i is 1
// ...Value of i is 4
// Detected 5

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${index}`);
    
}

// Output : console.log(`Detected 5`); (continue)
// Value of i is 1
// ....Value of i is 4
// Detected 5
// Value of i is 6
// ... value of i is 20









