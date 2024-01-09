// ⭐⭐⭐⭐⭐⭐ REDUCE ⭐⭐⭐⭐⭐⭐ //

// const myNumbers = [1, 2, 3]
// const myTotal = myNumbers.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 3) 

// console.log(myTotal);

// acc ==> Accumulator
// currval ==> Current Value

// Jo hi last mai hum ',' ke baad likh rahe hai wo value accumulator mai sabse pehle likhene.

// OUTPUT :
// acc: 3 and currval: 1
// acc: 4 and currval: 2
// acc: 6 and currval: 3
// 9

// const myTotal = myNumbers.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);
// (They are same but just above has more readability)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "Python course",
        price: 4950
    },
    {
        itemName: "CSS couse",
        price: 1990
    },
    {
        itemName: "React Course",
        price: 6000
    },
    {
        itemName: "C++ couse",
        price: 3999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);





