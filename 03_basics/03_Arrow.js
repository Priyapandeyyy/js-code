// this = for current context

const user = {
    username: "priya",
    price: 999,

    welcomeMessage: function() {
        // console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()      (In here this function is used as the context is same)
// user.username = "Hitesh"   (But In here we have changed the context so the ouput will aslo change)
// user.welcomeMessage()

// console.log(this);     // (output = {} ==> empty paraenthesis)
// But is we write console.log(this) in console then it will show a window and not a empty paraenthesis


// +++++++++++++++++ ARROW  FUNCTION ( => )++++++++++++++++

// function Haha() {
//     console.log(this.username);       // (this.username ==> undefined)
// }

// Haha()

// const Haha = function () {
//     let username = "priya"
//     console.log(this.username);
// }

// Haha()   (output = undefined)

const Haha = () => {
    let username = "priya"
    console.log(this);
}

Haha()

// SYNTAX OF ARROW FUNCTION

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }    (output = 7)

// Implicit return = we don't ue parenthesis because we agree that we don't have any need to write  return keyword.
const addTwo = (num1, num2) => num1 + num2   // don't have to write return
    
console.log(addTwo(3, 4));


// {} = return likhna padega
// () = return nahi likhna padega

// Advantage of ()

// Object wrapped ho jata hai

