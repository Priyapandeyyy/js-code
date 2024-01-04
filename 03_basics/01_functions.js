// function = It means jitna bhi code likha hai usko simple short package mai daal dena or usko jab or jaha use karna ho to use kar lena.

// SYNTAX : 

// function name(params) {
    
// }



function myname() {
//     console.log("P");
// console.log("R");
// console.log("I");
// console.log("Y");
// console.log("A");
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
// console.log("Result: ", result);

// Can also be written as addTwoNumbers("3", "4") 

// OUTPUT = NaN if no value is given in ()

// Parameters = Jab function ki definition banate hai to koi bhi value dete hai (any value)
// Arguments = Or jab function ko call karate hai tab jo uske andar value lete hai use arguments bolte hai

// EXAMPLE OF PARAMETER = (number1, number2) in function
// EXAMPLE OF ARGUMENTS = ("3", "4") in addTwoNumbers

function loginUserMessage(username){
    if(username === undefined){        // if will only run when we evaluate in true form                //(syntax of if)
        console.log("Please enter a username");

    }
    return  `${username} just logged in`         // (we we write retun after console then this return will give us undefined as output)
}

// console.log(loginUserMessage("Priya"))
// No output will generate because the function is executed because we return the value but we have never written to print it

// console.log(loginUserMessage())   // (we have not given any value in the bracket)

// SOME VALUES IN IF STATEMENT :

// 1. ! = conver false to true and true to false
// 2. ""(empty string) = false value
// 3. undefined = false


//************************ FUNCTIONS WITH OBJECTS ******************/

// when we don't know how many values we have (example = shopping cart)

function calculateCartPrice (val1, val2, ...num1){            // val1 ,val2 will take the value of first twol elments in console.
    return num1
}

// console.log(calculateCartPrice(200, 400, 500))   (only 200 will be in the iutput)

// ... = Called rest and spread operation both.
// here ... is a rest operator.

const user = {
    username: "Priya",
    price: 99
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject({
    username: "priya",
    price: 199
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));  (ouput = 400)
console.log(returnSecondValue([200, 400, 100, 600]));   // output = 400