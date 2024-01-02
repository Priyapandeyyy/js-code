// In This we will learn about How we can make object singleton using constructor

// const tinderUser = new Object()

// const tinderUser.id = "123abc"
// const tinderUser.name = "Priya"
// tinderUser.isLoggedIn = false

// console.log(tinderUser);
// Output = Empty object '{}'

// const regularUser = {
//     email: "someuser@gmail.com"
//     fullname: {
//         userfullname: {
//             firtsname: "Priya",
//             lastname: "pandey"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);

// cont returnedTarget = Object.assign(target,source); (NOT USED MUCH)
// Object.assign = It is a static method that copies all enumerale own properties from one source objects to a target object. It returns the modified target object.
// Enumerable = to name things separately, one by one.
// FROM FROM MDN.

// WHAT IS ACUALLY ISED MORE FOR ASSIGNMENT IN OBJECT

const obj3 = {...obj1, ...obj2}
console.log(obj3);

// MOST USED SYNTAX WHEN VALUE IS FROM DATABASE

const users = [
    {
        id: 1,
        email: "p321@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Tells that whether the property exists or not


// ***************** OBJECT DESTRUCTURING **************//

//Destructuring = The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

const course = {
    coursename: "js in hindi",
    price: "999",
    cousreInstructor: "hitesh"
}

//cousre.cousreInstructor

const {cousreInstructor} = cousre

console.log(cousreInstructor);


//************** JSON API ***********/

// {                              //(LIKHNE KA TARIKA OF JSON)
//     name: "priya",
//     coursename: "js in hindi",
//     price: "free"
// }

[                       // api in array
    {},
    {},
    {}
]

// RANDOM USER ME API (APP)
// JSON FORMATTER (APP)