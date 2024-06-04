// Primitive data type

//7 types : String, Numbers, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue =100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

const bigNumber = 345667854678643568856n



//Reference (Non-Primitive)

//Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"]
let myobj = {
    name : "hritik",
    age: 20
}

const myFunction = function(){
    console.log("Hello world");
}




// ******************** Memory ****************************

//Stack(primitive),Heap(non-primitive)

let myYoutubename = "codewithhritik"

let anothername = myYoutubename
anothername = "codewithchasmis"

console.log(myYoutubename)
console.log(anothername)

let userOne = {
email : "usergoogle.com",
upi : "user@byl"
}
let userTwo = userOne 

userTwo.email = "hritik483@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)

