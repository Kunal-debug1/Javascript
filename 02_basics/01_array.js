// Array

const myArr = [1,2,3,4,5]
//console.log(myArr)

const myHeros = ["Ironman","Thor","Human"]
//console.log(myHeros)

const myArr2 = new Array(1,2,5,3,6,4)
//console.log(myArr2[1])

// Array Methods

// myArr.push(8)
// myArr.pop()
// console.log(myArr)

 //myArr.unshift(7)
//  myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(2));
// console.log(myArr)

// const newArr =myArr.join()
// console.log(newArr);
// console.log(myArr)

// console.log(typeof newArr);

// Slice, Splice

console.log("A ", myArr)

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr)

const myn2 =myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);