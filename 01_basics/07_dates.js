// // Dates

// let myDate = new Date();

// // Full date and time string
// console.log(myDate.toString());
// // Example: "Wed Sep 10 2025 15:45:12 GMT+0530 (India Standard Time)"

// // Only the date portion (human readable)
// console.log(myDate.toDateString());
// // Example: "Wed Sep 10 2025"

// // Locale-specific date + time (depends on your system settings)
// console.log(myDate.toLocaleString());
// // Example (India): "9/10/2025, 3:45:12 PM"

// // Type of the object
// console.log(typeof myDate);
// // "object"


// let myCreatedDate =new Date(2025,0,23)

// let myCreatedDate =new Date(2025,0,23,5 ,6)
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());


//let myCreatedDate =new Date('10-01-2025') 
//console.log(myCreatedDate.toLocaleString())

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000));
 
let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

//`${newDate.getDay()} and the time `

newDate.toLocaleString('defalut', {
    weekday: "long"
})