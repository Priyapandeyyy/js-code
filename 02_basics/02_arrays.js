const marvel_heroes = ["thor", "Ironman", "Spiderman"]
const dc_heroes = ["Superman", "Flash", "Batman"]

marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);

// Output = it will take array as one element

const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(marvel_heroes);

// Push = Existing array ko push karta hai
// Concat = Returns new array

// Some people don't use concat they used spread instead.
// Spread = Array does not remain array it become individual element.


const all_new_heros = [...marvel_heroes, ...dc_heroes] // we spread the element

const another_array = [1, 2, 3, [4, 5, 6], 7, [6,7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

// Flat = array ke andar jitne bhi array hote hai unko ek array bana deta hai

// Used in Data Scrapping 

console.log(Array.isArray("Hitesh"))   // Asking it to be array or not
console.log(Array.from("Hitesh"))  

//From = Will make it an array.

console.log(Array.from({name: "Priya"})) // FOR INTERVIEW ⭐⭐⭐⭐⭐⭐⭐
// Result is empty array because we have to give it value ki keys ka array banaye ya kis or chiz ka

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));