// array = It is an object, which enables storing a collection of multiple items under a single variable.

/* 1. Javascript arrays are resizable

2. We cannot acces value ("") like this
 (Javascript arrays are not associated arrays) 
 
 3. Javascript arrays are zero-indexed.

 4. Javascript array-copy-operations create shallow copies.

 shallow copy - jo bhi change karenge wo main copy mai bhi change hoga.
 */

 // Declaration ⭐

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Shakitiman", "Superman"]

// console.log(myArr[0]);

// Array methods ⭐

// myArr.push(6) (add value in array)
// myArr.push(7)
// myArr.pop()  (Will remove the last value)

// myArr.unshift(0)   (In this the value will add at start, which consumes time and gives load to the computer most of the time )
// myArr.shift()   (It will remove the unshift operation).

// console.log(myArr.indexOf(9));
// console.log(myArr.includes(9));

// console.log(typeof myArr);
// console.log(typeof newArr);  (The output wil be same of both but type will change)

//myArr = object
//newArr = string

// Slice, splice ⭐⭐

console.log("A", myArr);
const myn1 = myArr.slice(1, 3)  //(returns a section of array)
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn2);

// DIFFERENCE BETWEEN SLICE AND SPLICE ⭐⭐⭐⭐⭐⭐⭐

// Slice does not manipulate original Array
// But Splice does manipulate original array