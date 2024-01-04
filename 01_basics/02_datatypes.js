/* 
There is a difference between old javascript and new javascript
*/

"use strict"; //treat all JS code as newer version. WE USUALLY DON'T HAVE TO WRITE USE STRICT.

/*alert(3_+3)  This alert will not work as alert have slight different syntax now 
We are using nodejs not browser
*/

// Code readability should be high

let name = "priya"
let age = 20
let isLoggedIn = false
let state;

// number => 2 to the power of 53 (not sure) is range
//bigint = if the number is very big
// string = ""
//boolean = true/false
//null = standalone value
// undefined = 
//symbol = unique

//object (detailed explanation later)

console.log (typeof "priya");
console.log (typeof age);
console.log (typeof null); // THIS IS A OBJECT (OUTPUT = OBJECT)
console.log (typeof undefined); //THIS IS JUST A TYPE (OUTPUT = UNDEFINED)