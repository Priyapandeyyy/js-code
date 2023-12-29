// Date

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());

let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString()); 

// In javascript months start with 0 .

// 2023-01-14 will give invalid output because when we write in single digit then it will start from 0 (cause its array).
// But when its in double digit then its will start from 01.

let myTimeStamp = Date.now()

// console.log(myTimeStamp);

// console.log(myTimeStamp.getTime()); //for more precise Time

// console.log(Maths.floor(Date.now()/1000); //For miliseconds of time ⭐⭐⭐

// We use Time Stamp when we design quiz, polls.

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());

// ⭐⭐⭐ Important method

newDate.toLocaleString('default', {
    weekday: "narrow",
})