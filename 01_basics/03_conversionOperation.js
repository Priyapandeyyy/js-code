// let score = 10  .If 33 is like this then it is number

let score = "33" // and if 33 is like this "", then it is a string

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)   // This valueInNumber will convert string into number
console.log(typeof valueInNumber);
console.log(valueInNumber);

// Now we know that InNumber will convert string into numbers, but we are not sure that it will provide exact number or not

// If score or value is null, then output will be 0

// If we write undefined value then we will get Nan

//  If we write a boolean value, then for true = 1 or for false = 0

// If we write string which cannot be converted, then we will get Nan again

/*Summary 

"33" => 33
"33abc" => NaN
true =>1; false => 0  */

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(IsLoggedIn)
console.log(booleanIsLoggedIn);

//Then it will give true or false

/* Summary

1 => true; 0 => false
"" => false
"priya" => true */

let someNumber = 33

let stringNumber = string(someNumber)
console.log(stringNumber);

