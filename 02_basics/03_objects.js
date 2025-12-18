// singleton
//Object.create();

//object literals
const mySym = Symbol("key1")

const JsUser ={
    name:"Kunal",
    "full name" : "Kunal Gaikwad",
    [mySym]: "myKey1",
    age: 21,
    location:"hyderabad",
    email:"kunal@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// Access objects values

// console.log(JsUser.email);
// console.log(JsUser["email"]);
//console.log(JsUser.full name;  no works thats why always preferd another way
// console.log(JsUser[ "full name"]);
// console.log(JsUser[mySym]);

// // Change values
// JsUser.name = "amol"
// console.log(JsUser["name"])

// //for freezing the object
// Object.freeze(JsUser)

// JsUser.name = "amol"
// console.log(JsUser["name"])

JsUser.greeting = function(){
    console.log(
        "Hello JS user"
    );
    
}
JsUser.greetingTwo = function(){
    console.log(
        `Hello JS user, ${this.name}`
    );
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());