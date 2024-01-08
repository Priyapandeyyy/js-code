// Switch ==> ek value ko multiple condition se check karna hota hai

// SYNTAX :

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// key ==> jo value hume check karni hai.
// break ==> agar na ho to uske baad ka sara code execute karta hai 🌸 except defualt 🌸

const month = 3
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
        

    default:
        console.log("default case match");
        break;
}

// Agar string ho jaise "March" then sabki value string jaise ho jayegi.
// Example: Case 1 changes into Case "jan".

