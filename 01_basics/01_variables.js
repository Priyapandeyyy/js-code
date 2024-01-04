// Variables are containers for storing data.
// Javascript variables can be declared in 4 ways.

/* 
1. Automatically
2. Using var 
3. Using let ⭐
4. Using const ⭐
*/

// Variables defined with const cannot be redeclared.
// Variables defined with const cannot be reassigned.
// Variables defined with const have Block scope.

// Block scope restricts the variable that is declared inside a specific block, from access by the outside of the block.

// When we write something in const, the value will not change. BUT, the value changes when we write them in let and var.

/* IN JAVASCRIPT WE CAN DECLARE VARIABLE IN TWO WAYS. 
1. Let
2. Var
*/

// WE DON'T USE VAR IN MODERN JAVASCRIPT




const accountId = 1443
let accoutEmail  = "priya.pandeyy@gmail.com"
var accountPassword = "2345"
accountcity = "noida"
let accountState;

// accountEmail = "haha@gmail.com"
// accountPassword = "7654"
// accountcity = "Delhi"
// console.log(accountId)

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accoutEmail, accountPassword, accountcity, accountState])
