const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNumbers = myNumbers.map( (Number) => { return Number + 10})
// console.log(newNumbers);

// ⭐⭐⭐ CHAINING ⭐⭐⭐ //

// Chaining ==> It means we can use two or more than two methods together.

const newNumbers = myNumbers
.map( (number) => number * 2)
.map( (number) => number - 1)
.filter( (number) => number >= 13)

console.log(newNumbers);
