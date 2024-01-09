// for of

// FOR OF ==> For arrays
// FOR IN ==> For Objects


// SYNTAX :

// for (const iterator of object) {
    
// }

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello Duniya"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Output :
// Each char is H
// Each char is e
// Each char is l
// Each char is l
// Each char is o
// Each char is
// Each char is D
// Each char is u
// Each char is n
// Each char is i
// Each char is y
// Each char is a


// ⭐⭐⭐ MAPS ⭐⭐⭐ //

// Maps are a datatype
// There are no duplicate value, only unique value

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")
map.set('Ru', "Russia")

// console.log(map);

// Output :
// 'IN' => 'India',
// 'USA' => 'United States Of America'

// NOTE : If we write India two times then only one time India will print as map does not hold any duplicate value

for (const key of map) {
    // console.log(key);
}

// Output for : console.log(key);
// [ 'IN', 'India' ]
// [ 'USA', 'United States Of America' ]
// [ 'Fr', 'France' ]
// [ 'Ru', 'Russia' ]

// We don't want whole arrow like this and for that we will destructure the array :

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

// Output :
// IN :- India
// USA :- United States Of America
// Fr :- France
// Ru :- Russia

const myObject = {
    'game1' : 'Cricket',
    'game2' : 'Football'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
}

// Output : myObject is not iterable

// If we write game1 and game2 like this and npt like 'game1' and 'game2' then again output will show myObject is not iterable.

