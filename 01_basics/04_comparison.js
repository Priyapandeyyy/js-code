// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log( 2 != 1;

/*  These comparison are simple which does not cause any problem.

But problem arises when two different dataypes are compares */

// console.log("2" > 1); => true
// console.log("02" > 1); => true

//  TWO DATATYPES CAN NEVER BE COMPARED

// console.log(null > 0) => false    . WE USUALLY 
// console.log(null == 0); => false  . AVOID 
// console.log(null >= 0); => true   . THESE

/************* THE REASON THAT AN EQUALITY CHECK == AND COMPARISON CHECK > < >= <= WORK DIFFERENTLY ********************
 COMPARISONS CONVERT NULL TO A NUMBER, TREATING IT AS 0.
 THAT'S WHY (3) NULL >=0 IS TRUE AND (1) NULL>0 IS FALSE.
*/

// undefined ko kisi ke saath bhi compare karo, wo hamesha false value dega

// strict check ===

console.log("2" === 2); //=== (strict check) alos checks datatypes

