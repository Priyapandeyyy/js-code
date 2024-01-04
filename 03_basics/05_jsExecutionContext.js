// ***************** IMPORTANT FOR INTERVIWES ********************//

// We will learn howdoes javascript works behind the scene

// Execution Contect = Jo bhi file banayi hai wo run kaise karegi.Contect

// Jab bhi javascript pe code aata hai apne aap Global scope execution hota hai

// Jaha pe bhi global Scope variation banega wha pe this variable context ko rakh deta hai.Contect

// Sabka execution context alag hota hai.

// javascript is single threaded hai isme har chiz ek process hoti hai

// *** we have two execution context ** ⭐⭐⭐⭐

// 1. Global
// 2. Function

// ⭐⭐⭐⭐javascript runs your code in two phases. ⭐⭐⭐⭐

// 1. Memory Creation Phase/ Creation Phase
// 2. Execution Phase

// 1. Only variables are declared
// 2. +, - these things happen in execution.

let val1 = 10
let val2 = 5
function addNum(num1, num2) {
    let total = num1 +num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 5)


// 👽👽👽👽👽 Execution 👽👽👽👽👽

// 1. Sabse pehle global execution mai this to lagega hi lagega its compulsory.

// 2. Second is Memory phase
// a. val1 => undefined
// b. val2 => undefined
// c. addnum => definition
// d. result1 => undefined
// e. result2 => undefined

// 3. Third is Execution Phase
// a. val1 => 10
// b. val2 => 5
// c. addNum => (new variable environment + execution thread)  {jitni baar bhi function hoga utn baar new variavle environment + execution phase banega.}
// 
// Iske baad new memory phase banega again
// a. val1 => undefined
// b. val2 => undefined
// c. total => undefined
// 
// Again Execution Context
// a. num1 => 10
// b. num2 => 5
// c. total => 15

// 👽👽Ye jo total hota hai wo wapis se global exceutional context mai return ho jata hai.

// 👽👽👽 Jo har baar new variable + execution thread create hota hai to wo kaam hone ke baad delete hote chalta hai.Again

// This process will continue to repeat until the result.

// 🛸🛸🛸🛸 CALL STACK 🛸🛸🛸🛸🛸

// 1. It is a STACK.CALL
// 2. Sabse pehle stack mai global EC hota hai. 
// 3. Lifo is used (last in first out)

// We can go to console and in sources we can create snippets. 




