// FILTER : (IMPORTNT ⭐⭐)

// ⭐⭐⭐⭐⭐⭐⭐ MAP DOES NOT TAKE DUPLICATE VALUE ⭐⭐⭐⭐⭐⭐⭐//

// ⭐⭐⭐⭐⭐⭐⭐⭐ IF WE WANT TO CHECK TWO CONDITIONS WE USE &&⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐//

//const coding = ["js", "rb", "java", "py"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })

// console.log(values);

// Output : js, rb, java, py, undefined

// This means that for each loop does not return values.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// ⭐⭐ const newNums = myNums.filter( (num) => num > 4)  ⭐⭐   (This is filter map)

// const newNums = myNums.filter( (num) => {          // (We have scope here, it means that we have to return tha value as if we don't return the value then it will give empty array as output [])
//     return num > 5
// })

const newNums = []

// This is with for each

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
})
console.log(newNums);

// Output for console.log(newNums) : [ 6, 7, 8, 9, 10 ]


