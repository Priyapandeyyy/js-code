// function = It means jitna bhi code likha hai usko simple short package mai daal dena or usko jab or jaha use karna ho to use kar lena.

// SYNTAX : 

// function name(params) {
    
// }



function myname() {
    console.log("P");
console.log("R");
console.log("I");
console.log("Y");
console.log("A");
}
  
// it execute when () is used
myname()

function addTwoNumbers(number1, number2){
    // (Method 1) let result = number1 + number2
    // return result
    // (Method 2) console.log(number1 + number2); Result ke baad console nahi likhnge.
    // (Method 3) return number1 + number2
}

const result = addTwoNumbers("3", "4") 
console.log("Result: ", result);

// Can also be written as addTwoNumbers("3", "4") 

// OUTPUT = NaN if no value is given in ()

// Parameters = Jab function ki definition banate hai to koi bhi value dete hai (any value)
// Arguments = Or jab function ko call karate hai tab jo uske andar value lete hai use arguments bolte hai

// EXAMPLE OF PARAMETER = (number1, number2) in function
// EXAMPLE OF ARGUMENTS = ("3", "4") in addTwoNumbers