// ForIn (Oject Loop)

// SYNTAX :

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${[key]}`);
}

// Output for : console.log(key) :
// js, cpp, rb, swift

// Output for : console.log(myObject[key]) :
// javascript
// C++
// Ruby
// Swift by apple

// Output for : console.log(`${key} shortcut is for ${[key]}`) :
// js shortcut is for js
// cpp shortcut is for cpp
// rb shortcut is for rb
// swift shortcut is for swift   

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
        
    }

// Output console.log(key) : 0,1,2,3,4

// In forof loop it takes direct values
// In forIn loop it does not take direct value instead it akes keys

// Output for : console.log(programming[key]) :
// js, rb, py, java, cpp

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")
map.set('Ru', "Russia")

for (const key in map) {
        console.log(key);
    }

// Output will show no error but also will not give any result that is because this map is not iterative.

