// Scope determines the accessibility (visibility) of variables.

// JavaScript variables have 3 types of scope:

// Block scope
// Function scope
// Global scope

// {} = scope
// object mai {} is declaration
// This is called scope when it is with function or if and else

let a = 300 // then output mai ye value print hogi kyuki ye global value hai

if (true) {
    let a = 10
const b = 20
// var c = 30
// console.log("INNER: ", a);   // for this output will be INNER: 10 and 300
}

// console.log(a);
// console.log(b);
// console.log(c);

// we should avoid var

// if ke andar ki value is block/local scope
// uske bahar ki value is global scope
// jo value block scope mai hoti hai wo global mai bhi hoti hai

// Jab browser ke console mai dekhenge to wo scope alag hai
// or jab code environment mai node ki through dekhte hai to wo scope lag hai

/******************* SCOPE LEVEL AND MINI HOSTING ******************/

/***** NESTED SCOPE *******/

function one(params) {
    const username = "priya"

    function two(params) {
        const website = "youtube"
        console.log(username);          // ( ye pehle wale ka hai dhyan se dkehh)
    }
    // console.log(website);

    two()
}
// one()

// One is bigger and two is smaller
// For two, one is global scope so it can take value from there.
// But one cannot take value from two.
// console.log(username); is inside two and it is taking value from one which is valid.
// But console.log(website); is outside two and two's variable are already defined and console.log(website); is not in that.

// OUTPUT WILL BE ERROR is console.log(website); is printed so we will coment it.

if (true) {
    const username = "priya"
    if (username === "priya") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);  (error ouput = website is not defined)
}
// console.log(username); (error output = username is not defined)

// +++++++++++++ INTERESTING (hosting) ++++++++++++++++++++

console.log(addOne(5));      // if we write addOne here with console.log (ouput = 6)

function addOne(num) {
    return num + 1
}
           // if we write addOne here (output = value return ho jayegi lekin koi value nahi aayegi kyuki koi value print nahi hui hai)

 
console.log(addTwo(5));           // (ouput = Cannot access 'addTwo' before initialization) 
const addTwo = function (num) {
    return num + 2
}
              // if we write addTwo(5) (same output as before)


