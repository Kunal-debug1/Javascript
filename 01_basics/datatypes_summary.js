// # Primitive Data Types(7 types)- call by value
// 1.String
//2.Number
//3.Boolean
//4.Null
//5.Undefined
//6.Symbol
//7.BigInt

const score=100;
const scoreValue=105.26;
const isLoggedIn=false;
let userEmail;

const id= Symbol('123')
const anotherId= Symbol('123')

console.log(id === anotherId);

const bigNumber= 2564845124534564;
// console.log(bigNumber);


//# Reference Type (Non-Primitive)
// always their data types will be object
//1.Array
//2.Objects
//3.Functions

const heros= ["ironman", "superman", "Flying jatt"]

let myObj= {
    name:"Kunal",
    age:22,
}


const myFunction= function(){
    console.log("hello world");
}

console.log(typeof bigNumber);