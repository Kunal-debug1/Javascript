const marvel = ["ironman","thor", "spiderman"]
const dc = ["superman", "flash" , "batman"]

// marvel.push(dc)

// console.log(marvel);
// console.log(marvel[3][1]);

// const allHeros = marvel.concat(dc)
// console.log(allHeros);

// Concate and spread operations
// const allHeros = [...marvel,...dc]
// console.log(allHeros); 

// const new1 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const newAnother = new1.flat(Infinity)
// console.log(newAnother);

console.log(Array.isArray("Kunal"))
console.log(Array.from("Kunal"));
console.log(Array.from({name : "Kunal"}));  // interesting
 

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
