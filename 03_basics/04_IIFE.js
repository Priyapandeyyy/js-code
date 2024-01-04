// Immediately Invoked Function Expressions(IIFE)

// Reason for using IIFE
// 1. Global scope se pollution nahi chahiye isliye uske variables and else hatane ke liye
// 2. Immediately execute ho jaye

(function Hehe() {
    // function hehe is named IFFE
    console.log(`DB CONNECTED`);
})();    // This is immediately envoke function, jo ki envoke ho to gaya hai lekin ise pata nahi hai ki context kaha rokna hai and for that we use ';' at the end of the function

// Syntax of IFFE = we write () on the whole block and always do parenthesis use honge as shown in above example.
// ()()
// first () = definition of function
// second () = execution call like hehe()

( () => {
    // unnamed IFFE
    console.log(`DB CONNECTED TWO`);
} )()

// these immidiately envoke functions are genrally used in arrow functions.
