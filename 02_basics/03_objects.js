// Object can be declared in two ways :
// 1. Literal and 2. Constructor

// Singleton = Koi bhi constructor se object banate hai to wo single hota (eklota hota hai)

// Constructor se hamesha singleton banega Literal se kabhi nahi banega. ⭐⭐⭐
// Object.create ==> Constructor method

// ARray = []
// Obejct = {}

// OBJECT LITERALS 
const mySym = Symbol("key1")

const Jsuser = {
    name: "Priya",       // In object we can define key and value both but not in array.
    "full name": "Priya Pandey",
    mySym: "mykey1",   // This is still not used as a symbol if we see its datatype (By using Typeof)
    age: 18,               // We will use [mySym to declare it as symbol]
    location: "Noida",
    email: "Priya@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]
}

// console.log(Jsuser.email);     // (We can access by bith ways)
// console.log(Jsuser["email"]);  // (This way is more useful)
// console.log(Jsuser["full name"]);
// console.log(typeof Jsuser[mySym]);

// How to declare SYMBOL

// QUESTION = Take a symbol, add it in object key and decare it ⭐⭐⭐⭐
// Answer = Use [mySymb] instead pf mySYm


Jsuser.email = "PriyaHaha@gmail.com"
// Object.freeze(Jsuser)   // Freeze = Value change nahi hogi (or iske niche ki likhi hui value print nahi hogi)
Jsuser.email = "Priyayy@haha.com"
// console.log(Jsuser);

// ADDING FUNCTIONS

// functions can be treated as variales

Jsuser.greeting = function(){
    console.log("Hello Cuties");
}

Jsuser.greetingTwo = function(){
    console.log(`Hello Cuties, ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());

// kisi bhi object ko refrence karne ke liye we will first convert string into baptism (``)
// Now we can write any variable using dollar and curly bracet sign
// This = Jab bhi same object ko refernce kanra ho
// This. = Jo bhi object hai uske andar ki property '.' lagane se mil jayegi.