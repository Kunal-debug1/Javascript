/* Comparison Operators */

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2">1); //convert into num
// console.log("22">1);

console.log(null>0);
console.log(null==0);
console.log(null>=0);//conversion value
//reason is tha an quality check == and comparison < <>= <= work differently
//comparisons convert null to a number , treating it as 0.
//thats why(3) null>= 0 is true and (1) null>0 is false.

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined < 0);

 //===========

 console.log("2" == 2);

 // avoid all this comparision